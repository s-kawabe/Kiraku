import { Center } from '@chakra-ui/react'
import type { NextPage } from 'next'

import { LayoutWithHead } from '@/components/layout/container'

const NewBlogPage: NextPage = () => {
  return (
    <LayoutWithHead title="ブログ新規投稿" sideMenu>
      <Center mb="80px">
        <p>this is /blogs/new page, </p>
      </Center>
    </LayoutWithHead>
  )
}

// eslint-disable-next-line import/no-default-export
export default NewBlogPage
