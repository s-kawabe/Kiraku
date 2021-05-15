import { Box, Flex, HStack } from '@chakra-ui/react'
import { Menu, MenuButton } from '@chakra-ui/react'
import { css } from '@emotion/react'
import Link from 'next/link'
import type { VFC } from 'react'

import { NormalButton } from '@/components/common/unit'
import { NextImage } from '@/components/common/unit'
import { Nortification, SearchBar } from '@/components/layout/unit'
import { NortificationMenu, PostButtonMenu, UserIconMenu } from '@/components/user/container'
import { UserIcon } from '@/components/user/unit'
import type { LoginUser } from '@/utils/constants/User'
import { useIsDesktop } from '@/utils/methods/customeHooks'

export type HeaderProps = {
  user: LoginUser
}

const Header: VFC<HeaderProps> = (props: HeaderProps) => {
  const isPC = useIsDesktop()

  const isClient = () => {
    return typeof window !== 'undefined'
  }
  return (
    <Box
      bg="gray.50"
      w="100%"
      h={['120px', '80px']}
      zIndex="100"
      boxShadow="0 0 5px rgba(0,0,0,0.2)"
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
          {props.user ? (
            <>
              {/* Nortification Icon */}
              <Menu>
                <MenuButton transition="all 0.1s" _hover={{ opacity: 0.9 }}>
                  <Nortification isNortification />
                </MenuButton>
                <NortificationMenu />
              </Menu>
              {/* User Icon */}
              <Menu>
                <MenuButton transition="all 0.1s" _hover={{ opacity: 0.9 }}>
                  {props.user.image ? (
                    <UserIcon src={props.user.image} width={45} height={45} />
                  ) : (
                    <UserIcon src="/nouser.svg" width={45} height={45} />
                  )}
                </MenuButton>{' '}
                {/* todo userを渡す */}
                <UserIconMenu user={props.user} />
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
                <PostButtonMenu />
              </Menu>
            </>
          ) : (
            <>
              <Link href="/signup">
                <a>
                  <NormalButton
                    text={isPC ? '新規会員登録' : '会員登録'}
                    bg="green.300"
                    color="white"
                    hover={{ bg: 'green.400' }}
                  />
                </a>
              </Link>
              <Link href="/signin">
                <a>
                  <NormalButton
                    text="ログイン"
                    bg="white"
                    color="green.300"
                    variant="outline"
                    borderColor="green.300"
                    hover={{ bg: 'green.300', color: 'white' }}
                    mr="20px"
                  />
                </a>
              </Link>
            </>
          )}
        </HStack>
      </Flex>
      {isClient() && !isPC && <SearchBar />}
    </Box>
  )
}

export { Header }
