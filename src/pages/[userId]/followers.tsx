import { LayoutWithHead } from '@/components/layout/container'
import { Profile } from '@/components/user/container'

const UserFollowesPage = () => {
  return (
    <LayoutWithHead title="○○のフォロワー一覧" sideMenu>
      <Profile />
      <>
        <p>this is /userId/followers page </p>
      </>
    </LayoutWithHead>
  )
}

// eslint-disable-next-line import/no-default-export
export default UserFollowesPage
