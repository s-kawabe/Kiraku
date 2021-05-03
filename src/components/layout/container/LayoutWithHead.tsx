import { useReactiveVar } from '@apollo/client'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Box, Center, Flex, IconButton, Spinner, useDisclosure } from '@chakra-ui/react'
import Head from 'next/head'
import type { FC } from 'react'
import { useEffect, useState } from 'react'

import { sideMenuVar } from '@/apollo/cache'
import { loginUserVar } from '@/apollo/cache'
import { useTop10TopicAndBrandQuery } from '@/apollo/graphql'
import { Footer, Header } from '@/components/layout/container'
import { AsideContextList, SidebarDrawer } from '@/components/layout/container'
import type { SideMenu } from '@/utils/constants/Common'
import { useIsDesktop } from '@/utils/methods/customeHooks'

type Props = {
  children: React.ReactNode
  title?: string
  sideMenu?: boolean
}

const LayoutWithHead: FC<Props> = (props: Props) => {
  const [sideMenuContext, setSideMenuContext] = useState<SideMenu>(null)
  const isLargerThan1280 = useIsDesktop('1280px')
  const loginUser = useReactiveVar(loginUserVar)

  const { isOpen, onOpen, onClose } = useDisclosure()
  const { data, loading, error } = useTop10TopicAndBrandQuery()

  useEffect(() => {
    setSideMenuContext(sideMenuVar())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sideMenuVar()])

  if (error) {
    console.log(error)
  }
  if (data) {
    sideMenuVar(data)
  }

  const pageTitle = props.title ? `${props.title} | Kiraku` : 'Kiraku | "着"楽にファッション。'
  const ogUrl = 'https://kiraku.app'
  const description =
    'ファッション共有SNS「Kiraku」では、お気に入りのファッションアイテムやコーディネートを誰でも気楽に投稿できます。もっと楽しみたい方は、ファッションに関するブログも書くことができます。'

  if (loading) {
    return (
      <Center mt="30px" h="100vh" w="100vw">
        <Spinner />
      </Center>
    )
  }

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="robots" content="follow, index" />
        <meta name="description" content={description} />
        <meta property="og:url" content={ogUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Kiraku" />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:image" content={`${ogUrl}/og.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@shin_k_2281" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${ogUrl}/og.png`} />
      </Head>

      <Header user={loginUser} />
      {sideMenuContext &&
        (props.sideMenu ? (
          <Flex position="relative">
            {isLargerThan1280 ? (
              <Box>
                <AsideContextList topics={sideMenuContext.topics} brands={sideMenuContext.brands} />
              </Box>
            ) : (
              // ボタンを置いて、押したらサイドバー が出るやつ
              <>
                <IconButton
                  aria-label="Aside Open"
                  icon={<HamburgerIcon />}
                  onClick={onOpen}
                  position="fixed"
                  borderRadius="50%"
                  w="45px"
                  h="45px"
                  zIndex="2"
                  bottom="60px"
                  right="60px"
                  boxShadow="1px 1px 6px rgba(30,30,30,0.3)"
                />
                <SidebarDrawer isOpen={isOpen} onClose={onClose}>
                  <AsideContextList
                    topics={sideMenuContext.topics}
                    brands={sideMenuContext.brands}
                  />
                </SidebarDrawer>
              </>
            )}
            <Box w="100%">{props.children}</Box>
          </Flex>
        ) : (
          props.children
        ))}
      <Footer />
    </>
  )
}

export { LayoutWithHead }
