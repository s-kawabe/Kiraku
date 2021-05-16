import { Center, Text } from '@chakra-ui/react'
import type { VFC } from 'react'

const Profile: VFC = () => {
  return (
    <Center w="100%" h="350px" bg="gray.50" zIndex="-1" position="relative">
      <Text>プロフィール</Text>
    </Center>
  )
}

export { Profile }
