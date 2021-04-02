import { ApolloProvider } from '@apollo/client'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

import { client } from '@/apollo/client'

const App = (props: AppProps) => {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <props.Component {...props.pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  )
}

// eslint-disable-next-line import/no-default-export
export default App
