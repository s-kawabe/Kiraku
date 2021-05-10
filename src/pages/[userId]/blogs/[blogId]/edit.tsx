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
import { BlogForms } from '@/components/blog/container'
import { LayoutWithHead } from '@/components/layout/container'

type Props = {
  blog: Blogs
}

const UserBlogEditPage: NextPage<Props> = (props: Props) => {
  const blog = props.blog
  return (
    <LayoutWithHead title={`ブログ編集ページ「${blog.title}」`} sideMenu>
      <BlogForms blogData={blog} />
    </LayoutWithHead>
  )
}

// eslint-disable-next-line import/no-default-export
export default UserBlogEditPage

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

// ブログ編集用
gql`
  mutation EditPostOne($id: Int!, $user_id: String!, $content: jsonb!, $gender: String!) {
    insert_blogs_one(
      object: { id: $id, user_id: $user_id, content: $content, gender: $gender }
      on_conflict: { constraint: blogs_pkey, update_columns: [content, gender, updated_at] }
    ) {
      id
      user_id
      title
      content
      gender
      created_at
    }
  }
`
