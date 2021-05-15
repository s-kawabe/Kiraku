import { Box, Center, Heading, HStack } from '@chakra-ui/react'
import Link from 'next/link'
import type { VFC } from 'react'

import { useIsDesktop } from '@/utils/methods/customeHooks'

type Props = {
  now: 'recommend' | 'feed' | 'post' | 'blog'
}

const TabNavigation: VFC<Props> = (props: Props) => {
  const isPC = useIsDesktop('550px')
  return (
    <Center bg="orange.50" borderRadius="100px" mt="20px" pt="3px" mx={['0px', '10px', '20px']}>
      <Box py={['10px', '20px']} px={['10px', '40px']} flexDir="column">
        <HStack spacing="7" color="gray.600" mb="10px">
          <Link href="/">
            <a>
              <Heading
                fontSize={isPC ? '20px' : '15px'}
                color={props.now === 'recommend' ? '#8C5A30' : ''}
                borderBottom={props.now === 'recommend' ? '2px' : ''}
              >
                おすすめ
              </Heading>
            </a>
          </Link>
          <Link href="/feed">
            <a>
              <Heading
                fontSize={isPC ? '20px' : '15px'}
                color={props.now === 'feed' ? '#8C5A30' : ''}
                borderBottom={props.now === 'feed' ? '2px' : ''}
              >
                タイムライン
              </Heading>
            </a>
          </Link>
          <Link href="/posts">
            <a>
              <Heading
                fontSize={isPC ? '20px' : '15px'}
                color={props.now === 'post' ? '#8C5A30' : ''}
                borderBottom={props.now === 'post' ? '2px' : ''}
              >
                ポスト
              </Heading>
            </a>
          </Link>
          <Link href="/blogs">
            <a>
              <Heading
                fontSize={isPC ? '20px' : '15px'}
                color={props.now === 'blog' ? '#8C5A30' : ''}
                borderBottom={props.now === 'blog' ? '2px' : ''}
              >
                ブログ
              </Heading>
            </a>
          </Link>
        </HStack>
      </Box>
    </Center>
  )
}

export { TabNavigation }
