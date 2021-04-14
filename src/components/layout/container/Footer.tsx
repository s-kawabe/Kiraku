import { Box, HStack, Stack, Text } from '@chakra-ui/react'
import { css } from '@emotion/react'
import Link from 'next/link'
import type { VFC } from 'react'

import { NextImage } from '@/components/common/unit'

const FOOTER_LINK = [
  {
    text: 'About',
    link: '/about',
  },
  {
    text: '利用規約',
    link: '/terms',
  },
  {
    text: 'プライバシーポリシー',
    link: '/policy',
  },
]

const THIS_YEAR = new Date().getFullYear()

const Footer: VFC = () => {
  return (
    <Box bg="gray.50" h={['90px', '70px']} w="100%" className="fixed__footer">
      <Stack direction={['column', 'row']} h="70px" justifyContent="space-between">
        <HStack spacing="2" align="center" h="70px" color="gray.600">
          <NextImage src="/footerLogo.svg" alt="アプリケーションロゴ" width={100} height={50} />
          <small lang="en">&copy; {THIS_YEAR} shintaro_k All Rights Reserved.</small>
        </HStack>
        <HStack
          spacing="4"
          align="center"
          mr="30px"
          css={css`
            & a:first-of-type {
              margin-left: 10px;
            }
          `}
        >
          {FOOTER_LINK.map((item) => {
            return (
              <Link href={item.link} key={item.text}>
                <a>
                  <Text fontSize={['12px', '13px']} color="gray.600">
                    {item.text}
                  </Text>
                </a>
              </Link>
            )
          })}
        </HStack>
      </Stack>
    </Box>
  )
}

export { Footer }
