import type { ApolloClient, NormalizedCacheObject } from '@apollo/client'
import { ApolloProvider } from '@apollo/client'
import { css, Global } from '@emotion/react'
import reset from 'emotion-reset'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

import { useApollo } from '@/apollo/client'
import { ChakraWrapper } from '@/chakra/ChakraWrapper'
import { auth } from '@/firebase/firebaseConfig'

const base = css`
  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, 'Hiragino Kaku Gothic ProN', 'Hiragino Sans',
      'BIZ UDPGothic', Meiryo, sans-serif !important;
  }
`

// const fetchUserDetail = (uid: any) => {
//   // hasuraのuserテーブルからログイン中ユーザの詳細情報を取得し
//   // ReactiveVarに格納する
// }

const App = (props: AppProps) => {
  const client: ApolloClient<NormalizedCacheObject> = useApollo(props.pageProps)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // ApolloClientを作り直す
        // hasuraのuserテーブルから今ログインしたuserの情報をとってきてグローバルステートに格納
        // fetchUserDetail
        console.log('ユーザログイン')
      } else {
        // logout時: グローバルステートを初期化
        console.log('ユーザログアウト')
      }
    })
  })

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
          <props.Component {...props.pageProps} />
        </ChakraWrapper>
      </ApolloProvider>
    </>
  )
}

// eslint-disable-next-line import/no-default-export
export default App
