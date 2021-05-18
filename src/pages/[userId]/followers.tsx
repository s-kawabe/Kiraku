import { gql } from '@apollo/client'
import { Box } from '@chakra-ui/react'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import { addApolloState, initializeApollo } from '@/apollo/client'
import type {
  GetAllUsersQuery,
  GetAllUsersQueryVariables,
  GetOneUserFollowersQuery,
  GetOneUserFollowersQueryVariables,
  Users,
} from '@/apollo/graphql'
import { GetAllUsersDocument, GetOneUserFollowersDocument } from '@/apollo/graphql'
import { LayoutWithHead } from '@/components/layout/container'
import { Profile, ProfileTab } from '@/components/user/container'

type Props = {
  user: GetOneUserFollowersQuery['users']
}

const UserFollowesPage: NextPage<Props> = (props: Props) => {
  const user = props.user[0]
  return (
    <LayoutWithHead title={`${user.name}のフォロワー一覧`} sideMenu>
      <Profile user={user as Users} />
      <ProfileTab default={5} userDisplayId={user.display_id} />
      <Box m="30px">フォロワー一覧</Box>
    </LayoutWithHead>
  )
}

export const getStaticProps: GetStaticProps<Props, { userId: string }> = async ({ params }) => {
  const client = initializeApollo()
  const userId = params?.userId ?? ''
  const { data } = await client.query<GetOneUserFollowersQuery, GetOneUserFollowersQueryVariables>({
    query: GetOneUserFollowersDocument,
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
export default UserFollowesPage

gql`
  query GetOneUserFollowers($display_id: String!) {
    users(where: { display_id: { _eq: $display_id } }) {
      id
      display_id
      name
      profile
      gender
      image
      created_at
      relation_user_to {
        follow {
          id
          display_id
          name
          image
          created_at
        }
      }
    }
  }
`
