import { Box, Center, Heading, VStack } from '@chakra-ui/react'
import { css } from '@emotion/react'

import { Loading } from '@/components/common/unit'
import { LoginForm } from '@/components/forms/container'
import { LayoutWithHead } from '@/components/layout/container'
import { useIsDesktop, useRequireUnLogin } from '@/utils/methods/customeHooks'

const SigninPage = () => {
  const isPC = useIsDesktop()
  // ログイン中に来た場合はルートにリダイレクトする
  if (useRequireUnLogin()) {
    return <Loading />
  }
  const isClient = () => {
    return typeof window !== 'undefined'
  }

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
