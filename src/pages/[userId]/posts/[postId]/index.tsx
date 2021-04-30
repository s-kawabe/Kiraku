import { gql } from '@apollo/client'
import { Box, Button, Center, Flex, Heading, HStack, Tag, Text } from '@chakra-ui/react'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'

import { addApolloState, initializeApollo } from '@/apollo/client'
import type {
  GetAllUsersWithPostsQuery,
  GetAllUsersWithPostsQueryVariables,
  GetOneUserWithPostQuery,
  GetOneUserWithPostQueryVariables,
  Users,
} from '@/apollo/graphql'
import { GetAllUsersWithPostsDocument, GetOneUserWithPostDocument } from '@/apollo/graphql'
import { CommentIconWithCount, LikeButtonWithCount } from '@/components/common/container'
import { LayoutWithHead } from '@/components/layout/container'
import { CommentList } from '@/components/user/container'
import { CommentForm, UserIcon } from '@/components/user/unit'
import { useConvertDateFromHasura } from '@/utils/methods/customeHooks'

type Props = {
  user: Users
}

const comments = [
  {
    userIcon: '/nouser.svg',
    userId: 'hogeh123oge',
    comment: 'すごくいいですね',
  },
  {
    userIcon: '/nouser.svg',
    userId: 'hu234agaga',
    comment: 'めっちゃやべえな',
  },
  {
    userIcon: '/nouser.svg',
    userId: 'hugagaga',
    comment:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis ut voluptatem fugit, natus at placeat beatae ',
  },
]
const UserPostPage: NextPage<Props> = (props: Props) => {
  const [user, post] = [props.user, props.user.posts[0]]
  const createdAt = useConvertDateFromHasura(post.created_at)

  return (
    <LayoutWithHead title={`${props.user.name}のポスト「${props.user.posts[0].content}」`} sideMenu>
      <Center w="100%">
        <Box my="70px">
          {/* Header */}
          <Flex mb="30px" align="flex-end" justifyContent="space-between" p="5" borderRadius="25px">
            <Flex align="center">
              <UserIcon src={user.image ?? '/nouser.svg'} width={85} height={85} />
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
            <HStack spacing="6">
              <CommentIconWithCount count={100} fontSize="24px" />
              <LikeButtonWithCount count={200} isLiked={false} fontSize="24px" iconSize="27px" />
            </HStack>
          </Flex>
          {/* Main */}
          <Flex>
            {/* Post Image */}
            <Box position="relative">
              <Center w="430px" h="630px" position="relative" borderRadius="20px">
                {post.image ? (
                  <Image
                    src={post.image}
                    alt="ファッション投稿画像"
                    layout="fill"
                    objectFit="contain"
                  />
                ) : (
                  <Center bg="gray.50" w="100%" h="100%" borderRadius="inherit">
                    <Text fontWeight="bold" fontSize="16px" color="gray.600">
                      No Image
                    </Text>
                  </Center>
                )}
              </Center>
              {/* Topic/Brand */}
              {post.topics.length > 0 && (
                <Box mt="20px">
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
                <Box mt="20px">
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
            <Box w="37vw" ml="50px">
              {/* Content */}
              <Box
                p="30px"
                borderRadius="20px"
                boxShadow="0px 0px 5px rgba(40,40,40,0.15)"
                mb="50px"
              >
                <Text fontSize="18px" color="gray.700" whiteSpace="pre-wrap">
                  {post.content}
                </Text>
                <Box w="100%" mt="70px" textAlign="right">
                  <Text color="gray.500">{createdAt}</Text>
                </Box>
              </Box>
              {/* Comment */}
              <Box mb="120px">
                <Heading fontSize="20px" color="gray.700" mb="5px">
                  コメント(1)
                </Heading>
                <CommentList comments={comments} />
              </Box>
              <CommentForm userId={user.id} />
            </Box>
          </Flex>
        </Box>
      </Center>
    </LayoutWithHead>
  )
}

// - propsのuserIdを元に一人のuser情報一式を取得するquery
// - propsのpostIdを元に一つのpost情報一式を取得するquery
// - propsのpostIdを元にそれに紐づいたコメント情報一式を取得するquery ※あとまわし
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
  return addApolloState(client, { props: { user: data.users[0] }, revalidate: 5 })
}

// - userのid一覧を取得するquery
// - 記事のid一覧を取得するquery
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

// todo comment_aggregate, like_aggregare, commentの内容 を追加する必要あり
gql`
  query GetOneUserWithPost($userId: String!, $postId: Int!) {
    users(where: { display_id: { _eq: $userId } }) {
      id
      display_id
      name
      image
      posts(where: { id: { _eq: $postId } }) {
        content
        image
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
            image
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
`
