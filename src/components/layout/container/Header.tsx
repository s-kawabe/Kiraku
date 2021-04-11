import { Flex, HStack } from '@chakra-ui/react'
import { Menu, MenuButton } from '@chakra-ui/react'
import Link from 'next/link'
import type { VFC } from 'react'

// import type { ContextMenuProps } from '@/components/common/container'
import { ContextMenu } from '@/components/common/container'
import { NormalButton } from '@/components/common/unit'
import { NextImage } from '@/components/common/unit/NextImage'
import { Nortification, SearchBar } from '@/components/layout/unit'
import { UserIcon } from '@/components/user/unit'
import { nortificationMenuItems, postMenuItems, userMenuItems } from '@/utils/constants/MenuItems'

export type HeaderProps = {
  isLogin: boolean
}

const Header: VFC<HeaderProps> = (props: HeaderProps) => {
  return (
    <Flex bg="gray.100" h="80px" justifyContent="space-between">
      <HStack spacing="4">
        <Link href="/">
          <a>
            <NextImage src="/logo.svg" alt="アプリケーションロゴ" width={165} height={80} />
          </a>
        </Link>
        <SearchBar />
      </HStack>
      <HStack spacing="4" alignItems="center">
        {props.isLogin ? (
          <>
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
                <UserIcon src="/myicon.jpg" width={45} height={45} />
              </MenuButton>
              <ContextMenu items={userMenuItems()} />
            </Menu>
            {/* Post Button */}
            <Menu>
              <MenuButton transition="all 0.1s" mr="20px">
                <NormalButton text="投稿" bg="green.300" color="white" />
              </MenuButton>
              <ContextMenu items={postMenuItems()} />
            </Menu>
          </>
        ) : (
          <>
            <NormalButton
              text="新規会員登録"
              bg="green.300"
              color="white"
              hover={{ bg: 'green.400' }}
            />
            <NormalButton
              text="ログイン"
              bg="white"
              color="green.300"
              variant="outline"
              borderColor="green.300"
              hover={{ bg: 'green.300', color: 'white' }}
              mr="20px"
            />
          </>
        )}
      </HStack>
    </Flex>
  )
}

export { Header }
