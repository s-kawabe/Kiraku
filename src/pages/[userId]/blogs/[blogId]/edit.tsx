import { gql } from '@apollo/client'
import { useRouter } from 'next/router'

import { LayoutWithHead } from '@/components/layout/container'

const UserBlogEditPage = () => {
  const router = useRouter()
  const { userId, postId } = router.query
  return (
    <LayoutWithHead title="ブログ編集「△△」">
      <>
        <p>
          this is /userId/blogs/blogId/edit page, router.query test:{userId}
          {postId}
        </p>
      </>
    </LayoutWithHead>
  )
}

// eslint-disable-next-line import/no-default-export
export default UserBlogEditPage

// ブログ編集用
gql`
  mutation EditPostOne($id: Int!, $user_id: String!, $content: jsonb!, $gender: String!) {
    insert_blogs_one(
      object: { id: $id, user_id: $user_id, content: $content, gender: $gender }
      on_conflict: { constraint: blogs_pkey, update_columns: [content, gender, updated_at] }
    ) {
      id
      user_id
      content
      gender
      created_at
    }
  }
`
