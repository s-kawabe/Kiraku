import { useReactiveVar } from '@apollo/client'
import { Box, Textarea } from '@chakra-ui/react'
import type { RefObject, VFC } from 'react'
import { useState } from 'react'

import { loginUserVar } from '@/apollo/cache'
import { initializeApollo } from '@/apollo/client'
import type {
  AddBlogCommentMutation,
  AddBlogCommentMutationVariables,
  AddPostCommentMutation,
  AddPostCommentMutationVariables,
} from '@/apollo/graphql'
import { AddBlogCommentDocument, AddPostCommentDocument } from '@/apollo/graphql'
import { NormalButton } from '@/components/common/unit'

type Props = {
  userId: string
  commentInput?: RefObject<HTMLTextAreaElement>
  postId?: number
  blogId?: number
}

const CommentForm: VFC<Props> = (props: Props) => {
  const [comment, setComment] = useState('')
  const [disableSubmit, setDisableSubmit] = useState(true)
  const loginUser = useReactiveVar(loginUserVar)
  const client = initializeApollo()

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value
    setComment(text)
    setDisableSubmit(text.length === 0 || text.length > 100)
  }

  const handleSubmit = async () => {
    if (props.postId) {
      await client.mutate<AddPostCommentMutation, AddPostCommentMutationVariables>({
        mutation: AddPostCommentDocument,
        variables: {
          userId: loginUser?.id as string,
          postId: props.postId,
          comment: comment,
        },
      })
      setComment('')
    } else if (props.blogId) {
      await client.mutate<AddBlogCommentMutation, AddBlogCommentMutationVariables>({
        mutation: AddBlogCommentDocument,
        variables: {
          userId: loginUser?.id as string,
          blogId: props.blogId,
          comment: comment,
        },
      })
    }
  }

  return (
    <>
      {loginUser ? (
        <>
          <Textarea
            ref={props.commentInput}
            placeholder="コメントを書く（100文字以内）"
            borderColor="gray.400"
            h="150px"
            onChange={(e) => {
              handleCommentChange(e)
            }}
            value={comment}
          />
          <Box textAlign="right">
            <Box onClick={handleSubmit}>
              <NormalButton
                isDisabled={disableSubmit}
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
