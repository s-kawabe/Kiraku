import { Box, Center, HStack, Text } from '@chakra-ui/react'
import { css } from '@emotion/react'
import type { VFC } from 'react'

import { CommentIconWithCount, LikeButtonWithCount } from '@/components/common/container'
import { NextImage } from '@/components/common/unit/NextImage'
import { UserIcon } from '@/components/user/unit'

export type PostCardProps = {
  imageSrc: string
  userIcon: string
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void
  // and more... user/created_at/content/like/comment
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
      // transition="all 0.4s"
      // _hover={{
      //   boxShadow: '0px 0px 15px rgba(50, 50, 50, 0.2)',
      // }}
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
              Shintaro
            </Text>
            <Text fontSize="12px" color="gray.500">
              @shin_k_2281
            </Text>
          </Box>
        </HStack>
        <Box w="300px" overflowWrap="break-word" mt="16px">
          <Text fontSize="13.5px" color="gray.700">
            この前買った腕時計！！ モダンな雰囲気でとてもお気に入りです
          </Text>
        </Box>
        <Box ml="auto">
          <HStack spacing={8}>
            <CommentIconWithCount count={100} />
            <LikeButtonWithCount count={200} isLiked={false} />
          </HStack>
        </Box>
      </Box>
    </HStack>
  )
}

export { PostCard }
