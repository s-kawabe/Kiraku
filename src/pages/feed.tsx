import { LayoutWithHead, TabNavigation } from '@/components/layout/container'

const TopUserFeedPage = () => {
  return (
    <LayoutWithHead title="○○のタイムライン" sideMenu>
      <TabNavigation now="feed" />
    </LayoutWithHead>
  )
}

// eslint-disable-next-line import/no-default-export
export default TopUserFeedPage

// フォローしているユーザが投稿したポストとブログの新着順
