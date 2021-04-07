import { Box, Icon, Text, Tooltip } from '@chakra-ui/react'
import type { VFC } from 'react'
import { FaRegComment } from 'react-icons/fa'

export type CommentIconWithCountProps = {
  count: number
}

const CommentIconWithCount: VFC<CommentIconWithCountProps> = (props: CommentIconWithCountProps) => {
  return (
    <Box display="flex" alignItems="center" color="gray.500">
      <Tooltip label="コメントする" bg="gray.400" fontSize="11px">
        <Text cursor="pointer">
          <Icon as={FaRegComment} mr="2.5" fontSize="20px" />
        </Text>
      </Tooltip>
      <Text>{props.count}</Text>
    </Box>
  )
}

export { CommentIconWithCount }
