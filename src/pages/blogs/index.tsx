import { LayoutWithHead, TabNavigation } from '@/components/layout/container'

const TopBlogsPage = () => {
  return (
    <LayoutWithHead title="最近のブログ一覧" sideMenu>
      <TabNavigation now="blog" />
    </LayoutWithHead>
  )
}

// eslint-disable-next-line import/no-default-export
export default TopBlogsPage

// 全ユーザのブログ全件(or一定期間まで)の新着順
