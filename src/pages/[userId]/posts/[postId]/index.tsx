import { gql, useReactiveVar } from '@apollo/client'
import { Box, Center, Flex, Heading, HStack, Spinner, Stack, Tag, Text } from '@chakra-ui/react'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { createRef, Fragment, useEffect, useState } from 'react'

import { loginUserVar } from '@/apollo/cache'
import { addApolloState, initializeApollo } from '@/apollo/client'
import type {
  AddPostLikeMutation,
  AddPostLikeMutationVariables,
  BlogComments,
  GetAllUsersWithPostsQuery,
  GetAllUsersWithPostsQueryVariables,
  GetOneUserWithPostQuery,
  GetOneUserWithPostQueryVariables,
  GetPostLikeCountQuery,
  GetPostLikeCountQueryVariables,
  Posts,
  RemovePostLikeMutation,
  RemovePostLikeMutationVariables,
  Users,
} from '@/apollo/graphql'
import {
  AddPostLikeDocument,
  GetAllUsersWithPostsDocument,
  GetOneUserWithPostDocument,
  GetPostLikeCountDocument,
  RemovePostLikeDocument,
  usePostCommentSubscriptionSubscription,
} from '@/apollo/graphql'
import { CommentIconWithCount, EditMenu, LikeButtonWithCount } from '@/components/common/container'
import { LayoutWithHead } from '@/components/layout/container'
import { CommentList } from '@/components/user/container'
import { CommentForm, FollowButton, UserIcon } from '@/components/user/unit'
import { chapeCommentData } from '@/utils/methods/common'
import { useConvertDateFromHasura } from '@/utils/methods/customeHooks'

type Props = {
  user: Users
}

const initialLikeData = {
  post_likes: [],
}

const UserPostPage: NextPage<Props> = (props: Props) => {
  const [user, setUser] = useState<Users>(props.user)
  const [post, setPost] = useState<Posts>(props.user.posts[0])
  const [likeData, setLikeData] = useState<GetPostLikeCountQuery>(initialLikeData)

  const createdAt = useConvertDateFromHasura(post.created_at)
  const loginUser = useReactiveVar(loginUserVar)
  const client = initializeApollo()
  const commentInput = createRef<HTMLTextAreaElement>()

  // 表示している投稿がログイン中のユーザのものかどうか
  const isMine = loginUser && loginUser.id === user.id

  const { data, loading } = usePostCommentSubscriptionSubscription({
    variables: {
      postId: post.id,
    },
  })

  const fetchLike = async () => {
    const data = await client.query<GetPostLikeCountQuery, GetPostLikeCountQueryVariables>({
      query: GetPostLikeCountDocument,
      variables: {
        postId: post.id,
      },
      fetchPolicy: 'network-only',
    })
    setLikeData(data.data)
  }

  const isCurrentUserLiked = () => {
    return likeData.post_likes.some((item) => {
      return item.user_id === loginUser?.id
    })
  }

  const handleToggleLike = async () => {
    if (isCurrentUserLiked()) {
      // insert mutation
      await client.mutate<RemovePostLikeMutation, RemovePostLikeMutationVariables>({
        mutation: RemovePostLikeDocument,
        variables: {
          userId: loginUser?.id as string,
          postId: post.id,
        },
      })
    } else {
      // delete mutation
      await client.mutate<AddPostLikeMutation, AddPostLikeMutationVariables>({
        mutation: AddPostLikeDocument,
        variables: {
          userId: loginUser?.id as string,
          postId: post.id,
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
          GetOneUserWithPostQuery,
          GetOneUserWithPostQueryVariables
        >({
          query: GetOneUserWithPostDocument,
          variables: {
            userId: user.display_id,
            postId: post.id,
          },
          fetchPolicy: 'network-only',
        })

        setUser(data.users[0] as Users)
        setPost(data.users[0].posts[0] as Posts)
      }
      // いいね情報の取得は毎回行う
      await fetchLike()
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginUser])

  return (
    <LayoutWithHead title={`${props.user.name}のポスト「${props.user.posts[0].content}」`} sideMenu>
      {loading ? (
        <Center h="100vh" w="100vw">
          <Spinner />
        </Center>
      ) : (
        <Center mb="80px">
          <Box my={{ base: '', sm: '15px', lg: '30px' }}>
            {/* Header */}
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              mb="20px"
              align={['flex-start', 'flex-end']}
              justifyContent="space-between"
              p="5"
              borderRadius="25px"
            >
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
              <HStack spacing="6">
                {isMine && <EditMenu post={post} />}
                <Box
                  onClick={() => {
                    commentInput.current?.focus()
                  }}
                >
                  <CommentIconWithCount
                    count={data?.post_comments.length as number}
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
                    count={likeData.post_likes.length}
                    fontSize="24px"
                    iconSize="27px"
                    initial={isCurrentUserLiked()}
                  />
                </Box>
              </HStack>
            </Stack>
            {/* Main */}
            <Stack direction={{ base: 'column', lg: 'row' }} spacing="14">
              {/* Post Image */}
              <Box position="relative">
                <Center
                  w={['330px', '430px']}
                  h={['520px', '630px']}
                  position="relative"
                  mx="10px"
                  borderRadius="20px"
                >
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt="ファッション投稿画像"
                      layout="fill"
                      objectFit="contain"
                    />
                  ) : (
                    <Center bg="gray.50" w="100%" h="100%" borderRadius="inherit">
                      <Text
                        fontWeight="bold"
                        fontSize="16px"
                        color="gray.600"
                        transform="rotate(-28deg)"
                      >
                        No Image
                      </Text>
                    </Center>
                  )}
                </Center>
                {/* Topic/Brand */}
                {post.topics.length > 0 && (
                  <Box mt="20px" mx="10px">
                    <Heading fontSize="18px" color="gray.600" mb="8px">
                      トピック
                    </Heading>
                    <Flex maxW="430px" flexWrap="wrap">
                      {post.topics.map(({ topic }) => {
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
                {post.brands.length > 0 && (
                  <Box mt="20px" mx="10px">
                    <Heading fontSize="18px" color="gray.600" mb="8px">
                      ブランド
                    </Heading>
                    <Flex maxW="430px" flexWrap="wrap">
                      {post.brands.map(({ brand }) => {
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
              </Box>
              <Box>
                {/* Content */}
                <Box
                  w={{ base: '95vw', md: '540px' }}
                  p="30px"
                  borderRadius="20px"
                  boxShadow="0px 0px 5px rgba(40,40,40,0.15)"
                  mb="50px"
                >
                  <Text fontSize="18px" color="gray.700" whiteSpace="pre-wrap">
                    {post.content}
                  </Text>
                  <HStack mt="70px" justifyContent="flex-end">
                    <Text fontSize="14px" color="gray.400">
                      {createdAt}
                    </Text>
                  </HStack>
                </Box>
                {/* Comment */}
                <Box mb="120px">
                  <Heading fontSize="20px" color="gray.700" mx="10px">
                    コメント({data?.post_comments.length})
                  </Heading>
                  <Box mt="10px">
                    <CommentList
                      comments={chapeCommentData(data?.post_comments as BlogComments[])}
                    />
                  </Box>
                </Box>
                {/* setState関数は渡さず、コンポーネント内でのmutationをsubscriptionsで検知する */}
                <CommentForm userId={user.id} commentInput={commentInput} postId={post.id} />
              </Box>
            </Stack>
          </Box>
        </Center>
      )}
    </LayoutWithHead>
  )
}

export const getStaticProps: GetStaticProps<Props, { userId: string; postId: string }> = async ({
  params,
}) => {
  const client = initializeApollo()
  const postId = Number(params?.postId) ?? 0
  const { data } = await client.query<GetOneUserWithPostQuery, GetOneUserWithPostQueryVariables>({
    query: GetOneUserWithPostDocument,
    variables: {
      userId: params?.userId ?? '',
      postId,
    },
  })
  if (data.users.length === 0 || data.users[0].posts.length === 0) {
    return {
      notFound: true,
    }
  }
  return addApolloState(client, { props: { user: data.users[0] }, revalidate: 300 })
}

// pathの作成にはuserのidではなくdisplay_idを使用
export const getStaticPaths: GetStaticPaths<{ userId: string; postId: string }> = async () => {
  const client = initializeApollo()
  const { data } = await client.query<
    GetAllUsersWithPostsQuery,
    GetAllUsersWithPostsQueryVariables
  >({
    query: GetAllUsersWithPostsDocument,
  })
  const paths = data.users
    .map((user) => {
      return user.posts.map((post) => {
        return { params: { userId: user.display_id, postId: post.id.toString() } }
      })
    })
    .flat()

  return {
    paths,
    fallback: 'blocking',
  }
}

// eslint-disable-next-line import/no-default-export
export default UserPostPage

gql`
  query GetAllUsersWithPosts {
    users {
      id
      display_id
      posts {
        id
      }
    }
  }
`

// fixme postsを最初のクエリにするよう修正したい
gql`
  query GetOneUserWithPost($userId: String!, $postId: Int!) {
    users(where: { display_id: { _eq: $userId } }) {
      id
      display_id
      name
      image
      posts(where: { id: { _eq: $postId } }) {
        id
        content
        image
        image_id
        gender
        created_at
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
        comments {
          comment
          user {
            display_id
            name
            image
          }
        }
      }
    }
  }
`

gql`
  query GetPostLikeCount($postId: Int!) {
    post_likes(where: { post_id: { _eq: $postId } }) {
      id
      post_id
      user_id
    }
  }
`

gql`
  mutation AddPostLike($userId: String!, $postId: Int!) {
    insert_post_likes_one(object: { user_id: $userId, post_id: $postId }) {
      id
      user_id
      post_id
    }
  }
`

gql`
  mutation RemovePostLike($userId: String!, $postId: Int!) {
    delete_post_likes(where: { _and: { user_id: { _eq: $userId }, post_id: { _eq: $postId } } }) {
      affected_rows
    }
  }
`

gql`
  mutation AddPostComment($userId: String!, $postId: Int!, $comment: String!) {
    insert_post_comments_one(object: { user_id: $userId, post_id: $postId, comment: $comment }) {
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
  subscription PostCommentSubscription($postId: Int!) {
    post_comments(where: { post_id: { _eq: $postId } }) {
      comment
      user {
        display_id
        name
        image
      }
    }
  }
`
