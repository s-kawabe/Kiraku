import { Box } from '@chakra-ui/react'
import type { Meta, Story } from '@storybook/react/types-6-0'

import type { NortificationProps } from './Nortification'
import { Nortification } from './Nortification'

// eslint-disable-next-line import/no-default-export
export default {
  title: 'layout/containers/Nortification',
  component: Nortification,
} as Meta

const Template: Story<NortificationProps> = (args) => {
  return (
    <Box w={64} h={64}>
      <Nortification {...args} />
    </Box>
  )
}

export const NoNortification = Template.bind({})
NoNortification.args = {
  isNortification: false,
} as NortificationProps

export const ExistNortification = Template.bind({})
ExistNortification.args = {
  isNortification: true,
} as NortificationProps
