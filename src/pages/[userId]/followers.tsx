// import { Profile, ProfileTab } from '@/components/user/container'
import { gql } from '@apollo/client'

import { LayoutWithHead } from '@/components/layout/container'

const UserFollowesPage = () => {
  return (
    <LayoutWithHead title="○○のフォロワー一覧" sideMenu>
      <>
        <p>this is /userId/followers page </p>
      </>
    </LayoutWithHead>
  )
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
