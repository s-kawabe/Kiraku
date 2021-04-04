import { Box } from '@chakra-ui/react'
import type { Meta, Story } from '@storybook/react/types-6-0'

import { SearchBar } from './SearchBar'

// eslint-disable-next-line import/no-default-export
export default {
  title: 'common/unit/SearchBar',
  component: SearchBar,
} as Meta

const Template: Story = (args) => {
  return (
    <Box w={64} h={64}>
      <SearchBar {...args} />
    </Box>
  )
}

export const DefaultSearchBar = Template.bind({})
