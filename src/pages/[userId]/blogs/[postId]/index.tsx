import { LayoutWithHead } from '@/components/layout/container'

const UserBlogPage = () => {
  return (
    <LayoutWithHead title="○○のブログ「△△」">
      <>
        <p>this is /userId/blogs/blogId page, </p>
      </>
    </LayoutWithHead>
  )
}

// eslint-disable-next-line import/no-default-export
export default UserBlogPage
