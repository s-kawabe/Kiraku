import { gql } from '@apollo/client'

import { LayoutWithHead } from '@/components/layout/container'

const UserBlogListPage = () => {
  return (
    <LayoutWithHead title="○○のブログ一覧">
      <>
        <p>this is /userId/blogs page, </p>
      </>
    </LayoutWithHead>
  )
}

// eslint-disable-next-line import/no-default-export
export default UserBlogListPage

gql`
  query GetAllBlogsByOneUser($userId: String!) {
    blogs(where: { user_id: { _eq: $userId } }) {
      id
      user_id
      content
      gender
      created_at
      topics {
        topic {
          id
          name
        }
      }
      brands {
        brand {
          id
          name
        }
      }
    }
  }
`
