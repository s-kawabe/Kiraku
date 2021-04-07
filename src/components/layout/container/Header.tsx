import { Flex } from '@chakra-ui/react'
import { Menu, MenuButton } from '@chakra-ui/react'
import type { VFC } from 'react'

// import type { ContextMenuProps } from '@/components/common/container'
import { ContextMenu } from '@/components/common/container'
import { NormalButton } from '@/components/common/unit'
import { Nortification } from '@/components/layout/unit'
import { UserIcon } from '@/components/user/unit'
import { nortificationMenuItems, postMenuItems, userMenuItems } from '@/utils/constants/MenuItems'

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
            <MenuButton transition="all 0.1s">
              <Nortification isNortification />
            </MenuButton>
            <ContextMenu items={nortificationMenuItems()} />
          </Menu>
          {/* User Icon */}
          <Menu>
            <MenuButton transition="all 0.1s">
              <UserIcon src="/myicon.jpg" width={60} height={60} />
            </MenuButton>
            <ContextMenu items={userMenuItems()} />
          </Menu>
          {/* Post Button */}
          <Menu>
            <MenuButton transition="all 0.1s">
              <NormalButton text="投稿" bg="green.300" color="white" hover={{ bg: 'green.200' }} />
            </MenuButton>
            <ContextMenu items={postMenuItems()} />
          </Menu>
        </Flex>
      ) : (
        <Flex w={400} justifyContent="space-between"></Flex>
      )}
    </>
  )
}

export { Header }
