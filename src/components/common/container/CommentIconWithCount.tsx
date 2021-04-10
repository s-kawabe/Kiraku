import { Box, Icon, Text, Tooltip } from '@chakra-ui/react'
import type { VFC } from 'react'
import { FaRegComment } from 'react-icons/fa'

export type CommentIconWithCountProps = {
  count: number
  fontSize?: string
}

const CommentIconWithCount: VFC<CommentIconWithCountProps> = (props: CommentIconWithCountProps) => {
  return (
    <Box display="flex" alignItems="center" color="gray.500">
      <Tooltip label="コメントする" bg="gray.500" fontSize="11px">
        <Text cursor="pointer" pb="4px">
          <Icon as={FaRegComment} mr="5px" fontSize={props.fontSize || '20px'} />
        </Text>
      </Tooltip>
      <Text fontSize={props.fontSize}>{props.count}</Text>
    </Box>
  )
}

export { CommentIconWithCount }
