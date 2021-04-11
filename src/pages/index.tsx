import { Stack } from '@chakra-ui/react'
import Head from 'next/head'

import { BlogCard } from '@/components/blog/container/BlogCard'
import { Header } from '@/components/layout/container'
import { PostCard } from '@/components/post/container'

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header isLogin />

      <Stack direction={['column', 'row']} spacing={5} mt="30px">
        <PostCard imageSrc="/fashion3.jpeg" userIcon="/myicon.jpg" />
        <PostCard imageSrc="/fashion.jpeg" userIcon="/myicon.jpg" />
      </Stack>
      <br />
      <br />
      <br />
      <Stack direction={['column', 'row']} spacing={5} mt="30px">
        <BlogCard userIcon="/myicon.jpg" />
        <BlogCard userIcon="/nouser.svg" />
        <BlogCard userIcon="/logo.svg" />
      </Stack>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

// eslint-disable-next-line import/no-default-export
export default Home
