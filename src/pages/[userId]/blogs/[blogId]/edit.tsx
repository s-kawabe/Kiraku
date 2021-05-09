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
