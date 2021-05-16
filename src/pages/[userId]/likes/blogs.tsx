import { gql } from '@apollo/client'

import { LayoutWithHead } from '@/components/layout/container'
// import { Profile, ProfileTab } from '@/components/user/container'

const UserLikeBlogsPage = () => {
  return (
    <LayoutWithHead title="○○のいいねしたブログ" sideMenu>
      <>
        <p>this is /userId/likes/blogs page </p>
      </>
    </LayoutWithHead>
  )
}

// eslint-disable-next-line import/no-default-export
export default UserLikeBlogsPage

gql`
  query GetOneUserLikeBlogs($display_id: String!) {
    users(where: { display_id: { _eq: $display_id } }) {
      id
      display_id
      name
      profile
      gender
      image
      created_at
      blog_likes {
        blog {
          id
          title
          content
          gender
          updated_at
        }
      }
    }
  }
`
