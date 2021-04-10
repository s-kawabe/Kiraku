import { Box, Text } from '@chakra-ui/react'
import { css } from '@emotion/react'
import type { VFC } from 'react'

import { UserIcon } from '@/components/user/unit'

export type CommentListProps = {
  comments: {
    userIcon: string
    userId: string
    comment: string
  }[]
}

const CommentList: VFC<CommentListProps> = (props: CommentListProps) => {
  return (
    <Box
      w="540px"
      css={css`
        & div:not(:last-child) {
          margin-bottom: 20px;
        }
      `}
    >
      {props.comments.map((comment) => {
        return (
          <div key={comment.userId}>
            <Text fontSize="13px" color="gray.500">
              @{comment.userId}
            </Text>
            <Box display="flex" alignItems="flex-start">
              <UserIcon src={comment.userIcon} width={46} height={46} />
              <Box py="12px" px="20px" ml="10px" bg="gray.100" borderRadius="30px">
                <Text fontSize="14px" color="gray.700">
                  {comment.comment}
                </Text>
              </Box>
            </Box>
          </div>
        )
      })}
    </Box>
  )
}

export { CommentList }
