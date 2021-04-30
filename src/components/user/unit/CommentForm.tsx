import { Box, Textarea } from '@chakra-ui/react'
import type { VFC } from 'react'
import { useState } from 'react'

import { NormalButton } from '@/components/common/unit'

type Props = {
  userId: string
}

const CommentForm: VFC<Props> = (props: Props) => {
  const [comment, setComment] = useState('')

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value)
  }

  console.log(props.userId)

  return (
    <>
      <Box>
        <Textarea
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
      </Box>
    </>
  )
}

export { CommentForm }
