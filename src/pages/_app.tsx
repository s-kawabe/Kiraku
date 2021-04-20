import type { ApolloClient, NormalizedCacheObject } from '@apollo/client'
import { ApolloProvider, useReactiveVar } from '@apollo/client'
import { css, Global } from '@emotion/react'
import reset from 'emotion-reset'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

import { loginUserVar } from '@/apollo/cache'
import { useApollo } from '@/apollo/client'
import type { ReactiveVarGetUserQuery, ReactiveVarGetUserQueryVariables } from '@/apollo/graphql'
import { ReactiveVarGetUserDocument } from '@/apollo/graphql'
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
  const usingLoginUserVar = useReactiveVar(loginUserVar)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log('ユーザログイン')
        // ログイン時はグローバルステートをセットするがログイン後にURLを直接更新するとリセットされるため呼んでおく
        if (usingLoginUserVar === null) {
          client
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
        console.log('ユーザログアウト')
        // logout時: グローバルステートを初期化
        loginUserVar(null)
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
