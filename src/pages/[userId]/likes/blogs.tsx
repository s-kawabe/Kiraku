import { LayoutWithHead } from '@/components/layout/container'
import { Profile } from '@/components/user/container'

const UserLikeBlogsPage = () => {
  return (
    <LayoutWithHead title="○○のいいねしたブログ" sideMenu>
      <Profile />
      <>
        <p>this is /userId/likes/blogs page </p>
      </>
    </LayoutWithHead>
  )
}

// eslint-disable-next-line import/no-default-export
export default UserLikeBlogsPage
