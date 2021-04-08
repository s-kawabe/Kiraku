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
    <Box w={64} h={64}>
      <PostCard {...args} />
    </Box>
  )
}

export const DefaultPostCard = Template.bind({})
DefaultPostCard.args = {
  width: '580px',
  height: '276px',
}
