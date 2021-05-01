import { useReactiveVar } from '@apollo/client'
import { Box, Center, Flex, Spinner } from '@chakra-ui/react'
import Head from 'next/head'
import type { FC } from 'react'

import { loginUserVar } from '@/apollo/cache'
import { useTop10TopicAndBrandQuery } from '@/apollo/graphql'
import { Footer, Header } from '@/components/layout/container'
import { AsideContextList } from '@/components/layout/container'
import { useIsDesktop } from '@/utils/methods/customeHooks'

type Props = {
  children: React.ReactNode
  title?: string
  sideMenu?: boolean
}

const LayoutWithHead: FC<Props> = (props: Props) => {
  const isLargerThan1200 = useIsDesktop('1200px')
  const loginUser = useReactiveVar(loginUserVar)

  const { data, loading, error } = useTop10TopicAndBrandQuery()

  if (error) {
    console.log(error)
  }

  const pageTitle = props.title ? `${props.title} | Kiraku` : 'Kiraku | "着"楽にファッション。'
  const ogUrl = 'https://kiraku.app'
  const description =
    'ファッション共有SNS「Kiraku」では、お気に入りのファッションアイテムやコーディネートを誰でも気楽に投稿できます。もっと楽しみたい方は、ファッションに関するブログも書くことができます。'

  if (loading) {
    return (
      <Center mt="30px">
        <Spinner />
      </Center>
    )
  }

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

      <Header user={loginUser} />
      {props.sideMenu ? (
        <Flex>
          {data && isLargerThan1200 && (
            <Box maxH="100vh" overflow="auto" minW="190px">
              <AsideContextList topics={data.topics} brands={data.brands} />
            </Box>
          )}
          <Box w="100%">{props.children}</Box>
        </Flex>
      ) : (
        props.children
      )}
      <Footer />
    </>
  )
}

export { LayoutWithHead }
