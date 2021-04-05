import { Box } from '@chakra-ui/react'
import type { Meta, Story } from '@storybook/react/types-6-0'

import { DarkmodeToggle } from './DarkmodeToggle'

// eslint-disable-next-line import/no-default-export
export default {
  title: 'common/unit/DarkmodeToggle',
  component: DarkmodeToggle,
} as Meta

const Template: Story = (args) => {
  return (
    <Box w={64} h={64}>
      <DarkmodeToggle {...args} />
    </Box>
  )
}

export const DarkmodeToggleSwitch = Template.bind({})
