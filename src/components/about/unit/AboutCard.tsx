import { Center, Heading, VStack } from '@chakra-ui/react'
import type { VFC } from 'react'

import { NextImage } from '@/components/common/unit/NextImage'
import { useIsDesktop } from '@/utils/methods/customeHooks'

export type AboutCardProps = {
  text: string
  src: string
  alt: string
}

const AboutCard: VFC<AboutCardProps> = (props: AboutCardProps) => {
  const isDesktop = useIsDesktop()

  return (
    <Center
      w={['290px', '390px']}
      h={['290px', '390px']}
      bg="rgba(102, 49, 11, 0.6)"
      borderRadius="25"
    >
      <VStack spacing="5">
        <Heading color="white" size="md">
          {props.text}
        </Heading>
        <Center w={['250px', '350px']} h={['200px', '300px']} bg="#FFF8DF" borderRadius="5">
          {/* Support to SSR problem... */}
          {typeof window !== 'undefined' ? (
            isDesktop ? (
              <NextImage src={props.src} alt={props.alt} width={275} height={250} />
            ) : (
              <NextImage src={props.src} alt={props.alt} width={175} height={150} />
            )
          ) : (
            <></>
          )}
        </Center>
      </VStack>
    </Center>
  )
}

export { AboutCard }
