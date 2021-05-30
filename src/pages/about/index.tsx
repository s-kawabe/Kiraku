import { gql } from '@apollo/client'
import { Box, Center, Heading, Icon, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react'
import { css } from '@emotion/react'
import type { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Fragment } from 'react'
import { AiOutlineIdcard } from 'react-icons/ai'
import { HiOutlineNewspaper } from 'react-icons/hi'
import { IoIosArrowForward } from 'react-icons/io'

import { addApolloState, initializeApollo } from '@/apollo/client'
import type { GetRecentPostQuery } from '@/apollo/graphql'
import type { GetRecentPostQueryVariables } from '@/apollo/graphql'
import { GetRecentPostDocument } from '@/apollo/graphql'
import { AboutCard, BackgroundCircle } from '@/components/about/unit'
import { BlogCard } from '@/components/blog/container'
import { IconButton, NextImage } from '@/components/common/unit'
import { LayoutWithHead } from '@/components/layout/container'
import { PostCard } from '@/components/post/container'
import { auth } from '@/firebase/firebaseConfig'
import { ABOUT_CARD_TEXT } from '@/utils/constants/AboutCardText'
import { convertBlogContentToString, getTopImage } from '@/utils/methods/blog'
import { useIsDesktop } from '@/utils/methods/customeHooks'

type Props = {
  posts: GetRecentPostQuery['posts']
  blogs: GetRecentPostQuery['blogs']
}

const AboutPage: NextPage<Props> = (props: Props) => {
  const router = useRouter()
  const isPC = useIsDesktop('1280px')
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
        <VStack
          w="100%"
          overflow="hidden"
          bg={{
            base:
              'linear-gradient(103.21deg, #FEFFEE 0%, rgba(254, 255, 252, 0.53125) 46.98%, #F9FFDF 100.23%);',
            xl: 'transparent',
          }}
        >
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
          <NextImage src="/macbook1.png" alt="macbookのモック" width={500} height={330} />
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
            <NextImage src="/macbook2.png" alt="macbookのモック" width={500} height={330} />
          </Box>
        </Stack>

        <Stack
          px={['50px', '80px', '150px']}
          pb="90px"
          direction={{ base: 'column', lg: 'row' }}
          align="center"
        >
          <NextImage src="/macbook3.png" alt="macbookのモック" width={500} height={330} />
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
              {props.posts.map((post) => {
                return (
                  <Fragment key={post.id}>
                    <PostCard
                      imageSrc={post.image}
                      postId={post.id}
                      text={post.content}
                      userIcon={post.user.image ?? '/nouser.svg'}
                      userName={post.user.name as string}
                      userId={post.user.display_id}
                      commentCount={post.comments_aggregate.aggregate?.count as number}
                      likeCount={post.likes_aggregate.aggregate?.count as number}
                    />
                  </Fragment>
                )
              })}
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
              {props.blogs.map((blog) => {
                return (
                  <Fragment key={blog.id}>
                    <BlogCard
                      title={blog.title}
                      text={convertBlogContentToString(blog.content)}
                      blogId={blog.id}
                      userIcon={blog.user.image ?? '/nouser.svg'}
                      userName={blog.user.name as string}
                      userId={blog.user.display_id}
                      commentCount={blog.comments_aggregate.aggregate?.count as number}
                      likeCount={blog.likes_aggregate.aggregate?.count as number}
                      topImage={getTopImage(blog.content)}
                    />
                  </Fragment>
                )
              })}
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

export default AboutPage

// 一番最近投稿されたpostとblogを数件取得する (limit post10 blog9)
export const getStaticProps: GetStaticProps<Props> = async () => {
  const client = initializeApollo()
  const { data } = await client.query<GetRecentPostQuery, GetRecentPostQueryVariables>({
    query: GetRecentPostDocument,
  })

  return addApolloState(client, {
    props: { posts: data.posts, blogs: data.blogs },
    revalidate: 300,
  })
}

gql`
  query GetRecentPost {
    posts(limit: 10, order_by: { id: asc }) {
      id
      image
      gender
      content
      created_at
      user {
        id
        display_id
        image
        name
      }
      comments_aggregate {
        aggregate {
          count(columns: id)
        }
      }
      likes_aggregate {
        aggregate {
          count(columns: id)
        }
      }
    }
    blogs(limit: 9, order_by: { id: asc }) {
      id
      title
      content
      gender
      created_at
      user {
        id
        display_id
        image
        name
      }
      comments_aggregate {
        aggregate {
          count(columns: id)
        }
      }
      likes_aggregate {
        aggregate {
          count(columns: id)
        }
      }
    }
  }
`
