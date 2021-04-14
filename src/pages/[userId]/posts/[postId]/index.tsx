import { LayoutWithHead } from '@/components/layout/container'

const UserPostPage = () => {
  return (
    <LayoutWithHead title="○○のポスト「▲▲」">
      <>
        <p>this is /userId/posts/postId page, </p>
      </>
    </LayoutWithHead>
  )
}

// eslint-disable-next-line import/no-default-export
export default UserPostPage
