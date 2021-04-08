import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import type { VFC } from 'react'

import { CommentIconWithCount, LikeButtonWithCount } from '@/components/common/container'
import { UserIcon } from '@/components/user/unit'

export type BlogCardProps = {
  userIcon: string
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void
  // and more... user/created_at/content/like/comment
}

const BlogCard: VFC<BlogCardProps> = (props: BlogCardProps) => {
  return (
    <VStack
      w="325px"
      h="250px"
      p="10px"
      borderRadius="8px"
      border="0.5px solid"
      borderColor="gray.400"
    >
      <HStack w="200px" background="gray.100" borderRadius="25px">
        <UserIcon src={props.userIcon} width={48} height={48} />
        <Box>
          <Text fontSize="16px" color="black">
            Shintaro
          </Text>
          <Text fontSize="12px" color="gray.500">
            @shin_k_2281
          </Text>
        </Box>
      </HStack>
      <Box display="flex" alignItems="flex-end">
        <HStack spacing={8}>
          <CommentIconWithCount count={100} />
          <LikeButtonWithCount count={200} isLiked={false} />
        </HStack>
      </Box>
    </VStack>
  )
}

export { BlogCard }
