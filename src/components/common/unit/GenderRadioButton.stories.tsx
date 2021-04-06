import { Box } from '@chakra-ui/react'
import type { Meta, Story } from '@storybook/react/types-6-0'

import { GenderRadioButton } from './GenderRadioButton'

// eslint-disable-next-line import/no-default-export
export default {
  title: 'common/unit/GenderRadioButton',
  component: GenderRadioButton,
} as Meta

const Template: Story = (args) => {
  return (
    <Box w={64} h={64}>
      <GenderRadioButton {...args} />
    </Box>
  )
}

export const RadioButton = Template.bind({})
