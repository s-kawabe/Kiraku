import { Box } from '@chakra-ui/react'
import type { Meta, Story } from '@storybook/react/types-6-0'

import type { BlogCardProps } from './BlogCard'
import { BlogCard } from './BlogCard'

// eslint-disable-next-line import/no-default-export
export default {
  title: 'blog/container/BlogCard',
  component: BlogCard,
} as Meta

const Template: Story<BlogCardProps> = (args) => {
  return (
    <Box w={64} h={64}>
      <BlogCard {...args} />
    </Box>
  )
}

export const DefaultBlogCard = Template.bind({})
DefaultBlogCard.args = {
  title: 'おすすめメンズアイテム5選',
  text: `こんにちは、皆様いかがお過ごしでしょうか
  今回は春に先駆けて周りと差別化できるトレンドのメンズ小物3選をご紹介します
  まず第３位は〜〜〜〜.... まず第３位は〜〜〜〜.... まず第３位は〜〜〜〜....
  まず第３位は〜〜〜〜.... まず第３位は〜〜〜〜.... まず第３位は〜〜〜〜....
  まず第３位は〜〜〜〜.... まず第３位は〜〜〜〜....`,
  blogId: 20,
  userIcon: './myicon.jpg',
  userName: 'shintaro',
  userId: 'shin_k_2281',
  commentCount: 3,
  likeCount: 10,
}
