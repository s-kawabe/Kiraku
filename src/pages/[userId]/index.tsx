import { gql, useReactiveVar } from '@apollo/client'
import { Box, Heading } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { loginUserVar } from '@/apollo/cache'
import { initializeApollo } from '@/apollo/client'
import type {
  Blogs,
  GetOneUserAllBlogQuery,
  GetOneUserAllBlogQueryVariables,
  GetOneUserAllPostQuery,
  GetOneUserAllPostQueryVariables,
  Posts,
} from '@/apollo/graphql'
import { GetOneUserAllBlogDocument, GetOneUserAllPostDocument } from '@/apollo/graphql'
import { LayoutWithHead } from '@/components/layout/container'

// TODO loginuserではなくパス(display_id)からqueryする

const UserPostListPage = () => {
  const router = useRouter()
  const client = initializeApollo()
  const loginUser = useReactiveVar(loginUserVar)
  const [post, setPost] = useState<Posts[]>([])
  const [blog, setBlog] = useState<Blogs[]>([])

  const { userId } = router.query

  useEffect(() => {
    ;(async () => {
      if (loginUser) {
        const postData = await client.query<
          GetOneUserAllPostQuery,
          GetOneUserAllPostQueryVariables
        >({
          query: GetOneUserAllPostDocument,
          variables: {
            display_id: userId as string,
          },
        })

        const blogData = await client.query<
          GetOneUserAllBlogQuery,
          GetOneUserAllBlogQueryVariables
        >({
          query: GetOneUserAllBlogDocument,
          variables: {
            display_id: userId as string,
          },
        })

        setPost(postData.data.users[0].posts as Posts[])
        setBlog(blogData.data.users[0].blogs as Blogs[])
      }
    })()
  })

  // ※ここはポスト投稿一覧 あとでブログは/[userId]/blogs ページに表示させる
  return (
    <LayoutWithHead title="○○のポスト一覧" sideMenu>
      <Box m="30px">
        <Heading>ポスト</Heading>
        {post.map((item) => {
          return (
            <Box my="5px" key={item.id}>
              <Link
                href={{
                  pathname: '/[userId]/posts/[postId]',
                  query: { userId: loginUser?.display_id, postId: item.id },
                }}
              >
                <a>{item.content}</a>
              </Link>
            </Box>
          )
        })}

        <Heading>ブログ</Heading>
        {blog.map((item) => {
          return (
            <Box my="5px" key={item.id}>
              <Link
                href={{
                  pathname: '/[userId]/blogs/[blogId]',
                  query: { userId: loginUser?.display_id, blogId: item.id },
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
        content
        image
        gender
        updated_at
      }
    }
  }
`
