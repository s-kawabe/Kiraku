import { Center, Heading, VStack } from '@chakra-ui/react'
import type { VFC } from 'react'

import { NextImage } from '@/components/common/unit/NextImage'

export type AboutCardProps = {
  text: string
  src: string
  alt: string
}

const AboutCard: VFC<AboutCardProps> = (props: AboutCardProps) => {
  return (
    <Center w="390px" h="390px" bg="rgba(102, 49, 11, 0.6)" borderRadius="25">
      <VStack spacing="5">
        <Heading color="white" size="md">
          {props.text}
        </Heading>
        <Center w="350px" h="300px" bg="#FFF8DF" borderRadius="5">
          <NextImage src={props.src} alt={props.alt} width={275} height={250} />
        </Center>
      </VStack>
    </Center>
  )
}

export { AboutCard }
