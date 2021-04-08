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
  width: '370px',
  height: '354px',
}
