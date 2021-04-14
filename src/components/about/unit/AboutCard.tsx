import { Center, Heading, Text, VStack } from '@chakra-ui/react'
import type { VFC } from 'react'

import { NextImage } from '@/components/common/unit/NextImage'
import { useIsDesktop } from '@/utils/methods/customeHooks'

export type AboutCardProps = {
  heading: string
  text: string
  src: string
  alt: string
}

const AboutCard: VFC<AboutCardProps> = (props: AboutCardProps) => {
  const isPC = useIsDesktop()
  const texts = props.text.split('\n')

  const isClient = () => {
    return typeof window !== 'undefined'
  }

  return (
    <Center
      w={['290px', '390px']}
      h={['400px', '530px']}
      bg="white"
      borderRadius="25"
      boxShadow={['0px 0px 8px rgba(0,0,0,0.40)', '0px 0px 5px rgba(0,0,0,0.20)']}
    >
      <VStack spacing="4">
        <Heading color="gray.600" fontSize={['20px', '24px']}>
          {props.heading}
        </Heading>
        {isClient() && (
          <NextImage
            src={props.src}
            alt={props.alt}
            width={isPC ? 275 : 175}
            height={isPC ? 250 : 150}
          />
        )}
        <Text color="gray.600" fontSize={['14px', '18px']}>
          {texts.map((text, index) => {
            return (
              <span key={index}>
                {text}
                <br />
              </span>
            )
          })}
        </Text>
      </VStack>
    </Center>
  )
}

export { AboutCard }
