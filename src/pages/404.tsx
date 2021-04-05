import type { VFC } from 'react'

import { NextImage } from '@/components/common/unit/NextImage'

const Page404: VFC = () => {
  return (
    <main>
      <p>お探しのページは存在しません。</p>
      <NextImage src="/Error_404.svg" alt="Not Found 404" width={800} height={430} />
    </main>
  )
}

// eslint-disable-next-line import/no-default-export
export default Page404
