import { Box, Center, HStack, Text } from '@chakra-ui/react'
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
      h="250px"
      bg="white"
      p="5px"
      borderRadius="8px"
      boxShadow="0px 0px 8px rgba(83, 83, 83, 0.15)"
      cursor="pointer"
      // transition="all 0.4s"
      // _hover={{
      //   boxShadow: '0px 0px 15px rgba(50, 50, 50, 0.2)',
      // }}
    >
      <Center w="186px" h="250px" borderRadius="8px">
        <NextImage src={props.imageSrc} alt={'ユーザ投稿画像'} width={200} height={250} />
      </Center>
      <Box
        w="400px"
        h="242px"
        py="10px"
        px="15px"
        borderRadius="8px"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <HStack background="gray.100" borderRadius="25px">
          <UserIcon src={props.userIcon} width={52} height={52} />
          <Box>
            <Text fontSize="18px" color="black">
              Shintaro
            </Text>
            <Text fontSize="14px" color="gray.500">
              @shin_k_2281
            </Text>
          </Box>
        </HStack>
        <Box w="300px" h="200px" overflowWrap="break-word" mt="16px">
          <Text fontSize="13.5px" color="gray.700">
            ヌメ皮を使用したモダンな財布がお気に入り。 木のボールチェーンブレスレットで手首を
            上品にドレスアップ！！上品にドレスアップ！！上品にドレスアップ！！うわあああああああああああああ
          </Text>
        </Box>
        <Box display="flex" alignItems="flex-end">
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
