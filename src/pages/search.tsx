import { gql } from '@apollo/client'
import {
  Box,
  Center,
  Flex,
  HStack,
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
import { css } from '@emotion/react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Fragment, useEffect } from 'react'

import { useGetSearchResultQuery } from '@/apollo/graphql'
import { BlogCard } from '@/components/blog/container'
import { IconHeading } from '@/components/common/unit'
import { NextImage } from '@/components/common/unit'
import { LayoutWithHead } from '@/components/layout/container'
import { PostCard } from '@/components/post/container'
import { UserIcon } from '@/components/user/unit'
import { convertBlogContentToString, getTopImage } from '@/utils/methods/blog'

const SearchPage: NextPage = () => {
  const router = useRouter()
  const { word } = router.query

  const { data, loading } = useGetSearchResultQuery({
    variables: {
      word: `%${word as string}%`,
    },
  })

  console.log(data)

  // queryパラメータが存在しない場合トップに戻す
  useEffect(() => {
    if (word == undefined) {
      router.push('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <LayoutWithHead title={`「${word}」の検索結果`} sideMenu>
      <Center pt="10px" my="40px">
        <VStack spacing="10">
          <IconHeading
            type="search"
            text={`${word as string}の検索結果`}
            color="gray.500"
            size="lg"
          />
          {loading ? (
            <Center h="100%" w="100%">
              <Spinner />
            </Center>
          ) : (
            data && (
              <Tabs>
                <TabList borderBottom="1px" borderColor="gray.300" w={['100vw', '90vw', '80vw']}>
                  <Tab>
                    <Text color="gray.600" fontSize="18px" fontWeight="bold">
                      ポスト {data.posts.length}
                    </Text>
                  </Tab>
                  <Tab>
                    <Text color="gray.600" fontSize="18px" fontWeight="bold">
                      ブログ {data.blogs.length}
                    </Text>
                  </Tab>
                  <Tab>
                    <Text color="gray.600" fontSize="18px" fontWeight="bold">
                      ユーザー {data.users.length}
                    </Text>
                  </Tab>
                </TabList>

                {/* post tab */}
                <TabPanels>
                  <TabPanel px="0" py="6">
                    {data.posts.length === 0 ? (
                      <VStack spacing="5">
                        <Text fontSize={['14px', '16px']} color="gray.500" fontWeight="bold">
                          検索結果はありませんでした
                        </Text>
                        <NextImage src={'/show.svg'} alt={'投稿なし'} width={300} height={320} />
                      </VStack>
                    ) : (
                      <Center>
                        <Flex>
                          <SimpleGrid columns={[1, 1, 1, 1, 2]} spacingX={6} spacingY={6}>
                            {data.posts &&
                              data.posts.map((post) => {
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
                      </Center>
                    )}
                  </TabPanel>

                  {/* blog tab */}
                  <TabPanel px="0" py="6">
                    {data.blogs.length === 0 ? (
                      <VStack spacing="5">
                        <Text fontSize={['14px', '16px']} color="gray.500" fontWeight="bold">
                          検索結果はありませんでした
                        </Text>
                        <NextImage src={'/show.svg'} alt={'投稿なし'} width={300} height={320} />
                      </VStack>
                    ) : (
                      <Center>
                        <Flex>
                          <SimpleGrid columns={[1, 1, 2, 2, 3]} spacingX={8} spacingY={8}>
                            {data.blogs &&
                              data.blogs.map((blog) => {
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
                      </Center>
                    )}
                  </TabPanel>

                  {/* user tab */}
                  <TabPanel px="0" py="6">
                    {data.users.length === 0 ? (
                      <VStack spacing="5">
                        <Text fontSize={['14px', '16px']} color="gray.500" fontWeight="bold">
                          検索結果はありませんでした
                        </Text>
                        <NextImage src={'/show.svg'} alt={'投稿なし'} width={300} height={320} />
                      </VStack>
                    ) : (
                      <Center>
                        <Flex>
                          <SimpleGrid columns={[1, 1, 1, 2, 2]} spacingX={7} spacingY={7}>
                            {data.users.map((user) => {
                              return (
                                <>
                                  <HStack
                                    background="gray.100"
                                    pr="30px"
                                    borderRadius="full"
                                    css={css`
                                      &:hover img {
                                        opacity: 0.8;
                                      }
                                    `}
                                    onClick={() => {
                                      router.push({
                                        pathname: '/[userId]',
                                        query: {
                                          userId: user.display_id,
                                        },
                                      })
                                    }}
                                  >
                                    <UserIcon
                                      src={user.image ?? '/nouser.svg'}
                                      width={70}
                                      height={70}
                                    />
                                    <Box>
                                      <Text fontSize={['12px', '15px']} color="black">
                                        {user.name}
                                      </Text>
                                      <Text fontSize="12px" color="gray.500">
                                        @{user.display_id}
                                      </Text>
                                    </Box>
                                  </HStack>
                                </>
                              )
                            })}
                          </SimpleGrid>
                        </Flex>
                      </Center>
                    )}
                  </TabPanel>
                </TabPanels>
              </Tabs>
            )
          )}
        </VStack>
      </Center>
    </LayoutWithHead>
  )
}

export default SearchPage

gql`
  query GetSearchResult($word: String!) {
    users(where: { name: { _ilike: $word } }) {
      id
      display_id
      name
      profile
      gender
      image
      created_at
    }
    posts(where: { content: { _ilike: $word } }) {
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
    blogs(where: { title: { _like: $word } }) {
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
