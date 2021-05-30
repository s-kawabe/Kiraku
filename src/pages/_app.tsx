import type { ApolloClient, NormalizedCacheObject } from '@apollo/client'
import { ApolloProvider, useReactiveVar } from '@apollo/client'
import { Center, Spinner } from '@chakra-ui/react'
import { css, Global } from '@emotion/react'
import reset from 'emotion-reset'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect, useState } from 'react'

import { loginUserVar, sideMenuVar } from '@/apollo/cache'
import { useApollo } from '@/apollo/client'
import type {
  ReactiveVarGetUserQuery,
  ReactiveVarGetUserQueryVariables,
  Top10TopicAndBrandQuery,
  Top10TopicAndBrandQueryVariables,
} from '@/apollo/graphql'
import { ReactiveVarGetUserDocument, Top10TopicAndBrandDocument } from '@/apollo/graphql'
import { ChakraWrapper } from '@/chakra/ChakraWrapper'
import { auth } from '@/firebase/firebaseConfig'

const base = css`
  html {
    scroll-behavior: smooth;
  }
  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, 'Hiragino Kaku Gothic ProN', 'Hiragino Sans',
      'BIZ UDPGothic', Meiryo, sans-serif !important;
  }
`

const App = (props: AppProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const client: ApolloClient<NormalizedCacheObject> = useApollo(props.pageProps)
  const loginUser = useReactiveVar(loginUserVar)

  const ogUrl = 'https://kiraku.app'
  const description =
    'ファッション共有SNS「Kiraku」では、お気に入りのファッションアイテムやコーディネートを誰でも気楽に投稿できます。もっと楽しみたい方は、ファッションに関するブログも書くことができます。'

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        // ログイン時はグローバルステートをセットするがログイン後にURLを直接更新するとリセットされるため呼んでおく
        if (loginUser === null) {
          await client
            .query<ReactiveVarGetUserQuery, ReactiveVarGetUserQueryVariables>({
              query: ReactiveVarGetUserDocument,
              variables: {
                id: user.uid,
              },
            })
            .then((getUser) => {
              loginUserVar(getUser.data.users_by_pk)
            })
        }
      } else {
        // logout時: グローバルステートを初期化
        loginUserVar(null)
      }
    })

    // サイドバーに表示する人気のトピックスとブランド取得
    client
      .query<Top10TopicAndBrandQuery, Top10TopicAndBrandQueryVariables>({
        query: Top10TopicAndBrandDocument,
      })
      .then((data) => {
        sideMenuVar(data.data)
      })
      .catch((error) => {
        console.log(error)
      })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (props.pageProps) {
      setIsLoading(false)
    }
  }, [props.pageProps])

  return (
    <>
      <Global
        styles={css`
          ${reset}
          ${base}
        `}
      />
      <ApolloProvider client={client}>
        <ChakraWrapper>
          <Head>
            <meta charSet="utf-8" />
            <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <meta name="robots" content="follow, index" />
            <meta name="description" content={description} />
            <meta property="og:title" content={'Kiraku | "着"楽にファッション。'} />
            <meta property="og:url" content={ogUrl} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Kiraku" />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={`${ogUrl}/og.png`} />
            <meta name="twitter:title" content={'Kiraku | "着"楽にファッション。'} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@shin_k_2281" />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={`${ogUrl}/og.png`} />
          </Head>
          {isLoading ? (
            <Center h="100vh" w="100vw">
              <Spinner />
            </Center>
          ) : (
            <props.Component {...props.pageProps} />
          )}
        </ChakraWrapper>
      </ApolloProvider>
    </>
  )
}

// eslint-disable-next-line import/no-default-export
export default App
