import Head from 'next/head'

import { AboutCard } from '@/components/about/unit'

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>Home</h2>
      <button
        onClick={() => {
          window.alert('Hello, World!')
        }}
      >
        Button
      </button>
      <AboutCard text="ファッションを投稿" src="/post.svg" alt="ファッションを投稿" />
    </>
  )
}

// eslint-disable-next-line import/no-default-export
export default Home
