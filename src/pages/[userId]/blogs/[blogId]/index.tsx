import { gql } from '@apollo/client'
import { useReactiveVar } from '@apollo/client'
import { Box, Button, Center, Flex, Heading, HStack, Stack, Tag, Text } from '@chakra-ui/react'
import { css } from '@emotion/react'
import { convertFromRaw, EditorState } from 'draft-js'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { createRef, Fragment } from 'react'

import { loginUserVar } from '@/apollo/cache'
import { addApolloState, initializeApollo } from '@/apollo/client'
import type {
  Blogs,
  GetAllUsersWithBlogsQuery,
  GetAllUsersWithBlogsQueryVariables,
  GetOneBlogWithUserQuery,
  GetOneBlogWithUserQueryVariables,
} from '@/apollo/graphql'
import {
  GetAllUsersWithBlogsDocument,
  GetOneBlogWithUserDocument,
  useBlogCommentsSubscription,
} from '@/apollo/graphql'
import { CommentIconWithCount, LikeButtonWithCount } from '@/components/common/container'
import { LayoutWithHead } from '@/components/layout/container'
import { CommentList } from '@/components/user/container'
import { CommentForm, UserIcon } from '@/components/user/unit'
import { chapeCommentData } from '@/utils/methods/common'

import type { BlogComments } from '../../../../apollo/graphql'

type Props = {
  blog: Blogs
}

const headingReset = css`
  h1 {
    font-size: 2rem;
    font-weight: bold;
    padding: 8px 0px;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    padding: 5px 0px;
  }

  h3 {
    font-size: 1.2rem;
    font-weight: bold;
    padding: 3px 0px;
  }

  h4,
  h5 {
    font-size: 1rem;
  }
`

const Editor = dynamic(
  async () => {
    const mod = await import('react-draft-wysiwyg')
    return mod.Editor
  },
  {
    ssr: false,
  }
)

const UserBlogPage: NextPage<Props> = (props: Props) => {
  const [blog, user] = [props.blog, props.blog.user]
  // DBから取得したJSONをEditorStateに変換
  const contentState = convertFromRaw(props.blog.content)
  const content = EditorState.createWithContent(contentState)

  const loginUser = useReactiveVar(loginUserVar)
  const commentInput = createRef<HTMLTextAreaElement>()

  // 表示しているブログがログイン中のユーザのものかどうか
  // const isMine = loginUser && loginUser.id === user.id

  const { data, loading } = useBlogCommentsSubscription({
    variables: {
      blogId: blog.id,
    },
  })

  return (
    <LayoutWithHead title={`${user.name}のブログ「${blog.title}」`} sideMenu>
      {!loading && (
        <Center mb="80px">
          <Box my={{ base: '20px', lg: '30px' }}>
            {/* user info  */}
            <Flex align="center">
              <UserIcon src={user.image ?? '/nouser.svg'} width={65} height={65} />
              <Box ml="10px">
                <Heading fontSize="26px" mb="2px" color="gray.700">
                  {user.name}
                </Heading>
                <Text fontSize="16px" color="gray.500">
                  @{user.display_id}
                </Text>
              </Box>
              {/* TODO */}
              <Button colorScheme="blue" variant="outline" size="sm" ml="30px">
                フォロー
              </Button>
            </Flex>
            <Stack
              direction={{ base: 'column', md: 'row' }}
              mt="20px"
              mb="0px"
              align={{ base: 'flex-start', md: 'flex-end' }}
              justifyContent="space-between"
              py="5"
              borderRadius="25px"
            >
              <Box
                px="50px"
                py="20px"
                bg="#FFF2C3"
                borderRadius="10px"
                boxShadow="0 6px 18px rgba(100,100,100,0.1)"
              >
                {/* title */}
                <Heading fontSize="22px">{blog.title}</Heading>
              </Box>
              <HStack spacing="6">
                <Box
                  onClick={() => {
                    commentInput.current?.focus()
                  }}
                >
                  {/* comment/like icon */}
                  <CommentIconWithCount
                    // count={data?.post_comments.length as number}
                    count={100}
                    fontSize="24px"
                  />
                </Box>
                <Box
                  onClick={async () => {
                    if (!loginUser) {
                      alert('いいね機能をご利用いただくにはログインが必要です')
                      return
                    }
                    // await handleToggleLike()
                  }}
                >
                  <LikeButtonWithCount
                    // count={likeData.post_likes.length}
                    count={100}
                    fontSize="24px"
                    iconSize="27px"
                    // initial={isCurrentUserLiked()}
                    initial={false}
                  />
                </Box>
              </HStack>
            </Stack>

            {/* topic/brands tag */}
            <Flex flexDirection={{ base: 'column', md: 'row' }}>
              {blog.topics.length > 0 && (
                <Box mt="20px">
                  <Heading fontSize="15px" color="gray.600" mb="8px">
                    トピック
                  </Heading>
                  <Flex maxW="500px" flexWrap="wrap">
                    {blog.topics.map(({ topic }) => {
                      return (
                        <Fragment key={topic.id}>
                          <Link
                            href={{
                              pathname: '/topics/[topicId]',
                              query: { topicId: topic.id },
                            }}
                          >
                            <a>
                              <Tag
                                mr="15px"
                                mb="10px"
                                p="1.5"
                                borderRadius="8px"
                                fontSize="13px"
                                cursor="pointer"
                                _hover={{ bg: 'gray.200' }}
                              >
                                {topic.name}
                              </Tag>
                            </a>
                          </Link>
                        </Fragment>
                      )
                    })}
                  </Flex>
                </Box>
              )}
              {blog.brands.length > 0 && (
                <Box mt="20px" ml={{ base: '', md: '40px' }}>
                  <Heading fontSize="15px" color="gray.600" mb="8px">
                    ブランド
                  </Heading>
                  <Flex maxW="500px" flexWrap="wrap">
                    {blog.brands.map(({ brand }) => {
                      return (
                        <Fragment key={brand.id}>
                          <Link
                            href={{
                              pathname: '/brands/[brandId]',
                              query: { brandId: brand.id },
                            }}
                          >
                            <a>
                              <Tag
                                key={brand.id}
                                mr="15px"
                                mb="10px"
                                borderRadius="0"
                                cursor="pointer"
                                _hover={{ bg: 'gray.200' }}
                              >
                                {brand.name}
                              </Tag>
                            </a>
                          </Link>
                        </Fragment>
                      )
                    })}
                  </Flex>
                </Box>
              )}
            </Flex>

            {/* blog content */}
            <Box
              w={['90vw', '70vw']}
              minH="40vh"
              p={['0px', '20px']}
              my="50px"
              borderRadius="15px"
              css={headingReset}
              // boxShadow="0 6px 18px rgba(100,100,100,0.1)"
            >
              <Editor
                editorState={content}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                readOnly={true}
                toolbar={{ options: [] }}
              />
            </Box>
            <Box maxW="800px">
              {/* comment list */}
              <Box mb="80px">
                <Heading fontSize="20px" color="gray.700" mb="">
                  コメント({data?.blog_comments.length})
                </Heading>
                <Box mt="10px">
                  <CommentList comments={chapeCommentData(data?.blog_comments as BlogComments[])} />
                </Box>
              </Box>
              {/* comment input */}
              <CommentForm userId={user.id} commentInput={commentInput} blogId={blog.id} />
            </Box>
          </Box>
        </Center>
      )}
    </LayoutWithHead>
  )
}

export const getStaticProps: GetStaticProps<Props, { userId: string; blogId: string }> = async ({
  params,
}) => {
  const client = initializeApollo()
  const blogId = Number(params?.blogId) ?? 0
  const { data } = await client.query<GetOneBlogWithUserQuery, GetOneBlogWithUserQueryVariables>({
    query: GetOneBlogWithUserDocument,
    variables: {
      blogId: blogId,
    },
  })
  if (data.blogs.length === 0 || data.blogs[0].user.display_id !== params?.userId) {
    return {
      notFound: true,
    }
  }
  return addApolloState(client, { props: { blog: data.blogs[0] }, revalidate: 60 })
}

// pathの作成にはuserのidではなくdisplay_idを使用
export const getStaticPaths: GetStaticPaths<{ userId: string; blogId: string }> = async () => {
  const client = initializeApollo()
  const { data } = await client.query<
    GetAllUsersWithBlogsQuery,
    GetAllUsersWithBlogsQueryVariables
  >({
    query: GetAllUsersWithBlogsDocument,
  })

  const paths = data.users
    .map((user) => {
      return user.blogs.map((blog) => {
        return { params: { userId: user.display_id, blogId: blog.id.toString() } }
      })
    })
    .flat()

  return {
    paths,
    fallback: 'blocking',
  }
}

// eslint-disable-next-line import/no-default-export
export default UserBlogPage

gql`
  query GetAllUsersWithBlogs {
    users {
      id
      display_id
      blogs {
        id
      }
    }
  }
`

gql`
  query GetOneBlogWithUser($blogId: Int!) {
    blogs(where: { id: { _eq: $blogId } }) {
      id
      title
      content
      gender
      created_at
      user {
        id
        display_id
        name
        image
      }
      topics {
        topic {
          id
          name
        }
      }
      brands {
        brand {
          id
          name
        }
      }
    }
  }
`

gql`
  subscription BlogComments($blogId: Int!) {
    blog_comments(where: { blog_id: { _eq: $blogId } }) {
      comment
      user {
        display_id
        name
        image
      }
    }
  }
`

gql`
  mutation AddBlogComment($userId: String!, $blogId: Int!, $comment: String!) {
    insert_blog_comments_one(object: { user_id: $userId, blog_id: $blogId, comment: $comment }) {
      id
      comment
      user {
        id
        display_id
        image
      }
    }
  }
`
