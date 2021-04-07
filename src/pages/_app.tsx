import { ApolloProvider } from '@apollo/client'
import { css, Global } from '@emotion/react'
import reset from 'emotion-reset'
import type { AppProps } from 'next/app'

import { client } from '@/apollo/client'
import { ChakraWrapper } from '@/chakra/ChakraWrapper'

const base = css`
  body {
    font-family: 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ Pro W3', 'メイリオ', Meiryo,
      'ＭＳ Ｐゴシック', Arial, Verdana, sans-serif !important;
  }
`

const App = (props: AppProps) => {
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
