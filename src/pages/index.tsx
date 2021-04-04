import Head from 'next/head'
import Image from 'next/image'

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <h2>Home</h2>
      <button
        onClick={() => {
          window.alert('Hello, World!')
        }}
      >
        Button
      </button>
      <Image src="/logo1.svg" alt="アプリケーションロゴ" width={340} height={180} />
      <img src="/logo1.svg" alt="ロゴ" />
    </>
  )
}

// eslint-disable-next-line import/no-default-export
export default Home
