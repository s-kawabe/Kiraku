import { gql } from '@apollo/client'
import {
  Button,
  Center,
  Flex,
  SimpleGrid,
  Spinner,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from '@chakra-ui/react'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useEffect, useState } from 'react'
import { Fragment } from 'react'

import { addApolloState, initializeApollo } from '@/apollo/client'
import type {
  GetAllTopicsQuery,
  GetAllTopicsQueryVariables,
  GetTopicOneQuery,
  GetTopicOneQueryVariables,
  GetTopicWithBlogQuery,
  GetTopicWithPostQuery,
} from '@/apollo/graphql'
import {
  GetAllTopicsDocument,
  GetTopicOneDocument,
  useGetTopicWithBlogQuery,
  useGetTopicWithPostQuery,
} from '@/apollo/graphql'
import { BlogCard } from '@/components/blog/container'
import { IconHeading } from '@/components/common/unit'
import { NextImage } from '@/components/common/unit'
import { LayoutWithHead } from '@/components/layout/container'
import { PostCard } from '@/components/post/container'
import { convertBlogContentToString, getTopImage } from '@/utils/methods/blog'

type Props = {
  topics: GetTopicOneQuery['topics_by_pk']
}

const LIMIT_OFFSET = 1

const TopicPage: NextPage<Props> = (props: Props) => {
  const [postOffset, setPostOffset] = useState(LIMIT_OFFSET)
  const [blogOffset, setBlogOffset] = useState(LIMIT_OFFSET)
  const [posts, setPosts] = useState<GetTopicWithPostQuery['posts']>([])
  const [blogs, setBlogs] = useState<GetTopicWithBlogQuery['blogs']>([])
  const { data: postData, fetchMore: postFetchMore } = useGetTopicWithPostQuery({
    variables: {
      topicId: props.topics?.id as number,
      limit: LIMIT_OFFSET,
      offset: 0,
    },
  })
  const { data: blogData, fetchMore: blogFetchMore } = useGetTopicWithBlogQuery({
    variables: {
      topicId: props.topics?.id as number,
      limit: LIMIT_OFFSET,
      offset: 0,
    },
  })

  console.log({ postOffset, blogOffset })

  // ポストの追加fetch
  const handleMoreLoadPost = async () => {
    setPostOffset((p) => {
      return p + LIMIT_OFFSET
    })
    const addFetchData = await postFetchMore({
      variables: {
        topicId: props.topics?.id as number,
        limit: LIMIT_OFFSET,
        offset: postOffset,
      },
    })
    if (addFetchData) {
      setPosts((p) => {
        return [...p, ...addFetchData.data.posts]
      })
    }
  }

  // ブログの追加fetch
  const handleMoreLoadBlog = async () => {
    setBlogOffset((p) => {
      return p + LIMIT_OFFSET
    })
    const addFetchData = await blogFetchMore({
      variables: {
        topicId: props.topics?.id as number,
        limit: LIMIT_OFFSET,
        offset: blogOffset,
      },
    })
    if (addFetchData) {
      setBlogs((p) => {
        return [...p, ...addFetchData.data.blogs]
      })
    }
  }

  // 初回レンダリング時、最初の取得件数分をstateに格納
  // 実際にmapするのはhooksから取得したdataではなくstateを使用
  useEffect(() => {
    if (postData !== undefined && blogData !== undefined) {
      setPosts(postData.posts)
      setBlogs(blogData.blogs)
    }
    return () => {
      setPostOffset(LIMIT_OFFSET)
      setBlogOffset(LIMIT_OFFSET)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postData, blogData])

  return (
    <LayoutWithHead title={`トピックス「${props.topics?.name}」`} sideMenu>
      <Center pt="10px" my="40px">
        <VStack spacing="10">
          <IconHeading
            type="topic"
            text={props.topics?.name as string}
            color="gray.500"
            size="lg"
          />
          {postData && blogData ? (
            <Tabs>
              <TabList borderBottom="1px" borderColor="gray.300" w={['100vw', '90vw', '80vw']}>
                <Tab>
                  <Text color="gray.600" fontSize="18px" fontWeight="bold">
                    ポスト {postData?.posts_aggregate.aggregate?.count}
                  </Text>
                </Tab>
                <Tab>
                  <Text color="gray.600" fontSize="18px" fontWeight="bold">
                    ブログ {blogData?.blogs_aggregate.aggregate?.count}
                  </Text>
                </Tab>
              </TabList>

              {/* post tab */}
              <TabPanels>
                <TabPanel px="0" py="6">
                  {postData.posts.length === 0 ? (
                    <VStack spacing="5">
                      <Text fontSize={['14px', '16px']} color="gray.500" fontWeight="bold">
                        このトピックが付けられた投稿はまだありません
                      </Text>
                      <NextImage src={'/show.svg'} alt={'投稿なし'} width={300} height={320} />
                    </VStack>
                  ) : (
                    <Center flexDirection="column">
                      <Flex>
                        <SimpleGrid columns={[1, 1, 1, 1, 2]} spacingX={6} spacingY={6}>
                          {posts &&
                            posts.map((post) => {
                              return (
                                <Fragment key={post.id}>
                                  <PostCard
                                    imageSrc={post.image}
                                    postId={post.id}
                                    text={post.content}
                                    userIcon={post.user.image ?? '/nouser.svg'}
                                    userName={post.user.name as string}
                                    userId={post.user.display_id}
                                    commentCount={
                                      post.comments_aggregate.aggregate?.count as number
                                    }
                                    likeCount={post.likes_aggregate.aggregate?.count as number}
                                    isSmall={true}
                                  />
                                </Fragment>
                              )
                            })}
                        </SimpleGrid>
                      </Flex>
                      <Button my="40px" onClick={handleMoreLoadPost}>
                        もっと見る
                      </Button>
                    </Center>
                  )}
                </TabPanel>

                {/* blog tab */}
                <TabPanel px="0" py="6">
                  {blogData.blogs.length === 0 ? (
                    <VStack spacing="5">
                      <Text fontSize={['14px', '16px']} color="gray.500" fontWeight="bold">
                        このトピックが付けられた投稿はまだありません
                      </Text>
                      <NextImage src={'/show.svg'} alt={'投稿なし'} width={300} height={320} />
                    </VStack>
                  ) : (
                    <Center flexDirection="column">
                      <Flex>
                        <SimpleGrid columns={[1, 1, 2, 2, 3]} spacingX={8} spacingY={8}>
                          {blogs &&
                            blogs.map((blog) => {
                              return (
                                <Fragment key={blog.id}>
                                  <BlogCard
                                    title={blog.title}
                                    text={convertBlogContentToString(blog.content)}
                                    blogId={blog.id}
                                    userIcon={blog.user.image ?? '/nouser.svg'}
                                    userName={blog.user.name as string}
                                    userId={blog.user.display_id}
                                    commentCount={
                                      blog.comments_aggregate.aggregate?.count as number
                                    }
                                    likeCount={blog.likes_aggregate.aggregate?.count as number}
                                    topImage={getTopImage(blog.content)}
                                  />
                                </Fragment>
                              )
                            })}
                        </SimpleGrid>
                      </Flex>
                      <Button my="40px" onClick={handleMoreLoadBlog}>
                        もっと見る
                      </Button>
                    </Center>
                  )}
                </TabPanel>
              </TabPanels>
            </Tabs>
          ) : (
            <Center h="100%" w="100%">
              <Spinner />
            </Center>
          )}
        </VStack>
      </Center>
    </LayoutWithHead>
  )
}

export const getStaticProps: GetStaticProps<{ topicId: string }> = async ({ params }) => {
  const client = initializeApollo()
  const { data } = await client.query<GetTopicOneQuery, GetTopicOneQueryVariables>({
    query: GetTopicOneDocument,
    variables: {
      topicId: Number(params?.topicId) ?? 0,
    },
  })
  if (!data.topics_by_pk?.id) {
    return {
      notFound: true,
    }
  }
  return addApolloState(client, { props: { topics: data.topics_by_pk }, revalidate: 300 })
}

export const getStaticPaths: GetStaticPaths<{ topicId: string }> = async () => {
  const client = initializeApollo()
  const { data } = await client.query<GetAllTopicsQuery, GetAllTopicsQueryVariables>({
    query: GetAllTopicsDocument,
  })

  const paths = data.topics.map((topic) => {
    return { params: { topicId: topic.id.toString() } }
  })

  return {
    paths,
    fallback: 'blocking',
  }
}

export default TopicPage

gql`
  query GetTopicOne($topicId: Int!) {
    topics_by_pk(id: $topicId) {
      id
      name
    }
  }
`

gql`
  query GetTopicWithPost($topicId: Int!, $limit: Int!, $offset: Int!) {
    posts(where: { topics: { topic_id: { _eq: $topicId } } }, limit: $limit, offset: $offset) {
      id
      image
      gender
      content
      created_at
      user {
        id
        display_id
        image
        name
      }
      comments_aggregate {
        aggregate {
          count(columns: id)
        }
      }
      likes_aggregate {
        aggregate {
          count(columns: id)
        }
      }
    }
    posts_aggregate(where: { topics: { topic_id: { _eq: $topicId } } }) {
      aggregate {
        count(columns: id)
      }
    }
  }
`

gql`
  query GetTopicWithBlog($topicId: Int!, $limit: Int!, $offset: Int!) {
    blogs(where: { topics: { topic_id: { _eq: $topicId } } }, limit: $limit, offset: $offset) {
      id
      title
      content
      gender
      created_at
      user {
        id
        display_id
        image
        name
      }
      comments_aggregate {
        aggregate {
          count(columns: id)
        }
      }
      likes_aggregate {
        aggregate {
          count(columns: id)
        }
      }
    }
    blogs_aggregate(where: { topics: { topic_id: { _eq: $topicId } } }) {
      aggregate {
        count(columns: id)
      }
    }
  }
`
