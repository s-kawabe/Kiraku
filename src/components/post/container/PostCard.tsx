import { HStack } from '@chakra-ui/react'
import type { VFC } from 'react'

export type PostCardProps = {
  width: string
  height: string
}

const PostCard: VFC<PostCardProps> = (props: PostCardProps) => {
  return <HStack>{props.width}</HStack>
}

export { PostCard }
