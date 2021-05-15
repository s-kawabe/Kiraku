import { Box } from '@chakra-ui/react'
import type { Meta, Story } from '@storybook/react/types-6-0'

// import type { CommentListProps } from './CommentList'
import { Profile } from './Profile'

// eslint-disable-next-line import/no-default-export
export default {
  title: 'user/container/Profile',
  component: Profile,
} as Meta

const Template: Story = (args) => {
  return (
    <Box w={64} h={64}>
      <Profile {...args} />
    </Box>
  )
}

export const ProfileHeader = Template.bind({})

// export const NoProfile = Template.bind({})
// NoProfile.args = {
//   comments: [],
// } as ProfileProps
