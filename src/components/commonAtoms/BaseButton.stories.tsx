import { Box } from '@chakra-ui/react'
import type { Meta, Story } from '@storybook/react/types-6-0'

import type { BaseButtonProps } from '@/components/commonAtoms/BaseButton'
import { BaseButton } from '@/components/commonAtoms/BaseButton'

// eslint-disable-next-line import/no-default-export
export default {
  title: 'atoms/Button',
  component: BaseButton,
} as Meta

const Template: Story<BaseButtonProps> = (args) => {
  return (
    <Box w={64} h={64}>
      <BaseButton {...args} />
    </Box>
  )
}

export const RedButton = Template.bind({})
RedButton.args = {
  text: 'red button',
  color: 'red',
} as BaseButtonProps

export const GreenButton = Template.bind({})
GreenButton.args = {
  text: 'green button',
  color: 'green',
} as BaseButtonProps

export const TealButton = Template.bind({})
TealButton.args = {
  text: 'teal button',
  color: 'teal',
} as BaseButtonProps
