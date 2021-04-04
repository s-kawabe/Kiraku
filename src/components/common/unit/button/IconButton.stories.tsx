import { Box } from '@chakra-ui/react'
import type { Meta, Story } from '@storybook/react/types-6-0'
import { FaTwitter } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { IoIosArrowForward } from 'react-icons/io'

import type { IconButtonProps } from './IconButton'
import { IconButton } from './IconButton'

// eslint-disable-next-line import/no-default-export
export default {
  title: 'common/unit/IconButton',
  component: IconButton,
} as Meta

const Template: Story<IconButtonProps> = (args) => {
  return (
    <Box w={64} h={64}>
      <IconButton {...args} />
    </Box>
  )
}

export const GoogleLogin = Template.bind({})
GoogleLogin.args = {
  text: 'Googleでログイン',
  fontWeight: 'semibold',
  bg: 'white',
  border: '2px',
  borderColor: 'gray.700',
  color: 'gray.700',
  icon: FcGoogle,
  iconPosition: 'left',
} as IconButtonProps

export const TwitterLogin = Template.bind({})
TwitterLogin.args = {
  text: 'Twitterでログイン',
  fontWeight: 'semibold',
  bg: 'white',
  border: '2px',
  borderColor: '#55ACEE',
  color: 'gray.700',
  icon: FaTwitter,
  iconPosition: 'left',
} as IconButtonProps

export const NoLoginTry = Template.bind({})
NoLoginTry.args = {
  text: 'ログインせずに試す',
  fontWeight: 'semibold',
  bg: 'white',
  border: '1px',
  borderColor: 'green.300',
  color: 'green.300',
  icon: IoIosArrowForward,
  iconPosition: 'right',
}
