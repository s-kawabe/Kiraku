import Head from 'next/head'

import { NextImage } from '@/components/common/unit/NextImage'

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
      <NextImage src="/hero.webp" alt="ヒーロー画像" width={2240} height={3360} />
    </>
  )
}

// eslint-disable-next-line import/no-default-export
export default Home
