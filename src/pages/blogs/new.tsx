import type { NextPage } from 'next'

import { BlogForms } from '@/components/blog/container'
import { LayoutWithHead } from '@/components/layout/container'

const NewBlogPage: NextPage = () => {
  return (
    <LayoutWithHead title="ブログ新規投稿" sideMenu>
      <BlogForms />
    </LayoutWithHead>
  )
}

// eslint-disable-next-line import/no-default-export
export default NewBlogPage
