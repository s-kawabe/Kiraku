import { Box, Heading, Stack, VStack } from '@chakra-ui/react'
import { css } from '@emotion/react'
import Head from 'next/head'

import { AboutCard, BackgroundCircle } from '@/components/about/unit'
import { NextImage } from '@/components/common/unit/NextImage'
import { Header } from '@/components/layout/container'
import { ABOUT_CARD_TEXT } from '@/utils/constants/AboutCardText'
import { useIsDesktop } from '@/utils/methods/customeHooks'

const About = () => {
  const isPC = useIsDesktop()
  const { post, blog, show } = ABOUT_CARD_TEXT

  const isClient = () => {
    return typeof window !== 'undefined'
  }
  return (
    <>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header isLogin={false} />
      {/* jumbotron */}
      <Box
        w="100%"
        css={css`
          & img {
            filter: blur(4px);
          }
        `}
      >
        <NextImage src="/hero.webp" alt="ヒーロー画像" imageType="hero" />
      </Box>
      {/* cards */}
      <VStack w="100%" overflow="hidden">
        <Heading color="gray.700" my="50px">
          できること
        </Heading>
        <Stack direction={['column', 'row']} spacing="5vw" mb="50px">
          <AboutCard heading={post.heading} text={post.text} src={post.img} alt={post.heading} />
          <AboutCard heading={blog.heading} text={blog.text} src={blog.img} alt={blog.heading} />
          <AboutCard heading={show.heading} text={show.text} src={show.img} alt={show.heading} />
        </Stack>
        {isClient() && isPC && (
          <>
            <BackgroundCircle left="-50" top="400" />
            <BackgroundCircle left="30vw" top="850" />
            <BackgroundCircle right="-50" top="400" />
          </>
        )}
      </VStack>
      {/* recent post */}
      {/* recent blog */}
    </>
  )
}

// eslint-disable-next-line import/no-default-export
export default About
