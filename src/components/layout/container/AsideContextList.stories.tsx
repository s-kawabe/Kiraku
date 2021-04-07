import { Box } from '@chakra-ui/react'
import type { Meta, Story } from '@storybook/react/types-6-0'

import type { AsideContextListProps } from './AsideContextList'
import { AsideContextList } from './AsideContextList'

// eslint-disable-next-line import/no-default-export
export default {
  title: 'common/unit/AsideContextList',
  component: AsideContextList,
} as Meta

const Template: Story<AsideContextListProps> = (args) => {
  return (
    <Box w={64} h={64}>
      <AsideContextList {...args} />
    </Box>
  )
}

export const AsideList = Template.bind({})
AsideList.args = {
  topics: ['hoge', 'huga', 'piyo'],
  brands: ['hoge', 'huga', 'piyo'],
} as AsideContextListProps
