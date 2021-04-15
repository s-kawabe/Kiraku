import { useRouter } from 'next/router'

import { LayoutWithHead } from '@/components/layout/container'

const UserPostListPage = () => {
  const router = useRouter()
  const { userId } = router.query

  return (
    <LayoutWithHead title="○○のポスト一覧">
      <>
        <p>this is /userId page, router.query test:{userId}</p>
      </>
    </LayoutWithHead>
  )
}

// eslint-disable-next-line import/no-default-export
export default UserPostListPage
