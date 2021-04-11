import { Box, Heading, Stack, VStack } from '@chakra-ui/react'
import Head from 'next/head'

import { AboutCard } from '@/components/about/unit'
import { NextImage } from '@/components/common/unit/NextImage'
import { Header } from '@/components/layout/container'
import { ABOUT_CARD_TEXT } from '@/utils/constants/AboutCardText'

const About = () => {
  const { post, blog, show } = ABOUT_CARD_TEXT
  return (
    <>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header isLogin={false} />

      <Box filter="blur(3px);">
        <NextImage src="/hero.webp" alt="ヒーロー画像" imageType="hero" />
      </Box>
      <VStack w="100%" overflow="hidden">
        <Heading color="gray.700" my="50px">
          できること
        </Heading>
        <Stack direction={['column', 'row']} spacing="5vw" mb="50px">
          <AboutCard heading={post.heading} text={post.text} src={post.img} alt={post.heading} />
          <AboutCard heading={blog.heading} text={blog.text} src={blog.img} alt={blog.heading} />
          <AboutCard heading={show.heading} text={show.text} src={show.img} alt={show.heading} />
        </Stack>
        <Box
          zIndex="-1"
          w="38vw"
          h="38vw"
          bg="#FFFAF0"
          borderRadius="50%"
          position="absolute"
          left="-50"
          top="400"
        ></Box>
        <Box
          zIndex="-1"
          w="38vw"
          h="38vw"
          bg="#FFFAF0"
          borderRadius="50%"
          position="absolute"
          left="30vw"
          top="850"
        ></Box>
        <Box
          zIndex="-1"
          w="38vw"
          h="38vw"
          bg="#FFFAF0"
          borderRadius="50%"
          position="absolute"
          right="-50"
          top="400"
        ></Box>
      </VStack>
    </>
  )
}

// eslint-disable-next-line import/no-default-export
export default About
