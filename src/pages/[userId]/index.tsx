import { gql } from '@apollo/client'
import { Box } from '@chakra-ui/react'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import { addApolloState, initializeApollo } from '@/apollo/client'
import type {
  GetAllUsersQuery,
  GetAllUsersQueryVariables,
  GetOneUserAllPostQuery,
  GetOneUserAllPostQueryVariables,
  Users,
} from '@/apollo/graphql'
import { GetAllUsersDocument, GetOneUserAllPostDocument } from '@/apollo/graphql'
import { LayoutWithHead } from '@/components/layout/container'
import { Profile, ProfileTab } from '@/components/user/container'

type Props = {
  user: GetOneUserAllPostQuery['users']
}

const UserPostListPage: NextPage<Props> = (props: Props) => {
  const user = props.user[0]

  return (
    <LayoutWithHead title="○○のポスト一覧" sideMenu>
      <Profile user={user as Users} />
      <ProfileTab default={0} userDisplayId={user.display_id} />
      <Box m="30px">ポスト一覧</Box>
    </LayoutWithHead>
  )
}

export const getStaticProps: GetStaticProps<Props, { userId: string }> = async ({ params }) => {
  const client = initializeApollo()
  const userId = params?.userId ?? ''
  const { data } = await client.query<GetOneUserAllPostQuery, GetOneUserAllPostQueryVariables>({
    query: GetOneUserAllPostDocument,
    variables: {
      display_id: userId,
    },
  })
  if (data.users.length === 0) {
    return {
      notFound: true,
    }
  }
  return addApolloState(client, { props: { user: data.users }, revalidate: 300 })
}

export const getStaticPaths: GetStaticPaths<{ userId: string }> = async () => {
  const client = initializeApollo()
  const { data } = await client.query<GetAllUsersQuery, GetAllUsersQueryVariables>({
    query: GetAllUsersDocument,
  })

  const paths = data.users.map((user) => {
    return { params: { userId: user.display_id } }
  })

  return {
    paths,
    fallback: 'blocking',
  }
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

gql`
  query GetAllUsers {
    users {
      id
      display_id
    }
  }
`
