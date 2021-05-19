import { Box, Center, HStack, Text } from '@chakra-ui/react'
import { css } from '@emotion/react'
import { useRouter } from 'next/router'
import type { VFC } from 'react'

import { CommentIconWithCount, LikeButtonWithCount } from '@/components/common/container'
import { NextImage } from '@/components/common/unit/NextImage'
import { UserIcon } from '@/components/user/unit'

export type PostCardProps = {
  isSmall?: boolean
  imageSrc?: string | null
  postId: number
  text: string
  userIcon: string
  userName: string
  userId: string
  commentCount: number
  likeCount: number
}

const PostCard: VFC<PostCardProps> = (props: PostCardProps) => {
  const router = useRouter()

  const toPostDetailPage = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation()
    router.push({
      pathname: '/[userId]/posts/[postId]',
      query: {
        userId: props.userId,
        postId: props.postId,
      },
    })
  }

  const toUserDetailPage = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation()
    router.push({
      pathname: '/[userId]',
      query: {
        userId: props.userId,
      },
    })
  }

  return (
    <HStack
      w={props.isSmall ? 'min(95vw, 550px)' : 'min(95vw, 600px)'}
      bg="white"
      p="5px"
      border="1px"
      borderColor="gray.100"
      borderRadius="8px"
      boxShadow="0px 0px 6px -3px rgba(40, 40, 40, 0.15)"
      cursor="pointer"
      transition="all 0.3s"
      _hover={{
        transform: 'translateY(-3px)',
        boxShadow: '0px 3px 12px -3px rgba(60, 60, 60, 0.15)',
      }}
      onClick={(e) => {
        toPostDetailPage(e)
      }}
    >
      <Center w="min(40vw, 200px)" h="100%" borderRadius="8px">
        {props.imageSrc ? (
          <NextImage src={props.imageSrc} alt={'ユーザ投稿画像'} imageType="card" />
        ) : (
          <Center bg="gray.50" w="100%" h="100%">
            <Text fontWeight="bold" fontSize="12px" color="gray.600" transform="rotate(-28deg)">
              No Image
            </Text>
          </Center>
        )}
      </Center>
      <Box
        w={props.isSmall ? 'min(55vw, 350px)' : 'min(55vw, 400px)'}
        h="100%"
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
          onClick={(e) => {
            toUserDetailPage(e)
          }}
        >
          <UserIcon src={props.userIcon} width={50} height={50} />
          <Box>
            <Text fontSize={['12px', '15px']} color="black">
              {props.userName}
            </Text>
            <Text fontSize="12px" color="gray.500">
              @{props.userId}
            </Text>
          </Box>
        </HStack>
        <Box mt="16px">
          <Text fontSize={['10px', '13.5px']} color="gray.700" whiteSpace="pre-wrap">
            {props.text}
          </Text>
        </Box>
        <Box ml="auto">
          <HStack
            spacing={6}
            onClick={(e) => {
              toPostDetailPage(e)
            }}
          >
            <CommentIconWithCount count={props.commentCount} fontSize="18px" />
            <LikeButtonWithCount
              count={props.likeCount}
              fontSize="18px"
              iconSize="21px"
              initial={false}
              noAnimation={true}
            />
          </HStack>
        </Box>
      </Box>
    </HStack>
  )
}

export { PostCard }
