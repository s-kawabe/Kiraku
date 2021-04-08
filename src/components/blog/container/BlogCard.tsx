import { VStack } from '@chakra-ui/react'
import type { VFC } from 'react'

export type BlogCardProps = {
  width: string
  height: string
}

const BlogCard: VFC<BlogCardProps> = (props: BlogCardProps) => {
  return <VStack>{props.width}</VStack>
}

export { BlogCard }
