import { LayoutWithHead } from '@/components/layout/container'
import { Profile } from '@/components/user/container'

const UserFollowingsPage = () => {
  return (
    <LayoutWithHead title="○○のフォロー一覧" sideMenu>
      <Profile />
      <>
        <p>this is /userId/followings page </p>
      </>
    </LayoutWithHead>
  )
}

// eslint-disable-next-line import/no-default-export
export default UserFollowingsPage
