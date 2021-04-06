import { Flex } from '@chakra-ui/react'
import { Menu, MenuButton } from '@chakra-ui/react'
import type { VFC } from 'react'

import { ContextMenu } from '@/components/common/container'
import { UserIcon } from '@/components/user/unit'

export type HeaderProps = {
  isLogin: boolean
}

const Header: VFC<HeaderProps> = (props: HeaderProps) => {
  return (
    <>
      {props.isLogin ? (
        <Flex>
          {/* Nortification Icon */}
          <Menu>
            <MenuButton _hover={{ opacity: '0.8' }}></MenuButton>
            <ContextMenu />
          </Menu>
          {/* User Icon */}
          <Menu>
            <MenuButton _hover={{ opacity: '0.8' }}>
              <UserIcon src="/myicon.jpg" width={60} height={60} />
            </MenuButton>
            <ContextMenu />
          </Menu>
          {/* Post Button */}
        </Flex>
      ) : (
        <Flex w={400} justifyContent="space-between"></Flex>
      )}
    </>
  )
}

export { Header }
