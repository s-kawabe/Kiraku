import { Box } from '@chakra-ui/react'
import type { Meta, Story } from '@storybook/react/types-6-0'

import type { NormalButtonProps } from './NormalButton'
import { NormalButton } from './NormalButton'

// eslint-disable-next-line import/no-default-export
export default {
  title: 'common/unit/NormalButton',
  component: NormalButton,
} as Meta

const Template: Story<NormalButtonProps> = (args) => {
  return (
    <Box w={64} h={64}>
      <NormalButton {...args} />
    </Box>
  )
}

export const SignupPC = Template.bind({})
SignupPC.args = {
  text: '新規会員登録',
  bg: 'green.300',
  color: 'white',
  size: 'md',
  hover: { bg: 'green.200' },
} as NormalButtonProps

export const SignupSP = Template.bind({})
SignupSP.args = {
  text: '会員登録',
  bg: 'green.300',
  color: 'white',
  size: 'sm',
  hover: { bg: 'green.200' },
} as NormalButtonProps

export const LoginPC = Template.bind({})
LoginPC.args = {
  text: 'ログイン',
  bg: 'white',
  color: 'green.300',
  size: 'md',
  variant: 'outline',
  borderColor: 'green.300',
  hover: { bg: 'green.300', color: 'white' },
} as NormalButtonProps

export const LoginSP = Template.bind({})
LoginSP.args = {
  text: 'ログイン',
  bg: 'white',
  color: 'green.300',
  size: 'sm',
  variant: 'outline',
  borderColor: 'green.300',
  hover: { bg: 'green.300', color: 'white' },
} as NormalButtonProps

export const Register = Template.bind({})
Register.args = {
  text: '登録',
  bg: 'green.300',
  color: 'white',
  size: 'md',
  hover: { bg: 'green.200' },
} as NormalButtonProps

export const Post = Template.bind({})
Post.args = {
  text: '投稿',
  bg: 'green.300',
  color: 'white',
  size: 'md',
  hover: { bg: 'green.200' },
} as NormalButtonProps
