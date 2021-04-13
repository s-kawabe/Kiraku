import { Box, Center, Heading, VStack } from '@chakra-ui/react'
import { css } from '@emotion/react'

import { SignupForm } from '@/components/forms/container'
import { LayoutWithHead } from '@/components/layout/container'
import { useIsDesktop } from '@/utils/methods/customeHooks'

const SignupPage = () => {
  const isPC = useIsDesktop()

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
      <LayoutWithHead>
        <Center bg="#EDEDED" h={['800px', 'calc(100vh - 150px)']}>
          <VStack>
            <Heading color="gray.700" size="md" mb="30px">
              アカウント登録
            </Heading>
            <SignupForm />
          </VStack>
        </Center>
      </LayoutWithHead>
    </Box>
  )
}

// eslint-disable-next-line import/no-default-export
export default SignupPage
