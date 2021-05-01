import type { HTMLChakraProps } from '@chakra-ui/react'
import { Box, chakra, Icon, Text, Tooltip } from '@chakra-ui/react'
import { css } from '@emotion/react'
import type { HTMLMotionProps } from 'framer-motion'
import { motion, useAnimation } from 'framer-motion'
import type { VFC } from 'react'
import { useEffect, useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

export type LikeButtonWithCountProps = {
  count: number
  fontSize?: string
  iconSize?: string
  initial: boolean
}

// 初期状態はpropsで持ってくる
const LikeButtonWithCount: VFC<LikeButtonWithCountProps> = (props: LikeButtonWithCountProps) => {
  const [isLike, setIsLike] = useState<boolean>(props.initial)
  const controls = useAnimation()

  const toggleLike = () => {
    setIsLike((prev) => {
      return !prev
    })
  }

  const animationStart = () => {
    if (isLike) {
      controls.start({
        scale: [0.9, 1.1, 1.2, 1.2, 1],
        color: ['#FFF5F5', '#FED7D7', '#FEB2B2', '#FC8181', '#F56565'],
      })
    }
  }

  type Merge<P, T> = Omit<P, keyof T> & T
  type MotionBoxProps = Merge<HTMLChakraProps<'div'>, HTMLMotionProps<'div'>>

  const MotionBox: React.FC<MotionBoxProps> = motion(chakra.div)

  useEffect(() => {
    animationStart()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLike])

  useEffect(() => {
    setIsLike(props.initial)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log('props:', props.initial)
  console.log('state:', isLike)

  return (
    <Box display="flex" alignItems="center" color="gray.500" transition="all 0.3s">
      <Tooltip label="いいね！" bg="gray.500" fontSize="11px">
        <MotionBox
          cursor="pointer"
          onClick={toggleLike}
          animate={controls}
          display="flex"
          justifyContent="center"
          alignItems="center"
          transition={{ duration: 0.2 }}
          color={props.initial ? 'red.400' : ''}
          css={css`
            & svg {
              width: ${props.iconSize ?? props.fontSize};
              height: ${props.iconSize ?? props.fontSize};
            }
          `}
        >
          <Icon as={props.initial ? AiFillHeart : AiOutlineHeart} mr="4px" />
        </MotionBox>
      </Tooltip>
      <Text fontSize={props.fontSize}>{props.count}</Text>
    </Box>
  )
}

export { LikeButtonWithCount }
