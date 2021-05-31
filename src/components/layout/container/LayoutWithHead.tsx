import { useReactiveVar } from '@apollo/client'
import { AddIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Box, Flex, IconButton, Menu, MenuButton, useDisclosure } from '@chakra-ui/react'
import Head from 'next/head'
import type { FC } from 'react'

import { sideMenuVar } from '@/apollo/cache'
import { loginUserVar } from '@/apollo/cache'
import { Footer, Header } from '@/components/layout/container'
import { AsideContextList, SidebarDrawer } from '@/components/layout/container'
import { PostButtonMenu } from '@/components/user/container'
import { useIsDesktop } from '@/utils/methods/customeHooks'

type Props = {
  children: React.ReactNode
  title?: string
  sideMenu?: boolean
  hiddenPostButton?: boolean
}

const LayoutWithHead: FC<Props> = (props: Props) => {
  const isLargerThan1280 = useIsDesktop('1280px')
  const loginUser = useReactiveVar(loginUserVar)
  const sideMenuContext = useReactiveVar(sideMenuVar)

  const { isOpen, onOpen, onClose } = useDisclosure()

  const pageTitle = props.title ? `${props.title} | Kiraku` : 'Kiraku | "着"楽にファッション。'

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>

      <Header user={loginUser} />
      {props.sideMenu ? (
        <Flex position="relative">
          {isLargerThan1280 ? (
            <Box borderRight="1px" borderColor="gray.100">
              {sideMenuContext && (
                <AsideContextList topics={sideMenuContext.topics} brands={sideMenuContext.brands} />
              )}
            </Box>
          ) : (
            <>
              {!props.hiddenPostButton && loginUser && (
                <Menu>
                  <IconButton
                    as={MenuButton}
                    aria-label="Post Menu Open"
                    icon={<AddIcon />}
                    position="fixed"
                    borderRadius="50%"
                    bg="green.200"
                    w={['45px', '50px']}
                    h={['45px', '50px']}
                    zIndex="2"
                    bottom={['30px', '60px']}
                    right={['90px', '120px']}
                    boxShadow="1px 1px 10px rgba(30,30,30,0.3)"
                  />
                  <PostButtonMenu />
                </Menu>
              )}
              <IconButton
                aria-label="Aside Open"
                icon={<HamburgerIcon />}
                onClick={onOpen}
                position="fixed"
                borderRadius="50%"
                w={['45px', '50px']}
                h={['45px', '50px']}
                zIndex="2"
                bottom={['30px', '60px']}
                right={['30px', '60px']}
                boxShadow="1px 1px 10px rgba(30,30,30,0.3)"
              />
              {sideMenuContext && (
                <SidebarDrawer isOpen={isOpen} onClose={onClose}>
                  <AsideContextList
                    topics={sideMenuContext.topics}
                    brands={sideMenuContext.brands}
                  />
                </SidebarDrawer>
              )}
            </>
          )}
          <Box w="100%">{props.children}</Box>
        </Flex>
      ) : (
        props.children
      )}
      <Footer />
    </>
  )
}

export { LayoutWithHead }
