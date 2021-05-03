/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import { Box } from '@chakra-ui/react'
import type { VFC } from 'react'

type Props = {
  top: string
  left?: string
  right?: string
}

const BackgroundCircle: VFC<Props> = (props: Props) => {
  const { ...inputProps } = props
  return (
    <Box
      zIndex="-1"
      w="41vw"
      h="41vw"
      bg="green.50"
      borderRadius="50%"
      position="absolute"
      filter="blur(4px)"
      {...inputProps}
    ></Box>
  )
}

export { BackgroundCircle }
