import { Box } from '@chakra-ui/react'
import type { Meta, Story } from '@storybook/react/types-6-0'

import type { LikeButtonWithCountProps } from './LikeButtonWithCount'
import { LikeButtonWithCount } from './LikeButtonWithCount'

// eslint-disable-next-line import/no-default-export
export default {
  title: 'common/container/LikeButtonWithCount',
  component: LikeButtonWithCount,
} as Meta

const Template: Story<LikeButtonWithCountProps> = (args) => {
  return (
    <Box w={64} h={64}>
      <LikeButtonWithCount {...args} />
    </Box>
  )
}

export const LikeButton = Template.bind({})
LikeButton.args = {
  count: 100,
  isLiked: true,
}

export const SmallLikeButton = Template.bind({})
SmallLikeButton.args = {
  count: 100,
  isLiked: true,
  fontSize: '14px',
}
