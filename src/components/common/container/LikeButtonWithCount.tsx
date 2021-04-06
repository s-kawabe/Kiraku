import { Box, Icon, Text, Tooltip } from '@chakra-ui/react'
import type { VFC } from 'react'
import { useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

export type LikeButtonWithCountProps = {
  count: number
  isLiked: boolean
}

const LikeButtonWithCount: VFC<LikeButtonWithCountProps> = (props: LikeButtonWithCountProps) => {
  const [isLike, setIsLike] = useState(false)

  const toggleLike = () => {
    setIsLike(!isLike)
  }

  return (
    <Box display="flex" alignItems="center" color="gray.500">
      <Tooltip label="いいね！" bg="gray.400" fontSize="11px">
        <Text cursor="pointer">
          <Icon
            as={isLike ? AiFillHeart : AiOutlineHeart}
            mr="2.5"
            onClick={toggleLike}
            fontSize="22px"
            color={isLike ? 'red.400' : ''}
          />
        </Text>
      </Tooltip>
      <Text>{props.count}</Text>
    </Box>
  )
}

export { LikeButtonWithCount }
