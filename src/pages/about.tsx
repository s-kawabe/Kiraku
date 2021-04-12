import { Box, Center, Grid, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import { AiOutlineIdcard } from 'react-icons/ai'
import { HiOutlineNewspaper } from 'react-icons/hi'
import { IoIosArrowForward } from 'react-icons/io'

import { AboutCard, BackgroundCircle } from '@/components/about/unit'
import { BlogCard } from '@/components/blog/container'
import { IconButton, NextImage } from '@/components/common/unit'
import { LayoutWithHead } from '@/components/layout/container'
import { PostCard } from '@/components/post/container'
import { ABOUT_CARD_TEXT } from '@/utils/constants/AboutCardText'
import { useIsDesktop } from '@/utils/methods/customeHooks'

const About = () => {
  const isPC = useIsDesktop()
  const { post, blog, show } = ABOUT_CARD_TEXT

  const isClient = () => {
    return typeof window !== 'undefined'
  }

  return (
    <LayoutWithHead>
      {/* jumbotron */}
      <Box
        w="100%"
        // css={css`
        //   & img {
        //     filter: blur(4px);
        //   }
        // `}
      >
        <NextImage src="/hero.webp" alt="ヒーロー画像" imageType="hero" />
      </Box>
      {/* cards */}
      <VStack w="100%" overflow="hidden">
        <Heading color="gray.700" my="40px">
          できること
        </Heading>
        <Stack direction={['column', 'row']} spacing="5vw" mb="100px">
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
      <Center h="90px" borderY="1px" borderColor="gray.300" bg="white">
        <Heading size="lg" color="gray.700">
          最近の投稿
        </Heading>
      </Center>
      {/* recent post */}
      <Box w="100%" bg="gray.100" pt="30px" pb="60px">
        <VStack>
          <Text fontSize="26px" color="gray.600" fontWeight="semibold" mb="30px">
            <Center fontSize="40px">
              <AiOutlineIdcard />
            </Center>
            ポスト
          </Text>
          <Grid templateColumns="repeat(2, 1fr)" templateRows="auto" gap={8}>
            <PostCard
              imageSrc="/fashion.jpeg"
              text="この前買った腕時計！！ モダンな雰囲気でとてもお気に入りですこの前買った腕時計！！ モダンなこの前買った腕時計！！ モダンな雰囲気でとてもお気に入りですこの前買った腕時計！！ モダンなこの前買った腕時計！！ モダンな雰囲気でとてもお気に入りですこの前買った腕時計！！ モダンな雰囲気でとてもお気に入りですこの前買った腕時計！！ モダンな雰囲気でとてもお気に入りです"
              userIcon="/myicon.jpg"
              userName="shintaro"
              userId="shin_k_2281"
            />
            <PostCard
              imageSrc="/fashion.jpeg"
              text="モダンな雰囲気でとてもお気に入りです"
              userIcon="/myicon.jpg"
              userName="shintaro"
              userId="shin_k_2281"
            />
            <PostCard
              imageSrc="/fashion.jpeg"
              text="この前買った腕時計！！ モ モダンな雰囲気でとてもお気に入りですこの前買った腕時計！！ モダンな雰囲気でとてもお気に入りです"
              userIcon="/myicon.jpg"
              userName="shintaro"
              userId="shin_k_2281"
            />
            <PostCard
              imageSrc="/fashion.jpeg"
              text="この前買った腕時計！！ モダンな雰囲気でとてもお気 モダンな雰囲気でとてもお気に入りです"
              userIcon="/myicon.jpg"
              userName="shintaro"
              userId="shin_k_2281"
            />
            <PostCard
              imageSrc="/fashion.jpeg"
              text="この前買った腕時計！！雰囲気でとてもお気に入りです"
              userIcon="/myicon.jpg"
              userName="shintaro"
              userId="shin_k_2281"
            />
            <PostCard
              imageSrc="/fashion.jpeg"
              text="この前買った腕時計！！ モダンな雰囲気でとてもお気に入りですこの前買った腕時計！！ モダンな雰囲気でとてもお気に入りですこの前買った腕時計！！ モダンな雰囲気でとてもお気に入りです"
              userIcon="/myicon.jpg"
              userName="shintaro"
              userId="shin_k_2281"
            />
          </Grid>
        </VStack>
      </Box>
      {/* recent blog */}
      <Box w="100%" bg="gray.50" pt="30px" pb="40px">
        <VStack>
          <Text fontSize="26px" color="gray.600" fontWeight="semibold" mb="30px">
            <Center fontSize="40px">
              <HiOutlineNewspaper />
            </Center>
            ブログ
          </Text>
          <Grid templateColumns="repeat(3, 1fr)" templateRows="auto" gap={7}>
            <BlogCard
              title="おすすめメンズアイテム5選"
              text={`こんにちは、皆様いかがお過ごしでしょうか
              今回は春に先駆けて周りと差別化できるトレンドのメンズ小物3選をご紹介します
              まず第３位は〜〜〜〜.... まず第３位は〜〜〜〜.... まず第３位は〜〜〜〜....
              まず第３位は〜〜〜〜.... まず第３位は〜〜〜〜.... まず第３位は〜〜〜〜....
              まず第３位は〜〜〜〜.... まず第３位は〜〜〜〜....`}
              userIcon="/myicon.jpg"
              userName="taro"
              userId="kusowarota"
            />
            <BlogCard
              title="おすすめメンズアイテム5選"
              text={`こんにちは、皆様いかがお過ごしでしょうか
              今回は春に先駆けて周りと差別化できるトレンドのメンズ小物3選をご紹介します
              まず第３位は〜〜〜〜.... まず第３位は〜〜〜〜.... まず第３位は〜〜〜〜....
              まず第３位は〜〜〜〜.... まず第３位は〜〜〜〜.... まず第３位は〜〜〜〜....
              まず第３位は〜〜〜〜.... まず第３位は〜〜〜〜....`}
              userIcon="/myicon.jpg"
              userName="taro"
              userId="kusowarota"
            />
            <BlogCard
              title="おすすめメンズアイテム5選"
              text={`こんにちは、皆様いかがお過ごしでしょうか
              今回は春に先駆けて周りと差別化できるトレンドのメンズ小物3選をご紹介します
              まず第３位は〜〜〜〜.... まず第３位は〜〜〜〜.... まず第３位は〜〜〜〜....
              まず第３位は〜〜〜〜.... まず第３位は〜〜〜〜.... まず第３位は〜〜〜〜....
              まず第３位は〜〜〜〜.... まず第３位は〜〜〜〜....`}
              userIcon="/myicon.jpg"
              userName="taro"
              userId="kusowarota"
            />
            <BlogCard
              title="おすすめメンズアイテム5選"
              text={`こんにちは、皆様いかがお過ごしでしょうか
              今回は春に先駆けて周りと差別化できるトレンドのメンズ小物3選をご紹介します
              まず第３位は〜〜〜〜.... まず第３位は〜〜〜〜.... まず第３位は〜〜〜〜....
              まず第３位は〜〜〜〜.... まず第３位は〜〜〜〜.... まず第３位は〜〜〜〜....
              まず第３位は〜〜〜〜.... まず第３位は〜〜〜〜....`}
              userIcon="/myicon.jpg"
              userName="taro"
              userId="kusowarota"
            />
            <BlogCard
              title="おすすめメンズアイテム5選"
              text={`こんにちは、皆様いかがお過ごしでしょうか
              今回は春に先駆けて周りと差別化できるトレンドのメンズ小物3選をご紹介します
              まず第３位は〜〜〜〜.... まず第３位は〜〜〜〜.... まず第３位は〜〜〜〜....
              まず第３位は〜〜〜〜.... まず第３位は〜〜〜〜.... まず第３位は〜〜〜〜....
              まず第３位は〜〜〜〜.... まず第３位は〜〜〜〜....`}
              userIcon="/myicon.jpg"
              userName="taro"
              userId="kusowarota"
            />
            <BlogCard
              title="おすすめメンズアイテム5選"
              text={`こんにちは、皆様いかがお過ごしでしょうか
              今回は春に先駆けて周りと差別化できるトレンドのメンズ小物3選をご紹介します
              まず第３位は〜〜〜〜.... まず第３位は〜〜〜〜.... まず第３位は〜〜〜〜....
              まず第３位は〜〜〜〜.... まず第３位は〜〜〜〜.... まず第３位は〜〜〜〜....
              まず第３位は〜〜〜〜.... まず第３位は〜〜〜〜....`}
              userIcon="/myicon.jpg"
              userName="taro"
              userId="kusowarota"
            />
          </Grid>
        </VStack>
      </Box>
      <Center h="300px">
        <Link href="/">
          <a>
            <IconButton
              text="ログインせずに試す"
              fontWeight="semibold"
              bg="white"
              border="1px"
              borderColor="green.300"
              color="green.300"
              icon={IoIosArrowForward}
              iconPosition="right"
            />
          </a>
        </Link>
      </Center>
    </LayoutWithHead>
  )
}

// eslint-disable-next-line import/no-default-export
export default About
