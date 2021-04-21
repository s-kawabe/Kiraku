import { Box } from '@chakra-ui/react'
import type { Meta, Story } from '@storybook/react/types-6-0'

import type { AsideContextListProps } from './AsideContextList'
import { AsideContextList } from './AsideContextList'

const brands = [
  {
    name: 'huga',
    id: 1,
  },
  {
    name: 'piyoyo',
    id: 2,
  },
]

const topics = [
  {
    name: 'hogehoge',
    id: 1,
  },
  {
    name: 'pya----',
    id: 2,
  },
]

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
  topics,
  brands,
} as AsideContextListProps
