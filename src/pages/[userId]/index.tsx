import { gql, useReactiveVar } from '@apollo/client'
import { Box, Heading } from '@chakra-ui/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { loginUserVar } from '@/apollo/cache'
import { initializeApollo } from '@/apollo/client'
import type {
  Blogs,
  GetAllBlogsByOneUserQuery,
  GetAllBlogsByOneUserQueryVariables,
  GetAllPostsByOneUserQuery,
  GetAllPostsByOneUserQueryVariables,
  Posts,
} from '@/apollo/graphql'
import { GetAllBlogsByOneUserDocument, GetAllPostsByOneUserDocument } from '@/apollo/graphql'
import { LayoutWithHead } from '@/components/layout/container'

const UserPostListPage = () => {
  const client = initializeApollo()
  const loginUser = useReactiveVar(loginUserVar)
  const [post, setPost] = useState<Posts[]>([])
  const [blog, setBlog] = useState<Blogs[]>([])

  useEffect(() => {
    ;(async () => {
      if (loginUser) {
        const postData = await client.query<
          GetAllPostsByOneUserQuery,
          GetAllPostsByOneUserQueryVariables
        >({
          query: GetAllPostsByOneUserDocument,
          variables: {
            userId: loginUser.id,
          },
        })

        const blogData = await client.query<
          GetAllBlogsByOneUserQuery,
          GetAllBlogsByOneUserQueryVariables
        >({
          query: GetAllBlogsByOneUserDocument,
          variables: {
            userId: loginUser.id,
          },
        })

        setPost(postData.data.posts as Posts[])
        setBlog(blogData.data.blogs as Blogs[])
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
                <a>{item.content}</a>
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
  query GetAllPostsByOneUser($userId: String!) {
    posts(where: { user_id: { _eq: $userId } }) {
      id
      user_id
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
    }
  }
`
