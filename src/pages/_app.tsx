import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

const App = (props: AppProps) => {
  return (
    <ChakraProvider>
      <props.Component {...props.pageProps} />
    </ChakraProvider>
  )
}

// eslint-disable-next-line import/no-default-export
export default App
