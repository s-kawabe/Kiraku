import { gql } from '@apollo/client'

import { LayoutWithHead } from '@/components/layout/container'
// import { Profile, ProfileTab } from '@/components/user/container'

const UserFollowingsPage = () => {
  return (
    <LayoutWithHead title="○○のフォロー一覧" sideMenu>
      <>
        <p>this is /userId/followings page </p>
      </>
    </LayoutWithHead>
  )
}

// eslint-disable-next-line import/no-default-export
export default UserFollowingsPage

gql`
  query GetOneUserFollowings($display_id: String!) {
    users(where: { display_id: { _eq: $display_id } }) {
      id
      display_id
      name
      profile
      gender
      image
      created_at
      relation_user_from {
        user {
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
