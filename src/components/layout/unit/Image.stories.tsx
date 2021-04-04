import { Box } from '@chakra-ui/react'
import type { Meta, Story } from '@storybook/react/types-6-0'

import type { LogoProps } from './Image'
import { Logo } from './Image'

// eslint-disable-next-line import/no-default-export
export default {
  title: 'layout/units/Logo',
  component: Logo,
} as Meta

const Template: Story<LogoProps> = (args) => {
  return (
    <Box w={64} h={64}>
      <Logo {...args} />
    </Box>
  )
}

export const HeaderLogo = Template.bind({})
HeaderLogo.args = {
  src: '/logo1.jpg',
  alt: 'アプリケーションロゴ',
  width: 175,
  height: 93,
} as LogoProps

export const FooterLogo = Template.bind({})
FooterLogo.args = {} as LogoProps
