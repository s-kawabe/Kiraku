import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'

import { client } from '@/apollo/client'
import { ChakraWrapper } from '@/chakra/ChakraWrapper'

const App = (props: AppProps) => {
  return (
    <ApolloProvider client={client}>
      <ChakraWrapper>
        <props.Component {...props.pageProps} />
      </ChakraWrapper>
    </ApolloProvider>
  )
}

// eslint-disable-next-line import/no-default-export
export default App
