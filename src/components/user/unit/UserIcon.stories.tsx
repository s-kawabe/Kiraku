import { Box } from '@chakra-ui/react'
import type { Meta, Story } from '@storybook/react/types-6-0'

import type { UserIconProps } from './UserIcon'
import { UserIcon } from './UserIcon'

// eslint-disable-next-line import/no-default-export
export default {
  title: 'user/unit/UserIcon',
  component: UserIcon,
} as Meta

const Template: Story<UserIconProps> = (args) => {
  return (
    <Box w={64} h={64}>
      <UserIcon {...args} />
    </Box>
  )
}

export const HeaderUserIcon = Template.bind({})
HeaderUserIcon.args = {
  src: './myicon.jpg',
  width: 60,
  height: 60,
} as UserIconProps

export const HeaderNoUserIcon = Template.bind({})
HeaderNoUserIcon.args = {
  src: './nouser.svg',
  width: 60,
  height: 60,
} as UserIconProps

export const UserPageIcon = Template.bind({})
UserPageIcon.args = {
  src: './myicon.jpg',
  width: 120,
  height: 120,
} as UserIconProps
