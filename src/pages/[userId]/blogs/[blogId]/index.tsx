import 'draft-js/dist/Draft.css'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

import { gql } from '@apollo/client'
import { useReactiveVar } from '@apollo/client'
import { Box, Center, Flex, Heading, HStack, Spinner, Stack, Tag, Text } from '@chakra-ui/react'
import { css } from '@emotion/react'
import { convertFromRaw, EditorState } from 'draft-js'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { createRef, Fragment, useEffect, useState } from 'react'

import { loginUserVar } from '@/apollo/cache'
import { addApolloState, initializeApollo } from '@/apollo/client'
import type {
  AddBlogLikeMutation,
  AddBlogLikeMutationVariables,
  BlogComments,
  Blogs,
  GetAllUsersWithBlogsQuery,
  GetAllUsersWithBlogsQueryVariables,
  GetBlogLikeCountQuery,
  GetBlogLikeCountQueryVariables,
  GetOneBlogWithUserQuery,
  GetOneBlogWithUserQueryVariables,
  RemoveBlogLikeMutation,
  RemoveBlogLikeMutationVariables,
  Users,
} from '@/apollo/graphql'
import {
  AddBlogLikeDocument,
  GetAllUsersWithBlogsDocument,
  GetBlogLikeCountDocument,
  GetOneBlogWithUserDocument,
  RemoveBlogLikeDocument,
  useBlogCommentsSubscription,
} from '@/apollo/graphql'
import { CommentIconWithCount, EditMenu, LikeButtonWithCount } from '@/components/common/container'
import { LayoutWithHead } from '@/components/layout/container'
import { CommentList } from '@/components/user/container'
import { CommentForm, FollowButton, UserIcon } from '@/components/user/unit'
import { headingReset } from '@/utils/constants/Common'
import { chapeCommentData } from '@/utils/methods/common'
import { useConvertDateFromHasura } from '@/utils/methods/customeHooks'

type Props = {
  blog: Blogs
}

const initialLikeData = {
  blog_likes: [],
}

const Editor = dynamic(
  async () => {
    const mod = await import('react-draft-wysiwyg')
    return mod.Editor
  },
  {
    ssr: false,
  }
)

const hiddenToolBar = css`
  & .toolbarClassName {
    visibility: hidden !important;
  }
  & .rdw-editor-toolbar {
    display: none !important;
  }
`

const UserBlogPage: NextPage<Props> = (props: Props) => {
  const [user, setUser] = useState<Users>(props.blog.user)
  const [blog, setBlog] = useState<Blogs>(props.blog)
  const [likeData, setLikeData] = useState<GetBlogLikeCountQuery>(initialLikeData)

  const loginUser = useReactiveVar(loginUserVar)
  const commentInput = createRef<HTMLTextAreaElement>()
  const createdAt = useConvertDateFromHasura(blog.created_at)
  const client = initializeApollo()

  // DBから取得したJSONをEditorStateに変換
  const contentState = convertFromRaw(props.blog.content)
  const content = EditorState.createWithContent(contentState)
  // 表示しているブログがログイン中のユーザのものかどうか
  const isMine = loginUser && loginUser.id === user.id

  const { data, loading } = useBlogCommentsSubscription({
    variables: {
      blogId: blog.id,
    },
  })

  const fetchLike = async () => {
    const data = await client.query<GetBlogLikeCountQuery, GetBlogLikeCountQueryVariables>({
      query: GetBlogLikeCountDocument,
      variables: {
        blogId: blog.id,
      },
      fetchPolicy: 'network-only',
    })
    setLikeData(data.data)
  }

  const isCurrentUserLiked = () => {
    return likeData.blog_likes.some((item) => {
      return item.user_id === loginUser?.id
    })
  }

  const handleToggleLike = async () => {
    if (isCurrentUserLiked()) {
      // insert mutation
      await client.mutate<RemoveBlogLikeMutation, RemoveBlogLikeMutationVariables>({
        mutation: RemoveBlogLikeDocument,
        variables: {
          userId: loginUser?.id as string,
          blogId: blog.id,
        },
      })
    } else {
      // delete mutation
      await client.mutate<AddBlogLikeMutation, AddBlogLikeMutationVariables>({
        mutation: AddBlogLikeDocument,
        variables: {
          userId: loginUser?.id as string,
          blogId: blog.id,
        },
      })
    }
    await fetchLike()
  }

  useEffect(() => {
    ;(async () => {
      // 投稿編集後は最新情報が反映されない為、投稿者本人の場合のみクライアントで投稿を再fetch
      if (isMine) {
        const { data } = await client.query<
          GetOneBlogWithUserQuery,
          GetOneBlogWithUserQueryVariables
        >({
          query: GetOneBlogWithUserDocument,
          variables: {
            blogId: blog.id,
          },
          fetchPolicy: 'network-only',
        })

        setUser(data.blogs[0].user as Users)
        setBlog(data.blogs[0] as Blogs)
      }
      // いいね情報の取得は毎回行う
      await fetchLike()
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginUser])

  return (
    <LayoutWithHead title={`${user.name}のブログ「${blog.title}」`} sideMenu>
      {loading ? (
        <Center h="100vh" w="100vw">
          <Spinner />
        </Center>
      ) : (
        <Center mb="80px">
          <Box my={{ base: '20px', lg: '50px' }} mx="auto" maxW="95vw">
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
              {loginUser && <FollowButton fromUserId={loginUser.id} toUserId={user.id} />}
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
              <Flex
                flexDirection={{ base: 'column', lg: 'row' }}
                alignItems={{ base: 'flex-start', lg: 'flex-end' }}
              >
                <Box
                  px="50px"
                  py="20px"
                  mr="20px"
                  bg="#FFF2C3"
                  borderRadius="10px"
                  boxShadow="0 6px 18px rgba(100,100,100,0.1)"
                >
                  {/* title */}
                  <Heading fontSize="22px">{blog.title}</Heading>
                </Box>
                <Text fontSize="16px" color="gray.400" mt={{ base: '10px', lg: '0' }}>
                  {createdAt}
                </Text>
              </Flex>

              <HStack spacing="6">
                {isMine && <EditMenu blog={blog} />}

                <Box
                  onClick={() => {
                    commentInput.current?.focus()
                  }}
                >
                  {/* comment/like icon */}
                  <CommentIconWithCount
                    count={data?.blog_comments.length as number}
                    fontSize="24px"
                  />
                </Box>
                <Box
                  onClick={async () => {
                    if (!loginUser) {
                      alert('いいね機能をご利用いただくにはログインが必要です')
                      return
                    }
                    await handleToggleLike()
                  }}
                >
                  <LikeButtonWithCount
                    count={likeData.blog_likes.length}
                    fontSize="24px"
                    iconSize="27px"
                    initial={isCurrentUserLiked()}
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
              w={['90vw', '90vw', '90vw', '80vw', '70vw']}
              minH="40vh"
              p={['10px', '20px', '40px']}
              my="50px"
              mx="auto"
              lineHeight="1.8"
              borderRadius="15px"
              css={[hiddenToolBar, headingReset]}
              color="gray.700"
              shadow="md"
              fontSize={['15px', '16px', '18px', '20px']}
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
  return addApolloState(client, { props: { blog: data.blogs[0] }, revalidate: 300 })
}

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

gql`
  query GetBlogLikeCount($blogId: Int!) {
    blog_likes(where: { blog_id: { _eq: $blogId } }) {
      id
      blog_id
      user_id
    }
  }
`

gql`
  mutation AddBlogLike($userId: String!, $blogId: Int!) {
    insert_blog_likes_one(object: { user_id: $userId, blog_id: $blogId }) {
      id
      user_id
      blog_id
    }
  }
`

gql`
  mutation RemoveBlogLike($userId: String!, $blogId: Int!) {
    delete_blog_likes(where: { _and: { user_id: { _eq: $userId }, blog_id: { _eq: $blogId } } }) {
      affected_rows
    }
  }
`
