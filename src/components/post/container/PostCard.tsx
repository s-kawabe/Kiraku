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
      w="min(95vw, 600px)"
      bg="white"
      p="5px"
      borderRadius="8px"
      boxShadow="0px 0px 4px rgba(40, 40, 40, 0.15)"
      cursor="pointer"
    >
      <Center w="min(40vw, 200px)" borderRadius="8px">
        {/* imageSrcがないパターンはNO IMAGEをつける */}
        <NextImage src={props.imageSrc} alt={'ユーザ投稿画像'} imageType="card" />
      </Center>
      <Box
        w="min(55vw, 400px)"
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
          <UserIcon src={props.userIcon} width={50} height={50} />
          <Box>
            <Text fontSize="16px" color="black">
              {props.userName}
            </Text>
            <Text fontSize="12px" color="gray.500">
              @{props.userId}
            </Text>
          </Box>
        </HStack>
        <Box mt="16px">
          <Text fontSize={['10px', '13.5px']} color="gray.700">
            {props.text}
          </Text>
        </Box>
        <Box ml="auto">
          <HStack spacing={8}>
            <CommentIconWithCount count={100} fontSize="18px" />
            {/* 投稿のIDも渡す必要がある */}
            {/* いいねボタンが押されたらそのIDの投稿とログイン中ユーザを紐づける */}
            <LikeButtonWithCount count={200} isLiked={false} fontSize="18px" iconSize="21px" />
          </HStack>
        </Box>
      </Box>
    </HStack>
  )
}

export { PostCard }
