import { gql, useReactiveVar } from '@apollo/client'
import { Box, Center, Text, VStack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useEffect } from 'react'

// import { initializeApollo } from '@/apollo/client'
import { useGetFollowUserContentsLazyQuery } from '@/apollo/graphql'
// import { BlogCard } from '@/components/blog/container/BlogCard'
import { NextImage, NormalButton } from '@/components/common/unit'
import { LayoutWithHead, TabNavigation } from '@/components/layout/container'

// import { PostCard } from '@/components/post/container'
// import { UserIcon } from '@/components/user/unit'
// import { convertBlogContentToString, getTopImage } from '@/utils/methods/blog'
// import { getOneMonthBeforeDate } from '@/utils/methods/common'
import { loginUserVar } from '../apollo/cache'

const TopUserFeedPage: NextPage = () => {
  const loginUser = useReactiveVar(loginUserVar)
  const [getFeed, { loading, data }] = useGetFollowUserContentsLazyQuery()

  useEffect(() => {
    if (loginUser) {
      getFeed({ variables: { id: loginUser.id } })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginUser])

  console.log(loading, data)

  return (
    <LayoutWithHead title="○○のタイムライン" sideMenu>
      <TabNavigation now="feed" />
      <Center mt="30px">
        {loginUser ? (
          loading ? (
            <Text fontWeight="bold">loading...</Text>
          ) : (
            <Text color="blue.600">show feed contents</Text>
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
    }
    blogs(where: { user: { relation_user_to: { user_id: { _eq: $id } } } }) {
      id
      title
      content
      gender
      created_at
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
