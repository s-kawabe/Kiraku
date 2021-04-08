import { Box } from '@chakra-ui/react'
import type { Meta, Story } from '@storybook/react/types-6-0'

import type { CommentIconWithCountProps } from './CommentIconWithCount'
import { CommentIconWithCount } from './CommentIconWithCount'

// eslint-disable-next-line import/no-default-export
export default {
  title: 'common/container/CommentIconWithCount',
  component: CommentIconWithCount,
} as Meta

const Template: Story<CommentIconWithCountProps> = (args) => {
  return (
    <Box w={64} h={64}>
      <CommentIconWithCount {...args} />
    </Box>
  )
}

export const Comment = Template.bind({})
Comment.args = {
  count: 33,
}

export const SmallComment = Template.bind({})
SmallComment.args = {
  count: 33,
  fontSize: '14px',
}
