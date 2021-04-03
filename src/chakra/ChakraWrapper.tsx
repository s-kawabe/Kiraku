import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import type { FC, ReactNode } from 'react'

type ChakraProps = {
  children: ReactNode
  addTheme?: { [key: string]: any }
}

const ChakraWrapper: FC<ChakraProps> = (props: ChakraProps) => {
  const theme = extendTheme({ ...props.addTheme })

  return <ChakraProvider theme={theme}>{props.children}</ChakraProvider>
}

export { ChakraWrapper }
