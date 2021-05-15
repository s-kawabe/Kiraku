import { gql } from '@apollo/client'
import { Box, Center, Flex, Heading, HStack, SimpleGrid, Text } from '@chakra-ui/react'
import type { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import { Fragment } from 'react'

import { addApolloState, initializeApollo } from '@/apollo/client'
import type {
  GetRecentFamousPostAndBlogQuery,
  GetRecentFamousPostAndBlogQueryVariables,
  GetRecommendTopicPostQuery,
  GetRecommendTopicPostQueryVariables,
  Top10TopicAndBrandQuery,
  Top10TopicAndBrandQueryVariables,
} from '@/apollo/graphql'
import {
  GetRecentFamousPostAndBlogDocument,
  GetRecommendTopicPostDocument,
  Top10TopicAndBrandDocument,
} from '@/apollo/graphql'
import { BlogCard } from '@/components/blog/container/BlogCard'
import { LayoutWithHead } from '@/components/layout/container'
import { PostCard } from '@/components/post/container'
import { convertBlogContentToString, getTopImage } from '@/utils/methods/blog'
import { getOneMonthBeforeDate } from '@/utils/methods/common'
import { useIsDesktop } from '@/utils/methods/customeHooks'

type Props = {
  recommendPost: GetRecommendTopicPostQuery['topics']
  recentFamousPost: GetRecentFamousPostAndBlogQuery['posts']
  recentFamousBlog: GetRecentFamousPostAndBlogQuery['blogs']
}

const Home: NextPage<Props> = (props: Props) => {
  const isPC = useIsDesktop('550px')
  return (
    <LayoutWithHead sideMenu>
      <Center bg="orange.50" borderRadius="100px" mt="20px" pt="3px" mx={['0px', '10px', '20px']}>
        <Box py={['10px', '20px']} px={['10px', '40px']} flexDir="column">
          <HStack spacing="7" color="gray.600" mb="10px">
            <Link href="/">
              <a>
                <Heading fontSize={isPC ? '20px' : '15px'} color="#8C5A30" borderBottom="2px">
                  おすすめ
                </Heading>
              </a>
            </Link>
            <Link href="/feed">
              <a>
                <Heading fontSize={isPC ? '20px' : '15px'}>タイムライン</Heading>
              </a>
            </Link>
            <Link href="/posts">
              <a>
                <Heading fontSize={isPC ? '20px' : '15px'}>ポスト</Heading>
              </a>
            </Link>
            <Link href="/blogs">
              <a>
                <Heading fontSize={isPC ? '20px' : '15px'}>ブログ</Heading>
              </a>
            </Link>
          </HStack>
        </Box>
      </Center>
      <Center bg="white" pt="10px">
        <Box py="10px" px={['10px', '40px']} flexDir="column">
          {/* main */}
          <Box>
            <Box mb="60px">
              <Text
                fontSize={['20px', '26px']}
                color="gray.800"
                fontWeight="bold"
                textAlign="left"
                mb="25px"
              >
                人気のトピック
              </Text>
              <Text
                fontSize={['15px', '17px']}
                color="gray.800"
                fontWeight="bold"
                textAlign="left"
                mb="25px"
                py="8px"
                px="20px"
                borderRadius="18px"
                bg="#FFF2C3"
                display="inline"
              >
                #{props.recommendPost[0].name}
              </Text>
              <Flex mt="25px">
                <SimpleGrid columns={[1, 1, 1, 1, 2]} spacingX={6} spacingY={6}>
                  {props.recommendPost[0].post_topics.map(({ post }) => {
                    return (
                      <Fragment key={post.id}>
                        <PostCard
                          imageSrc={post.image}
                          postId={post.id}
                          text={post.content}
                          userIcon={post.user.image ?? '/nouser.svg'}
                          userName={post.user.name as string}
                          userId={post.user.display_id}
                          commentCount={post.comments_aggregate.aggregate?.count as number}
                          likeCount={post.likes_aggregate.aggregate?.count as number}
                          isSmall={true}
                        />
                      </Fragment>
                    )
                  })}
                </SimpleGrid>
              </Flex>
            </Box>
            <Box mb="60px">
              <Text
                fontSize={['15px', '17px']}
                color="gray.800"
                fontWeight="bold"
                textAlign="left"
                mb="25px"
                py="8px"
                px="20px"
                borderRadius="18px"
                bg="#FFF2C3"
                display="inline"
              >
                #{props.recommendPost[1].name}
              </Text>
              <Flex mt="25px">
                <SimpleGrid columns={[1, 1, 1, 1, 2]} spacingX={6} spacingY={6}>
                  {props.recommendPost[1].post_topics.map(({ post }) => {
                    return (
                      <Fragment key={post.id}>
                        <PostCard
                          imageSrc={post.image}
                          postId={post.id}
                          text={post.content}
                          userIcon={post.user.image ?? '/nouser.svg'}
                          userName={post.user.name as string}
                          userId={post.user.display_id}
                          commentCount={post.comments_aggregate.aggregate?.count as number}
                          likeCount={post.likes_aggregate.aggregate?.count as number}
                          isSmall={true}
                        />
                      </Fragment>
                    )
                  })}
                </SimpleGrid>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Center>
      <Center bg="gray.50" pt="40px">
        <Box py="10px" px={['10px', '40px']} flexDir="column">
          <Box mb="100px">
            <Text
              fontSize={['20px', '26px']}
              color="gray.800"
              fontWeight="bold"
              textAlign="left"
              mb="25px"
            >
              人気のポスト
            </Text>
            <Flex>
              <SimpleGrid columns={[1, 1, 1, 1, 2]} spacingX={6} spacingY={6}>
                {props.recentFamousPost.map((post) => {
                  return (
                    <Fragment key={post.id}>
                      <PostCard
                        imageSrc={post.image}
                        postId={post.id}
                        text={post.content}
                        userIcon={post.user.image ?? '/nouser.svg'}
                        userName={post.user.name as string}
                        userId={post.user.display_id}
                        commentCount={post.comments_aggregate.aggregate?.count as number}
                        likeCount={post.likes_aggregate.aggregate?.count as number}
                        isSmall={true}
                      />
                    </Fragment>
                  )
                })}
              </SimpleGrid>
            </Flex>
          </Box>
        </Box>
      </Center>
      <Center bg="gray.50" pt="40px">
        <Box py="10px" px={['10px', '40px']} flexDir="column">
          <Box mb="100px">
            <Text
              fontSize={['20px', '26px']}
              color="gray.800"
              fontWeight="bold"
              textAlign="left"
              mb="25px"
            >
              人気のブログ
            </Text>
            <Flex>
              <SimpleGrid columns={[1, 1, 2, 2, 3]} spacingX={8} spacingY={8}>
                {props.recentFamousBlog.map((blog) => {
                  return (
                    <Fragment key={blog.id}>
                      <BlogCard
                        title={blog.title}
                        text={convertBlogContentToString(blog.content)}
                        blogId={blog.id}
                        userIcon={blog.user.image ?? '/nouser.svg'}
                        userName={blog.user.name as string}
                        userId={blog.user.display_id}
                        commentCount={blog.comments_aggregate.aggregate?.count as number}
                        likeCount={blog.likes_aggregate.aggregate?.count as number}
                        topImage={getTopImage(blog.content)}
                      />
                    </Fragment>
                  )
                })}
              </SimpleGrid>
            </Flex>
          </Box>
        </Box>
      </Center>
    </LayoutWithHead>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const client = initializeApollo()
  // 人気のtopicとbrand上位２０件を取得
  await client.query<Top10TopicAndBrandQuery, Top10TopicAndBrandQueryVariables>({
    query: Top10TopicAndBrandDocument,
  })
  // 人気のtopic上位２件とそれが付与されている投稿の一覧を取得
  const recommendData = await client.query<
    GetRecommendTopicPostQuery,
    GetRecommendTopicPostQueryVariables
  >({
    query: GetRecommendTopicPostDocument,
  })
  // 直近1ヶ月以内に投稿された投稿10件とブログ9件をいいねが多い順に表示
  const recentData = await client.query<
    GetRecentFamousPostAndBlogQuery,
    GetRecentFamousPostAndBlogQueryVariables
  >({
    query: GetRecentFamousPostAndBlogDocument,
    variables: {
      from: getOneMonthBeforeDate(),
    },
  })
  return addApolloState(client, {
    props: {
      recommendPost: recommendData.data.topics,
      recentFamousPost: recentData.data.posts,
      recentFamousBlog: recentData.data.blogs,
    },
    revalidate: 300,
  })
}

// eslint-disable-next-line import/no-default-export
export default Home

// サイドバーに表示するtopicとbrand
gql`
  query Top10TopicAndBrand {
    topics(limit: 20, order_by: { post_topics_aggregate: { count: desc } }) {
      name
      id
    }
    brands(limit: 20, order_by: { post_brands_aggregate: { count: desc } }) {
      name
      id
    }
  }
`

// 直近で一番よく使われているトピック2つが付けられているポスト
gql`
  query GetRecommendTopicPost {
    topics(limit: 2, order_by: { post_topics_aggregate: { count: desc } }) {
      name
      id
      post_topics(limit: 4) {
        post {
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
      }
    }
  }
`

// 引数に指定した日付より後、かついいねが多い順のポストとブログ
// 引数$fromは「"yyyy-mm-dd"」のような形式で渡す
gql`
  query GetRecentFamousPostAndBlog($from: timestamptz!) {
    posts(
      limit: 10
      order_by: { likes_aggregate: { max: { id: asc } } }
      where: { created_at: { _gte: $from } }
    ) {
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
    blogs(
      limit: 9
      order_by: { likes_aggregate: { max: { id: asc } } }
      where: { created_at: { _gte: $from } }
    ) {
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
  }
`
