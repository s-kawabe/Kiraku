import { Box, Text } from '@chakra-ui/react'
import type { VFC } from 'react'

export type AboutCardProps = {
  text: string
  imagePath: string
}

const AboutCard: VFC<AboutCardProps> = (props: AboutCardProps) => {
  return (
    <Box w="200px" h="400" bg="#66310B" opacity="60%">
      <Text size="lg" color="white" fontWeight="bold">
        {props.text}
      </Text>
    </Box>
  )
}

export { AboutCard }
