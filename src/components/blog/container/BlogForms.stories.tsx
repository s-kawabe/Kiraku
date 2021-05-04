import { Box } from '@chakra-ui/react'
import type { Meta, Story } from '@storybook/react/types-6-0'

import { BlogForms } from './BlogForms'

// eslint-disable-next-line import/no-default-export
export default {
  title: 'blog/container/BlogForms',
  component: BlogForms,
} as Meta

const Template: Story = () => {
  return (
    <Box position="relative">
      <BlogForms />
    </Box>
  )
}

export const DefaultBlogForms = Template.bind({})
