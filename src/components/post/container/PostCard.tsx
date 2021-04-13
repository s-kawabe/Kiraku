import { Box, Center, HStack, Text } from '@chakra-ui/react'
import { css } from '@emotion/react'
import type { VFC } from 'react'

import { CommentIconWithCount, LikeButtonWithCount } from '@/components/common/container'
import { NextImage } from '@/components/common/unit/NextImage'
import { UserIcon } from '@/components/user/unit'

export type PostCardProps = {
  imageSrc: string
  text: string
  userIcon: string
  userName: string
  userId: string
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void
}

const PostCard: VFC<PostCardProps> = (props: PostCardProps) => {
  return (
    <HStack
      w="540px"
      bg="white"
      p="5px"
      borderRadius="8px"
      boxShadow="0px 0px 4px rgba(40, 40, 40, 0.15)"
      cursor="pointer"
    >
      <Center w="200px" borderRadius="8px">
        <NextImage src={props.imageSrc} alt={'ユーザ投稿画像'} imageType="card" />
      </Center>
      <Box
        w="400px"
        py="10px"
        px="15px"
        borderRadius="8px"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <HStack
          background="gray.100"
          borderRadius="25px"
          css={css`
            &:hover img {
              opacity: 0.8;
            }
          `}
        >
          <UserIcon src={props.userIcon} width={52} height={52} />
          <Box>
            <Text fontSize="16px" color="black">
              {props.userName}
            </Text>
            <Text fontSize="12px" color="gray.500">
              @{props.userId}
            </Text>
          </Box>
        </HStack>
        <Box w="300px" overflowWrap="break-word" mt="16px">
          <Text fontSize="13.5px" color="gray.700">
            {props.text}
          </Text>
        </Box>
        <Box ml="auto">
          <HStack spacing={8}>
            <CommentIconWithCount count={100} fontSize="18px" />
            <LikeButtonWithCount count={200} isLiked={false} fontSize="18px" />
          </HStack>
        </Box>
      </Box>
    </HStack>
  )
}

export { PostCard }
