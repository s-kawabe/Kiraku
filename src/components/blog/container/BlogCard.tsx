import { Text, VStack } from '@chakra-ui/react'
import type { VFC } from 'react'

export type BlogCardProps = {
  width: string
  height: string
  userIcon: string
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void
  // and more... user/created_at/content/like/comment
}

const BlogCard: VFC<BlogCardProps> = (props: BlogCardProps) => {
  return (
    <VStack>
      <Text>{props.width}</Text>
    </VStack>
  )
}

export { BlogCard }
