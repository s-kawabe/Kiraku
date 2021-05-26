import { gql, useReactiveVar } from '@apollo/client'
import { ChevronDownIcon } from '@chakra-ui/icons'
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
  Spinner,
  Text,
  VStack,
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Fragment, useEffect } from 'react'

import { useGetFollowUserContentsLazyQuery } from '@/apollo/graphql'
import { BlogCard } from '@/components/blog/container/BlogCard'
import { NextImage, NormalButton } from '@/components/common/unit'
import { LayoutWithHead, TabNavigation } from '@/components/layout/container'
import { PostCard } from '@/components/post/container'
import { UserIcon } from '@/components/user/unit'
import { convertBlogContentToString, getTopImage } from '@/utils/methods/blog'

import { loginUserVar } from '../apollo/cache'

const TopUserFeedPage: NextPage = () => {
  const loginUser = useReactiveVar(loginUserVar)
  const router = useRouter()
  const [getFeed, { loading, data }] = useGetFollowUserContentsLazyQuery()

  useEffect(() => {
    if (loginUser) {
      getFeed({ variables: { id: loginUser.id } })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginUser])

  return (
    <LayoutWithHead title="○○のタイムライン" sideMenu>
      <TabNavigation now="feed" />
      <Center mt="30px" py="10px">
        {loginUser ? (
          !loading && data ? (
            <Box py="10px">
              <HStack spacing="5">
                <Text color="gray.700" fontSize="18px" fontWeight="bold" textAlign="left">
                  フォローユーザーの投稿
                </Text>
                <Menu>
                  <MenuButton
                    fontSize="14px"
                    py="5px"
                    px="10px"
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                  >
                    フォロー中ユーザー
                  </MenuButton>
                  <MenuList>
                    {data.users.map((user) => {
                      return (
                        <MenuItem
                          key={user.id}
                          onClick={() => {
                            router.push({
                              pathname: '/[userId]',
                              query: {
                                userId: user.display_id,
                              },
                            })
                          }}
                        >
                          <HStack pr="30px" borderRadius="full">
                            <UserIcon src={user.image ?? '/nouser.svg'} width={50} height={50} />
                            <Box>
                              <Text fontSize={['12px', '15px']} color="black">
                                {user.name}
                              </Text>
                              <Text fontSize="12px" color="gray.500">
                                @{user.display_id}
                              </Text>
                            </Box>
                          </HStack>
                        </MenuItem>
                      )
                    })}
                  </MenuList>
                </Menu>
              </HStack>
              {data.users.length === 0 ? (
                <Box mt="30px">
                  <Alert status="warning" color="gray.600" fontSize="15px" borderRadius="md">
                    <AlertIcon />
                    フォローしているユーザーがいません。
                    <br />
                    気になるユーザーをフォローしてみよう。
                  </Alert>
                </Box>
              ) : (
                <>
                  <Flex mt="25px">
                    <SimpleGrid columns={[1, 1, 1, 1, 2]} spacingX={6} spacingY={6}>
                      {data.posts.map((post) => {
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
                  <Flex mt="50px">
                    <SimpleGrid columns={[1, 1, 2, 2, 3]} spacingX={8} spacingY={8}>
                      {data.blogs.map((blog) => {
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
                </>
              )}
            </Box>
          ) : (
            <Center h="100%" w="100%">
              <Spinner />
            </Center>
          )
        ) : (
          <Box bg="gray.50" w={['100%', '80%', '60%']} py="50px" m="20px" borderRadius="md">
            <VStack spacing="5">
              <Text fontSize={['14px', '16px']} color="gray.500" fontWeight="bold">
                タイムラインを閲覧するにはログインが必要です
              </Text>
              <Box filter="grayscale(55%)">
                <NextImage src={'/show.svg'} alt={'投稿なし'} width={300} height={320} />
              </Box>
              <Link href="/signin">
                <a>
                  <NormalButton
                    text="ログイン"
                    bg="white"
                    color="green.300"
                    variant="outline"
                    borderColor="green.300"
                    hover={{ bg: 'green.300', color: 'white' }}
                  />
                </a>
              </Link>
            </VStack>
          </Box>
        )}
      </Center>
    </LayoutWithHead>
  )
}
// eslint-disable-next-line import/no-default-export
export default TopUserFeedPage

// フォローしているユーザが投稿したポストとブログの新着順
gql`
  query GetFollowUserContents($id: String!) {
    posts(where: { user: { relation_user_to: { user_id: { _eq: $id } } } }) {
      id
      user_id
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
    blogs(where: { user: { relation_user_to: { user_id: { _eq: $id } } } }) {
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
    users(where: { relation_user_to: { user_id: { _eq: $id } } }) {
      id
      display_id
      name
      profile
      gender
      image
      created_at
    }
  }
`
