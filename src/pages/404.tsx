import { Box, Center, Heading, Text, VStack } from '@chakra-ui/react'
import { css } from '@emotion/react'
import Link from 'next/link'

import { NormalButton } from '@/components/common/unit'
import { NextImage } from '@/components/common/unit/NextImage'
import { LayoutWithHead } from '@/components/layout/container'
import { useIsDesktop } from '@/utils/methods/customeHooks'

const Page404 = () => {
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
      <LayoutWithHead title="ページが見つかりません">
        <Center h={['550px', 'calc(100vh - 150px)']} bg="#EDEDED">
          <VStack>
            <Heading color="gray.700" size="md" mb="15px">
              このページは見つかりませんでした。
            </Heading>
            <Text color="gray.600" mb="30px" fontSize="13px" maxW="86vw">
              ページが削除されているか、URLが誤っている可能性があります。
            </Text>
            <NextImage src="/Error_404.svg" alt="Not Found 404" width={600} height={322} />
            <br />
            <Link href="/">
              <a>
                <NormalButton
                  text="トップページへ"
                  bg="green.300"
                  color="white"
                  hover={{ bg: 'green.400' }}
                />
              </a>
            </Link>
          </VStack>
        </Center>
      </LayoutWithHead>
    </Box>
  )
}

// eslint-disable-next-line import/no-default-export
export default Page404
