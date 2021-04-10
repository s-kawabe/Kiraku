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

export const HeaderCommentList = Template.bind({})
HeaderCommentList.args = {
  comments: [
    {
      userIcon: '/myicon.jpg',
      userId: 'shin_K_2281',
      comment: `いいですね〜〜〜〜〜うああああああああああああああああああああああああああああああああああああああああ
        ああああああああああああああああああああああああああああああああああああああああ
        ああああああああああああああああああああああああああああああああああああああああ`,
    },
    {
      userIcon: '/myicon.jpg',
      userId: 'hogepiyo',
      comment: `いいですねああああああああああああ
        ああああああああああああああああああああああああああああああ`,
    },
    {
      userIcon: '/myicon.jpg',
      userId: 'hugahuga',
      comment: `いいですね〜〜〜〜〜うああああああああああああああああああああああああああああああああああああああああ
        ああああああああああああああああああああああああああああああああああああああああ
        ああああああああああああああああああああああああああああああああああああああああ`,
    },
  ],
} as CommentListProps
