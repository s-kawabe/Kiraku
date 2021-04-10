import { Box } from '@chakra-ui/react'
import type { Meta, Story } from '@storybook/react/types-6-0'

import type { TextFormProps } from './TextForm'
import { TextForm } from './TextForm'

// eslint-disable-next-line import/no-default-export
export default {
  title: 'forms/unit/TextForm',
  component: TextForm,
} as Meta

const Template: Story<TextFormProps> = (args) => {
  return (
    <Box w={64} h={64}>
      <TextForm {...args} />
    </Box>
  )
}

export const EMailTextForm = Template.bind({})
EMailTextForm.args = {
  label: 'メールアドレス',
  name: 'mail',
} as TextFormProps
