import type { HTMLChakraProps } from '@chakra-ui/react'
import { Center, chakra } from '@chakra-ui/react'
import type { HTMLMotionProps } from 'framer-motion'
import { motion } from 'framer-motion'
import type { VFC } from 'react'

import { NextImage } from '@/components/common/unit/NextImage'

type Merge<P, T> = Omit<P, keyof T> & T
type MotionBoxProps = Merge<HTMLChakraProps<'div'>, HTMLMotionProps<'div'>>

const MotionBox: React.FC<MotionBoxProps> = motion(chakra.div)

const Loading: VFC = () => {
  return (
    <Center mt="200px">
      <MotionBox
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 360, 360, 0],
          borderRadius: ['20%', '20%', '50%', '50%', '20%'],
        }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          times: [0, 0.2, 0.5, 0.8, 1],
          loop: Infinity,
          repeatDelay: 0.5,
        }}
        w="60px"
        h="60px"
        bg="orange.50"
        display="flex"
        alignItems="center"
      >
        <Center alignItems="center">
          <NextImage src="/logo.svg" alt="ロゴ" width={60} height={30} />
        </Center>
      </MotionBox>
    </Center>
  )
}

export { Loading }
