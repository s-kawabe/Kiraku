import { Box, Center, Heading, Icon, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react'
import { css } from '@emotion/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AiOutlineIdcard } from 'react-icons/ai'
import { HiOutlineNewspaper } from 'react-icons/hi'
import { IoIosArrowForward } from 'react-icons/io'

import { AboutCard, BackgroundCircle } from '@/components/about/unit'
import { BlogCard } from '@/components/blog/container'
import { IconButton, NextImage } from '@/components/common/unit'
import { LayoutWithHead } from '@/components/layout/container'
import { PostCard } from '@/components/post/container'
import { auth } from '@/firebase/firebaseConfig'
import { ABOUT_CARD_TEXT } from '@/utils/constants/AboutCardText'
import { useIsDesktop } from '@/utils/methods/customeHooks'

const AboutPage = () => {
  const router = useRouter()
  const isPC = useIsDesktop()
  const { post, blog, show } = ABOUT_CARD_TEXT

  const isClient = () => {
    return typeof window !== 'undefined'
  }

  const handleTryLogin = () => {
    auth
      .signInWithEmailAndPassword('test@example.com', 'password')
      .then(() => {
        router.push('/')
      })
      .catch((error) => {
        console.log(error)
        alert('申し訳ございません、エラーが発生しました。')
      })
  }

  return (
    <LayoutWithHead>
      {/* jumbotron */}
      <Box
        w="100%"
        h="65vh"
        position="relative"
        zIndex="0"
        css={css`
          & img {
            filter: brightness(85%);
          }
        `}
      >
        <Box position="absolute" top="0" left="0" zIndex="1" w="max(70vw, 200px)">
          <Text
            position="absolute"
            color="white"
            top="70px"
            py={['20px', '25px', '30px']}
            px={['30px', '70px', '100px']}
            background="rgba(60,60,60,0.2)"
            fontSize={['22px', '30px', '36px']}
            fontWeight="bold"
            letterSpacing="1.4px"
          >
            ファッションを&quot;着&quot;楽に
          </Text>
          <Text
            position="absolute"
            top="250px"
            left={['15px', '40px']}
            color="white"
            fontSize={['12px', '18px']}
            w="max(29vw, 200px)"
            textShadow="1px 1px 0px #555"
          >
            「Kiraku」は誰でも気楽に使えるファッション共有SNSです。その日の気分で自由に投稿してみましょう。
          </Text>
          <Box position="absolute" top="370px" left={['15px', '40px']}>
            <Link href="/">
              <a>
                <IconButton
                  text="テストログイン"
                  fontWeight="semibold"
                  bg="white"
                  border="1px"
                  borderColor="green.300"
                  color="green.300"
                  icon={IoIosArrowForward}
                  iconPosition="right"
                  onClick={handleTryLogin}
                />
              </a>
            </Link>
          </Box>
        </Box>
        <NextImage src="/foo.jpg" alt="ヒーロー画像" imageType="hero" />
      </Box>

      {/* cards */}
      <Box>
        <VStack w="100%" overflow="hidden">
          <Heading color="gray.700" my="60px">
            できること
          </Heading>
          <Stack
            direction={{ base: 'column', xl: 'row' }}
            spacing={['8', '5vw']}
            mb={['50px', '100px']}
          >
            <AboutCard heading={post.heading} text={post.text} src={post.img} alt={post.heading} />
            <AboutCard heading={blog.heading} text={blog.text} src={blog.img} alt={blog.heading} />
            <AboutCard heading={show.heading} text={show.text} src={show.img} alt={show.heading} />
          </Stack>
          <Box>
            {isClient() && isPC && (
              <>
                <BackgroundCircle left="-50" top="400" />
                <BackgroundCircle left="30vw" top="1000" />
                <BackgroundCircle right="0" top="400" />
              </>
            )}
          </Box>
        </VStack>
      </Box>
      <VStack bg="linear-gradient(108.15deg, #F4FCDB 0.79%, #FBFFEC 48.73%, #EFFFBB 99.49%)">
        <Center w="100%">
          <Heading color="gray.700" my="60px">
            つかいかた
          </Heading>
        </Center>

        <Stack
          px={['50px', '80px', '150px']}
          pb="90px"
          direction={{ base: 'column', lg: 'row' }}
          align="center"
        >
          <NextImage src="/macbook.png" alt="macbookのモック" width={500} height={330} />
          <Box maxW="400px">
            <Text
              color="gray.600"
              lineHeight="1.8"
              fontWeight="semibold"
              fontSize={['14px', '1em']}
            >
              ログイン後、右上の投稿ボタンから「ポスト」を選択することでポスト投稿が行えます。
              こちらから画像/テキスト/トピック/ブランド/性別を入力して投稿してみましょう。
              このコンテンツを「ポスト」と呼びます。
            </Text>
          </Box>
        </Stack>

        <Stack
          px={['50px', '80px', '150px']}
          pb="90px"
          direction={{ base: 'column', lg: 'row' }}
          align="center"
          flexDirection={{ base: 'column-reverse', lg: 'row' }}
        >
          <Box maxW="400px">
            <Text
              color="gray.600"
              lineHeight="1.8"
              fontWeight="semibold"
              fontSize={['14px', '1em']}
            >
              ログイン後、右上の投稿ボタンから「ブログ」を選択することでブログ投稿が行えます。
              こちらは長めの文章を記述したい場合に最適です。
              タイトル/本文/性別/トピック/ブランドを入力して投稿してみましょう。
              ブログ本文中には画像も挿入することが可能です。 このコンテンツを「ブログ」と呼びます。
            </Text>
          </Box>
          <Box>
            <NextImage src="/macbook.png" alt="macbookのモック" width={500} height={330} />
          </Box>
        </Stack>

        <Stack
          px={['50px', '80px', '150px']}
          pb="90px"
          direction={{ base: 'column', lg: 'row' }}
          align="center"
        >
          <NextImage src="/macbook.png" alt="macbookのモック" width={500} height={330} />
          <Box maxW="400px">
            <Text
              color="gray.600"
              lineHeight="1.8"
              fontWeight="semibold"
              fontSize={['14px', '1em']}
            >
              投稿したコンテンツにはコメントやいいねがつけられます。
              また、自分のプロフィール画面から自分の投稿したコンテンツ、いいねをしたコンテンツ、
              フォローしている人、フォローされている人、の情報を見ることができます。
            </Text>
          </Box>
        </Stack>
      </VStack>
      <Center h="90px" borderTop="1px" borderColor="gray.300" bg="white">
        <Heading size="lg" color="gray.700">
          最近の投稿
        </Heading>
      </Center>
      {/* recent post */}
      <Box w="100%" bg="gray.100" pt="30px" pb="60px">
        <VStack>
          <Text fontSize="26px" color="gray.600" fontWeight="semibold" mb="30px">
            <Center>
              <Icon as={AiOutlineIdcard} fontSize="40px" />
            </Center>
            ポスト
          </Text>
          <Box>
            <SimpleGrid columns={{ base: 1, xl: 2 }} spacing={8}>
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
                text="この前買った腕時計！！ モダンな雰囲気でとてお気に入りですこの前買った腕時計！！ モダンな雰囲気でとてもお気に入りですこの前買った腕時計！！ モダンな雰囲気でとてもお気に入りです"
                userIcon="/myicon.jpg"
                userName="shintaro"
                userId="shin_k_2281"
              />
            </SimpleGrid>
          </Box>
        </VStack>
      </Box>
      {/* recent blog */}
      <Box w="100%" bg="gray.50" pt="30px" pb="40px">
        <VStack>
          <Text fontSize="26px" color="gray.600" fontWeight="semibold" mb="30px">
            <Center fontSize="40px">
              <Icon as={HiOutlineNewspaper} fontSize="40px" />
            </Center>
            ブログ
          </Text>
          <Box>
            <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={7}>
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
            </SimpleGrid>
          </Box>
        </VStack>
      </Box>
      <Center h="200px">
        <Link href="/">
          <a>
            <IconButton
              text="テストログイン"
              fontWeight="semibold"
              bg="white"
              border="1px"
              borderColor="green.300"
              color="green.300"
              icon={IoIosArrowForward}
              iconPosition="right"
              onClick={handleTryLogin}
            />
          </a>
        </Link>
      </Center>
    </LayoutWithHead>
  )
}

// eslint-disable-next-line import/no-default-export
export default AboutPage
