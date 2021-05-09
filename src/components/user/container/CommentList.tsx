import { Box, Text, VStack } from '@chakra-ui/react'
import { css } from '@emotion/react'
import type { VFC } from 'react'

import { NextImage } from '@/components/common/unit/NextImage'
import { UserIcon } from '@/components/user/unit'

// nameがあればnameを表示、なければdisplayIdを表示
export type CommentListProps = {
  comments: {
    userIcon?: string | null
    userName?: string | null
    userId: string
    comment: string
  }[]
}

const CommentList: VFC<CommentListProps> = (props: CommentListProps) => {
  return (
    <Box
      minH="200px"
      css={css`
        & div:not(:last-child) {
          margin-bottom: 8px;
        }
      `}
    >
      {props.comments.length !== 0 ? (
        props.comments.map((comment) => {
          return (
            <div key={comment.comment}>
              <Text fontSize="13px" color="gray.500" mb="1">
                {comment.userName ?? `@${comment.userId}`}
              </Text>
              <Box display="flex" alignItems="flex-start">
                <UserIcon src={comment.userIcon ?? '/nouser.svg'} width={46} height={46} />
                <Box py="10px" px="20px" ml="10px" bg="gray.100" borderRadius="30px">
                  <Text fontSize="14px" color="gray.700" whiteSpace="pre-wrap">
                    {comment.comment}
                  </Text>
                </Box>
              </Box>
            </div>
          )
        })
      ) : (
        <VStack alignItems="center" mt="30px" minH="inherit" p="5" borderRadius="20px" bg="gray.50">
          <Text color="gray.600" fontSize="13px" my="20px">
            まだコメントはありません、コメントを投稿してみよう。
          </Text>
          <Box
            css={css`
              filter: grayscale(50%);
            `}
          >
            <NextImage
              src="/nocomment.svg"
              alt="コメントが無い場合のアイコン"
              width={250}
              height={260}
            />
          </Box>
        </VStack>
      )}
    </Box>
  )
}

export { CommentList }
