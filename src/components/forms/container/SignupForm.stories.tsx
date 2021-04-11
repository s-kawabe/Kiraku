import { Box } from '@chakra-ui/react'
import type { Meta, Story } from '@storybook/react/types-6-0'

import { SignupForm } from './SignupForm'

// eslint-disable-next-line import/no-default-export
export default {
  title: 'forms/container/SignupForm',
  component: SignupForm,
} as Meta

const Template: Story = (args) => {
  return (
    <Box w={64} h={64}>
      <SignupForm {...args} />
    </Box>
  )
}

export const NormalSignupForm = Template.bind({})
