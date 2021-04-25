import { Box, Center, Heading, VStack } from '@chakra-ui/react'
import { css } from '@emotion/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { loginUserVar } from '@/apollo/cache'
import { LoginForm } from '@/components/forms/container'
import { LayoutWithHead } from '@/components/layout/container'
import { useIsDesktop } from '@/utils/methods/customeHooks'

const SigninPage = () => {
  // ログイン状態で来た場合はルートにリダイレクト
  const router = useRouter()
  const isPC = useIsDesktop()

  const isClient = () => {
    return typeof window !== 'undefined'
  }

  useEffect(() => {
    if (loginUserVar() !== null) {
      router.replace('/')
    }
  })

  return (
    <Box
      minH={{ base: '100vh', sm: '' }}
      position={isClient() && isPC ? 'relative' : 'initial'}
      css={css`
        .fixed__hooter {
          ${isClient() &&
          isPC &&
          `
            position: absolute; 
            bottom: 0;
          `}
        }
      `}
    >
      <LayoutWithHead title="ログイン">
        <Center h={['800px', 'calc(100vh - 150px)']} bg="#EDEDED">
          <VStack>
            <Heading color="gray.700" size="md" mb="30px">
              ログイン
            </Heading>
            <LoginForm />
          </VStack>
        </Center>
      </LayoutWithHead>
    </Box>
  )
}

// eslint-disable-next-line import/no-default-export
export default SigninPage
