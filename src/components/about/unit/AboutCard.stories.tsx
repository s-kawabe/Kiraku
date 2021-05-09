import { Box } from '@chakra-ui/react'
import type { Meta, Story } from '@storybook/react/types-6-0'

import { ABOUT_CARD_TEXT } from '@/utils/constants/AboutCardText'

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
  heading: ABOUT_CARD_TEXT.post.heading,
  text: ABOUT_CARD_TEXT.post.text,
  src: './post.svg',
  alt: 'ファッションを投稿',
}

export const Blog = Template.bind({})
Blog.args = {
  heading: ABOUT_CARD_TEXT.blog.heading,
  text: ABOUT_CARD_TEXT.blog.text,
  src: './blog.svg',
  alt: 'ブログを書く',
}

export const Show = Template.bind({})
Show.args = {
  heading: ABOUT_CARD_TEXT.show.heading,
  text: ABOUT_CARD_TEXT.show.text,
  src: './show.svg',
  alt: '投稿を見る',
}
