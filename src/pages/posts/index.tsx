import { Center, Heading, HStack, SimpleGrid } from '@chakra-ui/react'
import Link from 'next/link'

import { LayoutWithHead } from '@/components/layout/container'

const TopPostsPage = () => {
  return (
    <LayoutWithHead title="最近のポスト一覧" sideMenu>
      <Center m={['10px', '30px']}>
        <HStack spacing="7" color="gray.600">
          <Link href="/">
            <a>
              <Heading size="md" pb="5px">
                おすすめ
              </Heading>
            </a>
          </Link>
          <Link href="/feed">
            <a>
              <Heading size="md" pb="5px">
                タイムライン
              </Heading>
            </a>
          </Link>
          <Link href="/posts">
            <a>
              <Heading size="md" pb="5px" color="#8C5A30" borderBottom="2px">
                ポスト
              </Heading>
            </a>
          </Link>
          <Link href="/blogs">
            <a>
              <Heading size="md" pb="5px">
                ブログ
              </Heading>
            </a>
          </Link>
        </HStack>
        <SimpleGrid columns={[1, 2]}></SimpleGrid>
      </Center>
    </LayoutWithHead>
  )
}

// eslint-disable-next-line import/no-default-export
export default TopPostsPage
