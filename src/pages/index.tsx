import { Stack } from '@chakra-ui/react'
import Head from 'next/head'

import { AboutCard } from '@/components/about/unit'
import { Header } from '@/components/layout/container'
import { aboutCardText } from '@/utils/constants/aboutCardText'

const Home = () => {
  const { post, blog, show } = aboutCardText
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
    </>
  )
}

// eslint-disable-next-line import/no-default-export
export default Home
