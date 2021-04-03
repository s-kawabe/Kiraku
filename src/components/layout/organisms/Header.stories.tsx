import { Box } from '@chakra-ui/react'
import type { Meta, Story } from '@storybook/react/types-6-0'

import type { HeaderProps } from './Header'
import { Header } from './Header'

// eslint-disable-next-line import/no-default-export
export default {
  title: 'organisms/Header',
  component: Header,
} as Meta

const Template: Story<HeaderProps> = (args) => {
  return (
    <Box w={64} h={64}>
      <Header {...args} />
    </Box>
  )
}

export const LogginedHeader = Template.bind({})
LogginedHeader.args = {
  isLogin: true,
}

export const LogoutedHeader = Template.bind({})
LogoutedHeader.args = {
  isLogin: false,
}
