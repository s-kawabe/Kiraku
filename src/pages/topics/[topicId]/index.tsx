import { useRouter } from 'next/router'

import { LayoutWithHead } from '@/components/layout/container'

const TopicPage = () => {
  const router = useRouter()
  const { topicId } = router.query
  return (
    <LayoutWithHead title="□□ - トピック">
      <>
        <p>this is /topics/topicId/ page:{topicId} </p>
      </>
    </LayoutWithHead>
  )
}

// eslint-disable-next-line import/no-default-export
export default TopicPage
