import { Box } from '@chakra-ui/react'
import type { Meta, Story } from '@storybook/react/types-6-0'

import { LoginForm } from './LoginForm'

// eslint-disable-next-line import/no-default-export
export default {
  title: 'forms/container/LoginForm',
  component: LoginForm,
} as Meta

const Template: Story = (args) => {
  return (
    <Box w={64} h={64}>
      <LoginForm {...args} />
    </Box>
  )
}

export const NormalLoginForm = Template.bind({})
