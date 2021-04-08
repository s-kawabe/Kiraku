import { Box } from '@chakra-ui/react'
import type { Meta, Story } from '@storybook/react/types-6-0'

import { AboutCardText } from '@/utils/constants/AboutCardText'

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
  heading: AboutCardText.post.heading,
  text: AboutCardText.post.text,
  src: '/post.svg',
  alt: 'ファッションを投稿',
}

export const Blog = Template.bind({})
Blog.args = {
  heading: AboutCardText.blog.heading,
  text: AboutCardText.blog.text,
  src: '/blog.svg',
  alt: 'ブログを書く',
}

export const Show = Template.bind({})
Show.args = {
  heading: AboutCardText.show.heading,
  text: AboutCardText.show.text,
  src: '/show.svg',
  alt: '投稿を見る',
}
