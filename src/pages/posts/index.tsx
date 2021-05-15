import { LayoutWithHead, TabNavigation } from '@/components/layout/container'

const TopPostsPage = () => {
  return (
    <LayoutWithHead title="最近のポスト一覧" sideMenu>
      <TabNavigation now="post" />
    </LayoutWithHead>
  )
}

// eslint-disable-next-line import/no-default-export
export default TopPostsPage

// 全ユーザのポスト全件(or一定期間まで)の新着順
