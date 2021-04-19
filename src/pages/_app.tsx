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

const App = (props: AppProps) => {
  const client: ApolloClient<NormalizedCacheObject> = useApollo(props.pageProps)

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        // ApolloClientを作り直す
        // hasuraのuserテーブルから今ログインしたuserの情報をとってきてグローバルステートに格納
        // const tmp = await client.query({
        //   query: gql`
        //     query ReactiveVar_GetUser($id: String!) {
        //       users(where: { id: { _eq: $id } }) {
        //         id
        //         display_id
        //         name
        //         profile
        //         gender
        //         email
        //         image
        //         created_at
        //       }
        //     }
        //   `,
        //   variables: {
        //     id: user.uid,
        //   },
        // })
        console.log('ユーザログイン')
        // console.log(tmp)
      } else {
        // logout時: グローバルステートを初期化
        console.log('ユーザログアウト')
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
