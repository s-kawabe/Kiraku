import { Box } from '@chakra-ui/react'
import type { Meta, Story } from '@storybook/react/types-6-0'

import type { IconHeadingProps } from './IconHeading'
import { IconHeading } from './IconHeading'

// eslint-disable-next-line import/no-default-export
export default {
  title: 'common/unit/IconHeading',
  component: IconHeading,
} as Meta

const Template: Story<IconHeadingProps> = (args) => {
  return (
    <Box w={64} h={64}>
      <IconHeading {...args} />
    </Box>
  )
}

export const AsideTopicHeading = Template.bind({})
AsideTopicHeading.args = {
  type: 'topic',
  color: '#8C5A30',
  text: 'トピック',
  size: 'md',
} as IconHeadingProps

export const AsideBrandHeading = Template.bind({})
AsideBrandHeading.args = {
  type: 'brand',
  color: '#8C5A30',
  text: 'ブランド',
  size: 'md',
} as IconHeadingProps

export const MainTopicHeading = Template.bind({})
MainTopicHeading.args = {
  type: 'topic',
  color: 'gray.700',
  text: '秋コーデ',
} as IconHeadingProps

export const MainBrandHeading = Template.bind({})
MainBrandHeading.args = {
  type: 'brand',
  color: 'gray.700',
  text: 'STUSSY',
} as IconHeadingProps
