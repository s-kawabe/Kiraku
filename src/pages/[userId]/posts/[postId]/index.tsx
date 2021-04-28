import { gql } from '@apollo/client'
import { Box, Button, Center, Flex, Heading, HStack, Tag, Text, Textarea } from '@chakra-ui/react'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import { useState } from 'react'

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
import { NormalButton } from '@/components/common/unit'
import { LayoutWithHead } from '@/components/layout/container'
import { CommentList } from '@/components/user/container'
import { UserIcon } from '@/components/user/unit'

type Props = {
  user: Users
}

const dummyComments = [
  {
    userIcon: '/nouser.svg',
    userId: 'hogehoge',
    comment: 'すごくいいですね',
  },
  {
    userIcon: '/nouser.svg',
    userId: 'hugagaga',
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
  const [comment, setComment] = useState('')
  const [user, post] = [props.user, props.user.posts[0]]

  console.log(comment)

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value)
  }

  return (
    <LayoutWithHead title={`${props.user.name}のポスト「${props.user.posts[0].content}」`} sideMenu>
      <Center w="100%">
        <Box my="70px">
          {/* Header */}
          <Flex mb="30px" align="flex-end" justifyContent="space-between">
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
              <Center w="430px" h="630px" bg={'gray.50'} position="relative" borderRadius="20px">
                {post.image ? (
                  <Image
                    src={post.image}
                    alt="ファッション投稿画像"
                    layout="fill"
                    objectFit="contain"
                  />
                ) : (
                  <Text fontWeight="bold" fontSize="16px" color="gray.600">
                    No Image
                  </Text>
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
                        <Tag
                          key={topic.id}
                          mr="15px"
                          mb="10px"
                          p="1.5"
                          borderRadius="8px"
                          fontSize="13px"
                        >
                          {topic.name}
                        </Tag>
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
                        <Tag key={brand.id} mr="15px" mb="10px" borderRadius="0">
                          {brand.name}
                        </Tag>
                      )
                    })}
                  </Flex>
                </Box>
              )}
            </Box>
            <Box w="37vw" ml="70px">
              {/* Content */}
              <Box
                p="30px"
                borderRadius="20px"
                boxShadow="0px 0px 5px rgba(40,40,40,0.15)"
                mb="50px"
              >
                <Text fontSize="18px" color="gray.700">
                  {post.content}ああああああああああああああああああああ
                  ああああああああああああああああああああああああああああ
                  あああああああああああああああああ
                </Text>
                <Box w="100%" mt="70px" textAlign="right">
                  <Text color="gray.500">{post.created_at}</Text>
                </Box>
              </Box>
              {/* Comment */}
              <Box mb="120px">
                <Heading fontSize="20px" color="gray.700" mb="5px">
                  コメント(1)
                </Heading>
                <CommentList comments={dummyComments} />
              </Box>
              <Box>
                <Textarea
                  placeholder="コメントを書く"
                  borderColor="gray.400"
                  h="150px"
                  onChange={(e) => {
                    handleCommentChange(e)
                  }}
                />
                <Box textAlign="right">
                  <NormalButton
                    text="送信"
                    bg="green.300"
                    color="white"
                    borderRadius="none"
                    hover={{ bg: 'green.400' }}
                    width="100px"
                  />
                </Box>
              </Box>
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
            name
          }
        }
        brands {
          brand {
            name
          }
        }
      }
    }
  }
`
