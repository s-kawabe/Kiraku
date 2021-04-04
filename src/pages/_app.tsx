import { ApolloProvider } from '@apollo/client'
import { css, Global } from '@emotion/react'
import reset from 'emotion-reset'
import type { AppProps } from 'next/app'

import { client } from '@/apollo/client'
import { ChakraWrapper } from '@/chakra/ChakraWrapper'

const App = (props: AppProps) => {
  return (
    <>
      <Global
        styles={css`
          ${reset}
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
