import { Box, Center, HStack, Text } from '@chakra-ui/react'
import { css } from '@emotion/react'
import type { VFC } from 'react'

import { CommentIconWithCount, LikeButtonWithCount } from '@/components/common/container'
import { UserIcon } from '@/components/user/unit'

export type BlogCardProps = {
  title: string
  text: string
  userIcon: string
  userName: string
  userId: string
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void
  // and more... user/created_at/content/like/comment
}

const BlogCard: VFC<BlogCardProps> = (props: BlogCardProps) => {
  return (
    <Box
      w="350px"
      h="250px"
      p="15px"
      bg="white"
      borderRadius="8px"
      border="0.8px solid"
      borderColor="gray.300"
      cursor="pointer"
    >
      <HStack
        bg="gray.100"
        borderRadius="25px"
        css={css`
          &:hover img {
            opacity: 0.8;
          }
        `}
      >
        <UserIcon src={props.userIcon} width={45} height={45} />
        <Box>
          <Text fontSize="14px" color="black">
            {props.userName}
          </Text>
          <Text fontSize="12px" color="gray.500">
            @{props.userId}
          </Text>
        </Box>
      </HStack>
      <Box display="flex">
        <HStack spacing={8} ml="auto" mr="10px" my="5px">
          <CommentIconWithCount count={100} fontSize="14px" />
          <LikeButtonWithCount count={200} isLiked={false} fontSize="14px" iconSize="17px" />
        </HStack>
      </Box>
      <Center p="2px" borderRadius="16px">
        <Text fontWeight="semibold" color="gray.700" fontSize="16px">
          {props.title}
        </Text>
      </Center>
      <Box h="110px" p="8px" borderRadius="16px" overflow="hidden">
        <Text fontSize="12px" color="gray.600">
          {props.text}
        </Text>
      </Box>
    </Box>
  )
}

export { BlogCard }
