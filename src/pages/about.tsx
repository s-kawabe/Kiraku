import Head from 'next/head'

import { Layout } from '@/components/layout'

const About = () => {
  return (
    <Layout>
      <Head>
        <title>Aboutooo</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <h2>About</h2>
    </Layout>
  )
}

// eslint-disable-next-line import/no-default-export
export default About
