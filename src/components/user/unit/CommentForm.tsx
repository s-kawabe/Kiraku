import { useReactiveVar } from '@apollo/client'
import { Box, Textarea } from '@chakra-ui/react'
import type { RefObject, VFC } from 'react'
import { useState } from 'react'

import { loginUserVar } from '@/apollo/cache'
import { NormalButton } from '@/components/common/unit'

type Props = {
  userId: string
  commentInput: RefObject<HTMLTextAreaElement>
}

const CommentForm: VFC<Props> = (props: Props) => {
  const [comment, setComment] = useState('')
  const loginUser = useReactiveVar(loginUserVar)

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value)
  }

  return (
    <>
      {loginUser ? (
        <>
          <Textarea
            ref={props.commentInput}
            placeholder="コメントを書く"
            borderColor="gray.400"
            h="150px"
            onChange={(e) => {
              handleCommentChange(e)
            }}
            value={comment}
          />
          <Box textAlign="right">
            <NormalButton
              text="送信"
              bg="green.300"
              color="white"
              borderRadius="none"
              hover={{ bg: 'green.400' }}
              width="100px"
            />
          </Box>
        </>
      ) : (
        <>
          <Textarea
            isReadOnly
            ref={props.commentInput}
            placeholder="コメントを投稿するにはログインが必要です"
            borderColor="gray.400"
            h="150px"
            onChange={(e) => {
              handleCommentChange(e)
            }}
            value={comment}
          />
        </>
      )}
    </>
  )
}

export { CommentForm }
