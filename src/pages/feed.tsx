import { gql } from '@apollo/client'

import { LayoutWithHead, TabNavigation } from '@/components/layout/container'

const TopUserFeedPage = () => {
  return (
    <LayoutWithHead title="○○のタイムライン" sideMenu>
      <TabNavigation now="feed" />
    </LayoutWithHead>
  )
}

// eslint-disable-next-line import/no-default-export
export default TopUserFeedPage

// フォローしているユーザが投稿したポストとブログの新着順
gql`
  query GetFollowUserContents($id: String!) {
    posts(where: { user: { relation_user_to: { user_id: { _eq: $id } } } }) {
      id
      user_id
      image
      gender
      content
      created_at
    }
    blogs(where: { user: { relation_user_to: { user_id: { _eq: $id } } } }) {
      id
      title
      content
      gender
      created_at
    }
    users(where: { relation_user_to: { user_id: { _eq: $id } } }) {
      id
      display_id
      name
      profile
      gender
      image
      created_at
    }
  }
`
