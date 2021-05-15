import { Box, Center, Icon, Text } from '@chakra-ui/react'
import { HiOutlineNewspaper } from 'react-icons/hi'

import { LayoutWithHead, TabNavigation } from '@/components/layout/container'

const TopBlogsPage = () => {
  return (
    <LayoutWithHead title="ブログ一覧" sideMenu>
      <TabNavigation now="blog" />
      <Center pt="60px">
        <Box>
          <Text fontSize="26px" color="gray.700" fontWeight="semibold">
            <Center>
              <Icon as={HiOutlineNewspaper} fontSize="40px" />
            </Center>
            ブログ
          </Text>
        </Box>
      </Center>
    </LayoutWithHead>
  )
}

// eslint-disable-next-line import/no-default-export
export default TopBlogsPage

// 全ユーザのブログ全件(or一定期間まで)の新着順
