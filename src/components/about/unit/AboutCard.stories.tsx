import { Box } from '@chakra-ui/react'
import type { Meta, Story } from '@storybook/react/types-6-0'

import type { AboutCardProps } from './AboutCard'
import { AboutCard } from './AboutCard'

// eslint-disable-next-line import/no-default-export
export default {
  title: 'about/unit/AboutCard',
  component: AboutCard,
} as Meta

const Template: Story<AboutCardProps> = (args) => {
  return (
    <Box w={64} h={64}>
      <AboutCard {...args} />
    </Box>
  )
}

export const Post = Template.bind({})
Post.args = {
  text: 'ファッションを投稿',
  imagePath: './hoge',
}

export const Blog = Template.bind({})
Blog.args = {
  text: 'ブログを書く',
  imagePath: './hoge',
}

export const Show = Template.bind({})
Show.args = {
  text: '投稿を見る',
  imagePath: './hoge',
}
