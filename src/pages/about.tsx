import { Box, Text } from '@chakra-ui/react'
import Head from 'next/head'

import { NextImage } from '@/components/common/unit/NextImage'

const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box w="100%" h="60px" bg="gray.300" boxShadow="lg" zIndex="1" position="fixed">
        <Text fontSize="30px" ml="5">
          Kiraku
        </Text>
      </Box>
      <Box w="100%" h="450px" bg="gray.200" zIndex="0" filter="blur(4px)">
        <NextImage src="/hero.webp" alt="ヒーロー画像" imageType="hero" />
      </Box>
    </>
  )
}

// eslint-disable-next-line import/no-default-export
export default About
