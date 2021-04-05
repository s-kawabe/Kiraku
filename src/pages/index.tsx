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
      <NextImage src="/Error_404.svg" alt="hoge" width={500} height={315} />
    </>
  )
}

// eslint-disable-next-line import/no-default-export
export default Home
