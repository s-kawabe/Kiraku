import { LayoutWithHead } from '@/components/layout/container'
import { Profile } from '@/components/user/container'

const UserLikePostsPage = () => {
  return (
    <LayoutWithHead title="○○のいいねしたポスト" sideMenu>
      <Profile />
      <>
        <p>this is /userId/likes/posts page </p>
      </>
    </LayoutWithHead>
  )
}

// eslint-disable-next-line import/no-default-export
export default UserLikePostsPage
