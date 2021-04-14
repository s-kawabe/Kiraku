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
  text: 'この前買った腕時計！！ モダンな雰囲気でとてもお気に入りです',
  userIcon: '/myicon.jpg',
  userName: 'shintaro',
  userId: 'shin_k_2281',
} as PostCardProps
