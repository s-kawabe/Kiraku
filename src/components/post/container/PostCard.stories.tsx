import { Box } from '@chakra-ui/react'
import type { Meta, Story } from '@storybook/react/types-6-0'

import type { PostCardProps } from './PostCard'
import { PostCard } from './PostCard'

// eslint-disable-next-line import/no-default-export
export default {
  title: 'post/container/PostCard',
  component: PostCard,
} as Meta

const Template: Story<PostCardProps> = (args) => {
  return (
    <Box w={150} h={150}>
      <PostCard {...args} />
    </Box>
  )
}

export const PostCardLongHorizonralImage = Template.bind({})
PostCardLongHorizonralImage.args = {
  imageSrc: '/fashion.jpeg',
  userIcon: '/myicon.jpg',
} as PostCardProps

export const PostCardLongVerticalImage = Template.bind({})
PostCardLongVerticalImage.args = {
  imageSrc: '/fashion2.png',
  userIcon: '/myicon.jpg',
} as PostCardProps

export const PostCardLongVerticalImage2 = Template.bind({})
PostCardLongVerticalImage2.args = {
  imageSrc: '/fashion3.jpeg',
  userIcon: '/myicon.jpg',
} as PostCardProps