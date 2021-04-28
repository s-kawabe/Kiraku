import { gql } from '@apollo/client'
import type { GetStaticPaths, NextPage } from 'next'

import { initializeApollo } from '@/apollo/client'
import type {
  GetAllUsersWithPostsQuery,
  GetAllUsersWithPostsQueryVariables,
  Posts,
  Users,
} from '@/apollo/graphql'
import { GetAllUsersWithPostsDocument } from '@/apollo/graphql'
import { LayoutWithHead } from '@/components/layout/container'

type Props = {
  user: Users
  post: Posts
  comments: Posts['comments']
}

const UserPostPage: NextPage<Props> = () => {
  return (
    <LayoutWithHead title="○○のポスト「▲▲」" sideMenu>
      <>
        <p>this is /userId/posts/postId page, </p>
      </>
    </LayoutWithHead>
  )
}

// 何のqueryが要りそうか
// - propsのuserIdを元に一人のuser情報一式を取得するquery
// - propsのpostIdを元に一つのpost情報一式を取得するquery
// - propsのpostIdを元にそれに紐づいたコメント情報一式を取得するquery ※あとまわし
// export const getStaticProps: GetStaticProps<Props, { userId: string; postId: string }> = async ({
//   params,
// }) => {
//   return {
//     props: 'hoge',
//     revalidate: 3,
//   }
// }

// 何のqueryが要りそうか
// - userのid一覧を取得するquery
// - 記事のid一覧を取得するquery
export const getStaticPaths: GetStaticPaths<{ userId: string; postId: string }> = async () => {
  const client = initializeApollo()
  const result = await client.query<GetAllUsersWithPostsQuery, GetAllUsersWithPostsQueryVariables>({
    query: GetAllUsersWithPostsDocument,
  })
  const paths = result.data.users
    .map((user) => {
      return user.posts.map((post) => {
        return { params: { userId: user.id, postId: post.id.toString() } }
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
      posts {
        id
      }
    }
  }
`
