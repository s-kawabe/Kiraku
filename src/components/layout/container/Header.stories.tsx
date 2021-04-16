import { Box } from '@chakra-ui/react'
import type { Meta, Story } from '@storybook/react/types-6-0'

import type { HeaderProps } from './Header'
import { Header } from './Header'

// eslint-disable-next-line import/no-default-export
export default {
  title: 'layout/containers/Header',
  component: Header,
} as Meta

const Template: Story<HeaderProps> = (args) => {
  return (
    <Box>
      <Header {...args} />
    </Box>
  )
}

export const LogoutedHeader = Template.bind({})
LogoutedHeader.args = {
  user: null,
}
