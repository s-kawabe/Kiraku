import { Box } from '@chakra-ui/react'
import type { Meta, Story } from '@storybook/react/types-6-0'

import type { CommentListProps } from './CommentList'
import { CommentList } from './CommentList'

// eslint-disable-next-line import/no-default-export
export default {
  title: 'user/container/CommentList',
  component: CommentList,
} as Meta

const Template: Story<CommentListProps> = (args) => {
  return (
    <Box w={64} h={64}>
      <CommentList {...args} />
    </Box>
  )
}

export const ExistCommentList = Template.bind({})
ExistCommentList.args = {
  comments: [
    {
      userIcon: './myicon.jpg',
      userId: 'shin_k_2281',
      comment: `いいですね`,
    },
    {
      userIcon: './nouser.svg',
      userId: 'hogepiyo',
      comment: `ありがとう！！！！`,
    },
    {
      userIcon: './myicon.jpg',
      userId: 'hugahuga',
      comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit. A minus beatae odit harum nam fugiat iste itaque quam`,
    },
  ],
} as CommentListProps

export const NoCommentList = Template.bind({})
NoCommentList.args = {
  comments: [],
} as CommentListProps
