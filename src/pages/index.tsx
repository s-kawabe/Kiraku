import { Stack } from '@chakra-ui/react'
import Head from 'next/head'

import { AboutCard } from '@/components/about/unit'
import { BlogCard } from '@/components/blog/container/BlogCard'
import { Header } from '@/components/layout/container'
import { PostCard } from '@/components/post/container'
import { ABOUT_CARD_TEXT } from '@/utils/constants/AboutCardText'

const Home = () => {
  const { post, blog, show } = ABOUT_CARD_TEXT
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header isLogin={true} />
      <h2>Home</h2>
      <button
        onClick={() => {
          window.alert('Hello, World!')
        }}
      >
        Button
      </button>
      <Stack direction={['column', 'row']} spacing={4}>
        <AboutCard heading={post.heading} text={post.text} src={post.img} alt={post.heading} />
        <AboutCard heading={blog.heading} text={blog.text} src={blog.img} alt={blog.heading} />
        <AboutCard heading={show.heading} text={show.text} src={show.img} alt={show.heading} />
      </Stack>
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
