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
  fontSize: '18px',
  iconSize: '21px',
  initial: false,
}

export const SmallLikeButton = Template.bind({})
SmallLikeButton.args = {
  count: 100,
  fontSize: '14px',
  iconSize: '17px',
  initial: false,
}
