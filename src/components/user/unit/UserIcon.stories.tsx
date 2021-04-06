import { Box } from '@chakra-ui/react'
import type { Meta, Story } from '@storybook/react/types-6-0'

import { UserIcon } from './UserIcon'

// eslint-disable-next-line import/no-default-export
export default {
  title: 'layout/unit/UserIcon',
  component: UserIcon,
} as Meta

const Template: Story = (args) => {
  return (
    <Box w={64} h={64}>
      <UserIcon {...args} />
    </Box>
  )
}

export const DefaultUserIcon = Template.bind({})
