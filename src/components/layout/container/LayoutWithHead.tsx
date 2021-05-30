import { useReactiveVar } from '@apollo/client'
import { AddIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Box, Flex, IconButton, Menu, MenuButton, useDisclosure } from '@chakra-ui/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
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
  const router = useRouter()

  const { isOpen, onOpen, onClose } = useDisclosure()

  const pageTitle = props.title ? `${props.title} | Kiraku` : 'Kiraku | "着"楽にファッション。'
  const description =
    'ファッション共有SNS「Kiraku」では、お気に入りのファッションアイテムやコーディネートを誰でも気楽に投稿できます。もっと楽しみたい方は、ファッションに関するブログも書くことができます。'
  const ogUrl = `https://${process.env.VERCEL_URL ?? 'localhost:3000'}`

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link href="/favicon.ico" rel="icon" />
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="robots" content="follow, index" />
        <meta name="description" content={description} />
        <meta property="og:url" content={`${ogUrl}${router.asPath}`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Kiraku" />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:image" content={'${ogUrl}/og.jpg'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@shin_k_2281" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${ogUrl}/og.jpg`} />
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
              {props.hiddenPostButton ?? (
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
