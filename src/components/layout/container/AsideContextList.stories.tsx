import { Box } from '@chakra-ui/react'
import type { Meta, Story } from '@storybook/react/types-6-0'

import type { AsideContextListProps } from './AsideContextList'
import { AsideContextList } from './AsideContextList'

const brands = [
  {
    name: 'CHANEL',
    id: 1,
  },
  {
    name: 'LUIS VUITON',
    id: 2,
  },
  {
    name: 'PORTER',
    id: 3,
  },
  {
    name: 'COACH',
    id: 4,
  },
]

const topics = [
  {
    name: '春',
    id: 1,
  },
  {
    name: 'シャツ',
    id: 2,
  },
  {
    name: 'すっきり',
    id: 3,
  },
  {
    name: 'カジュアル',
    id: 4,
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
