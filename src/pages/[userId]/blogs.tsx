import { gql } from '@apollo/client'

import { LayoutWithHead } from '@/components/layout/container'
import { Profile } from '@/components/user/container'

const UserBlogListPage = () => {
  return (
    <LayoutWithHead title="○○のブログ一覧" sideMenu>
      <Profile />
      <>
        <p>this is /userId/blogs page, </p>
      </>
    </LayoutWithHead>
  )
}

// eslint-disable-next-line import/no-default-export
export default UserBlogListPage

gql`
  query GetOneUserAllBlog($display_id: String!) {
    users(where: { display_id: { _eq: $display_id } }) {
      id
      display_id
      name
      profile
      gender
      image
      created_at
      blogs {
        id
        title
        content
        gender
        updated_at
      }
    }
  }
`
