import { Box, Center, HStack, Text } from '@chakra-ui/react'
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
    <Box
      w="325px"
      h="250px"
      p="10px"
      borderRadius="8px"
      border="0.8px solid"
      bg="#FFFBEC"
      borderColor="gray.300"
    >
      <HStack w="200px" background="white" borderRadius="25px">
        <UserIcon src={props.userIcon} width={45} height={45} />
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
        <HStack spacing={8} ml="auto" mr="10px">
          <CommentIconWithCount count={100} fontSize="14px" />
          <LikeButtonWithCount count={200} isLiked={false} fontSize="14px" />
        </HStack>
      </Box>
      <Center p="3px" borderRadius="16px" bg="#fff">
        春におすすめのメンズ小物３選
      </Center>
      <Box h="110px" p="12px" borderRadius="16px" bg="#fff" mt="2">
        <Text fontSize="11px">
          こんにちは、皆様いかがお過ごしでしょうか
          今回は春に先駆けて周りと差別化できるトレンドのメンズ小物3選をご紹介します
          まず第３位は〜〜〜〜....
        </Text>
      </Box>
    </Box>
  )
}

export { BlogCard }
