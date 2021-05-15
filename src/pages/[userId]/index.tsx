import { gql } from '@apollo/client'
import { Box, Heading } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { initializeApollo } from '@/apollo/client'
import type {
  GetOneUserAllBlogQuery,
  GetOneUserAllBlogQueryVariables,
  GetOneUserAllPostQuery,
  GetOneUserAllPostQueryVariables,
  Users,
} from '@/apollo/graphql'
import { GetOneUserAllBlogDocument, GetOneUserAllPostDocument } from '@/apollo/graphql'
import { LayoutWithHead } from '@/components/layout/container'
import { Profile } from '@/components/user/container'

// TODO loginuserではなくパス(display_id)からqueryする

const UserPostListPage = () => {
  const router = useRouter()
  const client = initializeApollo()

  const [user1, setUser1] = useState<Users[]>([])
  const [user2, setUser2] = useState<Users[]>([])

  const { userId } = router.query

  useEffect(() => {
    ;(async () => {
      const postData = await client.query<GetOneUserAllPostQuery, GetOneUserAllPostQueryVariables>({
        query: GetOneUserAllPostDocument,
        variables: {
          display_id: userId as string,
        },
      })

      const blogData = await client.query<GetOneUserAllBlogQuery, GetOneUserAllBlogQueryVariables>({
        query: GetOneUserAllBlogDocument,
        variables: {
          display_id: userId as string,
        },
      })

      setUser1(postData.data.users as Users[])
      setUser2(blogData.data.users as Users[])
    })()
  })

  return (
    <LayoutWithHead title="○○のポスト一覧" sideMenu>
      <Profile />
      <Box m="30px">
        <Heading>ポスト</Heading>
        {user1[0]?.posts.map((item) => {
          return (
            <Box my="5px" key={item.id}>
              <Link
                href={{
                  pathname: '/[userId]/posts/[postId]',
                  query: { userId: user1[0].display_id, postId: item.id },
                }}
              >
                <a>{item.content}</a>
              </Link>
            </Box>
          )
        })}

        <Heading>ブログ</Heading>
        {user2[0]?.blogs.map((item) => {
          return (
            <Box my="5px" key={item.id}>
              <Link
                href={{
                  pathname: '/[userId]/blogs/[blogId]',
                  query: { userId: user2[0].display_id, blogId: item.id },
                }}
              >
                <a>{item.title}</a>
              </Link>
            </Box>
          )
        })}
      </Box>
    </LayoutWithHead>
  )
}

// eslint-disable-next-line import/no-default-export
export default UserPostListPage

gql`
  query GetOneUserAllPost($display_id: String!) {
    users(where: { display_id: { _eq: $display_id } }) {
      id
      display_id
      name
      profile
      gender
      image
      created_at
      posts {
        id
        content
        image
        gender
        updated_at
      }
    }
  }
`
