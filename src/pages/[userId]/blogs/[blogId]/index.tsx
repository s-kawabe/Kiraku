import { gql } from '@apollo/client'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import { addApolloState, initializeApollo } from '@/apollo/client'
import type {
  Blogs,
  GetAllUsersWithBlogsQuery,
  GetAllUsersWithBlogsQueryVariables,
  GetOneBlogWithUserQuery,
  GetOneBlogWithUserQueryVariables,
} from '@/apollo/graphql'
import { GetAllUsersWithBlogsDocument, GetOneBlogWithUserDocument } from '@/apollo/graphql'
import { LayoutWithHead } from '@/components/layout/container'

type Props = {
  blog: Blogs
}

const UserBlogPage: NextPage<Props> = (props: Props) => {
  return (
    <LayoutWithHead title={`${props.blog.user.name}のブログ「${props.blog.title}」`}>
      <>
        <p>user: {props.blog.user.name} </p>
        <p>blogTitle: {props.blog.title} </p>
      </>
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
  return addApolloState(client, { props: { blog: data.blogs[0] }, revalidate: 60 })
}

// pathの作成にはuserのidではなくdisplay_idを使用
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
