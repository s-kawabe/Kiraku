import { Box, Center, HStack, Text } from '@chakra-ui/react'
import { css } from '@emotion/react'
import { useRouter } from 'next/router'
import type { VFC } from 'react'

import { CommentIconWithCount, LikeButtonWithCount } from '@/components/common/container'
import { UserIcon } from '@/components/user/unit'

export type BlogCardProps = {
  title: string
  text: string
  blogId: number
  userIcon: string
  userName: string
  userId: string
  commentCount: number
  likeCount: number
  topImage?: string
}

const BlogCard: VFC<BlogCardProps> = (props: BlogCardProps) => {
  const router = useRouter()

  const toBlogDetailPage = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation()
    router.push({
      pathname: '/[userId]/blogs/[blogId]',
      query: {
        userId: props.userId,
        blogId: props.blogId,
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
    <Box
      w="350px"
      h="250px"
      p="15px"
      bg="white"
      borderRadius="8px"
      border="0.8px solid"
      borderColor="gray.100"
      cursor="pointer"
      bgImage={`url(${props.topImage})`}
      onClick={(e) => {
        toBlogDetailPage(e)
      }}
      transition="all 0.2s"
      boxShadow="0 3px 6px -2px rgb(0 10 60 / 20%)"
      _hover={{ boxShadow: '0 3px 10px 0px rgb(0 10 60 / 10%)' }}
    >
      {/* user */}
      <HStack
        bg="gray.100"
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
      {/* comment/like */}
      <Box
        display="flex"
        onClick={(e) => {
          toBlogDetailPage(e)
        }}
      >
        <HStack spacing={8} ml="auto" mr="5px" mt="5px" bg="gray.100" px="20px" borderRadius="12px">
          <CommentIconWithCount count={props.commentCount} fontSize="14px" />
          <LikeButtonWithCount
            count={props.likeCount}
            fontSize="14px"
            iconSize="17px"
            initial={false}
            noAnimation={true}
          />
        </HStack>
      </Box>
      {/* title */}
      <Center p="2px" borderRadius="5px" bg="whiteAlpha.800" my="5px">
        <Text fontWeight="semibold" color="gray.700" fontSize="16px">
          {props.title}
        </Text>
      </Center>
      {/* content */}
      <Box h="110px" pt="4px" pl="4px" borderRadius="7px" overflow="hidden" bg="whiteAlpha.800">
        <Text fontSize="12px" color="gray.600" whiteSpace="pre-wrap">
          {props.text}
        </Text>
      </Box>
    </Box>
  )
}

export { BlogCard }
