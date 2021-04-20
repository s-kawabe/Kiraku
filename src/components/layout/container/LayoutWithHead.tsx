import { Box, Flex } from '@chakra-ui/react'
import Head from 'next/head'
import type { FC } from 'react'

import { loginUserVar } from '@/apollo/cache'
import { Footer, Header } from '@/components/layout/container'
import { AsideContextList } from '@/components/layout/container'

type Props = {
  children: React.ReactNode
  isLogin?: boolean
  title?: string
  sideMenu?: boolean
}

const LayoutWithHead: FC<Props> = (props: Props) => {
  // useEffectでグローバルステートからuserの情報を取る

  const pageTitle = props.title ? `${props.title} | Kiraku` : 'Kiraku | "着"楽にファッション。'
  const ogUrl = 'https://kiraku.app'
  const description =
    'ファッション共有SNS「Kiraku」では、お気に入りのファッションアイテムやコーディネートを誰でも気楽に投稿できます。もっと楽しみたい方は、ファッションに関するブログも書くことができます。'
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="robots" content="follow, index" />
        <meta name="description" content={description} />
        <meta property="og:url" content={ogUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Kiraku" />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:image" content={`${ogUrl}/og.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@shin_k_2281" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${ogUrl}/og.png`} />
      </Head>

      <Header user={loginUserVar()} />
      {props.sideMenu ? (
        <Flex>
          <Box h="100%">
            <AsideContextList topics={['hoge', 'huga', 'piyo']} brands={['hoge', 'huga', 'piyo']} />
          </Box>
          <Box>{props.children}</Box>
        </Flex>
      ) : (
        props.children
      )}
      <Footer />
    </>
  )
}

export { LayoutWithHead }
