import { gql } from '@apollo/client'

import { LayoutWithHead } from '@/components/layout/container'
// import { Profile, ProfileTab } from '@/components/user/container'

const UserLikePostsPage = () => {
  return (
    <LayoutWithHead title="○○のいいねしたポスト" sideMenu>
      <>
        <p>this is /userId/likes/posts page </p>
      </>
    </LayoutWithHead>
  )
}

// eslint-disable-next-line import/no-default-export
export default UserLikePostsPage

gql`
  query GetOneUserLikePosts($display_id: String!) {
    users(where: { display_id: { _eq: $display_id } }) {
      id
      display_id
      name
      profile
      gender
      image
      created_at
      post_likes {
        post {
          id
          content
          image
          gender
          updated_at
        }
      }
    }
  }
`
