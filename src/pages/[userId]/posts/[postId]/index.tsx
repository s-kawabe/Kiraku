import { gql } from '@apollo/client'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import { addApolloState, initializeApollo } from '@/apollo/client'
import type {
  GetAllUsersWithPostsQuery,
  GetAllUsersWithPostsQueryVariables,
  GetOneUserWithPostQuery,
  GetOneUserWithPostQueryVariables,
  Users,
} from '@/apollo/graphql'
import { GetAllUsersWithPostsDocument, GetOneUserWithPostDocument } from '@/apollo/graphql'
import { LayoutWithHead } from '@/components/layout/container'

type Props = {
  user: Users
}

const UserPostPage: NextPage<Props> = (props: Props) => {
  return (
    <LayoutWithHead title={`${props.user.name}のポスト「${props.user.posts[0].content}」`} sideMenu>
      <>
        <p>this is /userId/posts/postId page, </p>
        <h1>username: {props.user.name}</h1>
        <p>post content: {props.user.posts[0].content}</p>
      </>
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
  if (!data.users_by_pk || !data.users_by_pk.posts) {
    return {
      notFound: true,
    }
  }
  return addApolloState(client, { props: { user: data.users_by_pk }, revalidate: 5 })
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
    fetchPolicy: 'network-only',
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
    users_by_pk(id: $userId) {
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
