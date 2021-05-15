import { Box, Center, Icon, Text } from '@chakra-ui/react'
import { AiOutlineIdcard } from 'react-icons/ai'

import { LayoutWithHead, TabNavigation } from '@/components/layout/container'

const TopPostsPage = () => {
  return (
    <LayoutWithHead title="ポスト一覧" sideMenu>
      <TabNavigation now="post" />
      <Center pt="60px">
        <Box>
          <Text fontSize="26px" color="gray.700" fontWeight="semibold">
            <Center>
              <Icon as={AiOutlineIdcard} fontSize="40px" />
            </Center>
            ポスト
          </Text>
        </Box>
      </Center>
    </LayoutWithHead>
  )
}

// eslint-disable-next-line import/no-default-export
export default TopPostsPage

// 全ユーザのポスト全件(or一定期間まで)の新着順
