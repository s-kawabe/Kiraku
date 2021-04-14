import { useRouter } from 'next/router'

import { LayoutWithHead } from '@/components/layout/container'

const BrandPage = () => {
  const router = useRouter()
  const { brandId } = router.query
  return (
    <LayoutWithHead title="■■ - ブランド">
      <>
        <p>this is /brands/brandId page brandId:{brandId}</p>
      </>
    </LayoutWithHead>
  )
}

// eslint-disable-next-line import/no-default-export
export default BrandPage
