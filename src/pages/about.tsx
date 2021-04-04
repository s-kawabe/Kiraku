import Head from 'next/head'
import Image from 'next/image'

const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <Image src="/logo1.svg" alt="アプリケーションロゴ" width={175} height={93} />
      <h2>About</h2>
    </>
  )
}

// eslint-disable-next-line import/no-default-export
export default About
