import { Flex } from '@chakra-ui/react'
import type { VFC } from 'react'

export type HeaderProps = {
  isLogin: boolean
}

const Header: VFC<HeaderProps> = (props: HeaderProps) => {
  return <>{props.isLogin ? <Flex></Flex> : <Flex w={400} justifyContent="space-between"></Flex>}</>
}

export { Header }
