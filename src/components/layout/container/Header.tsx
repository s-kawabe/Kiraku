import { Box, Flex, HStack } from '@chakra-ui/react'
import { Menu, MenuButton } from '@chakra-ui/react'
import { css } from '@emotion/react'
import type * as CSS from 'csstype'
import Link from 'next/link'
import type { VFC } from 'react'

// import type { ContextMenuProps } from '@/components/common/container'
import { ContextMenu } from '@/components/common/container'
import { NormalButton } from '@/components/common/unit'
import { NextImage } from '@/components/common/unit'
import { Nortification, SearchBar } from '@/components/layout/unit'
import { UserIcon } from '@/components/user/unit'
import { nortificationMenuItems, postMenuItems, userMenuItems } from '@/utils/constants/MenuItems'
import { useIsDesktop } from '@/utils/methods/customeHooks'

export type HeaderProps = {
  isLogin: boolean
  headerPosition?: CSS.Property.Position
}

const Header: VFC<HeaderProps> = (props: HeaderProps) => {
  const isPC = useIsDesktop()

  const isClient = () => {
    return typeof window !== 'undefined'
  }
  return (
    <Box
      bg="white"
      w="100%"
      h={['120px', '80px']}
      position={props.headerPosition}
      zIndex="2"
      boxShadow="0 0 10px rgba(50,50,50,0.25)"
    >
      <Flex justifyContent="space-between" h={{ base: '70px', sm: '80px' }}>
        <HStack spacing="3" h={{ base: '70px', sm: '80px' }}>
          <Link href="/">
            <a>
              <NextImage src="/logo.svg" alt="アプリケーションロゴ" width={165} height={80} />
            </a>
          </Link>
          {isClient() && isPC && <SearchBar />}
        </HStack>
        <HStack spacing={[2, 4]} alignItems="center">
          {props.isLogin ? (
            <>
              {/* Nortification Icon */}
              <Menu>
                <MenuButton transition="all 0.1s" _hover={{ opacity: 0.9 }}>
                  <Nortification isNortification />
                </MenuButton>
                <ContextMenu items={nortificationMenuItems()} />
              </Menu>
              {/* User Icon */}
              <Menu>
                <MenuButton transition="all 0.1s" _hover={{ opacity: 0.9 }}>
                  <UserIcon src="/myicon.jpg" width={45} height={45} />
                </MenuButton>
                <ContextMenu items={userMenuItems()} />
              </Menu>
              {/* Post Button */}
              <Menu>
                <MenuButton
                  transition="all 0.1s"
                  mr="20px"
                  css={css`
                    &:hover span button {
                      background-color: #48bb78;
                    }
                  `}
                >
                  <NormalButton text="投稿" bg="green.300" color="white" />
                </MenuButton>
                <ContextMenu items={postMenuItems()} />
              </Menu>
            </>
          ) : (
            <>
              <NormalButton
                text={isPC ? '新規会員登録' : '会員登録'}
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
      {isClient() && !isPC && <SearchBar />}
    </Box>
  )
}

export { Header }
