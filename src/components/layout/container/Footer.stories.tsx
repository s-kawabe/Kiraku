import { Box } from '@chakra-ui/react'
import type { Meta, Story } from '@storybook/react/types-6-0'

import { Footer } from './Footer'

// eslint-disable-next-line import/no-default-export
export default {
  title: 'layout/containers/Footer',
  component: Footer,
} as Meta

const Template: Story = (args) => {
  return (
    <Box w={64} h={64}>
      <Footer {...args} />
    </Box>
  )
}

export const NormalFooter = Template.bind({})
