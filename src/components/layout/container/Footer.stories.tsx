import type { Meta, Story } from '@storybook/react/types-6-0'

import { Footer } from './Footer'

// eslint-disable-next-line import/no-default-export
export default {
  title: 'layout/containers/Footer',
  component: Footer,
} as Meta

const Template: Story = (args) => {
  return <Footer {...args} />
}

export const NormalFooter = Template.bind({})
