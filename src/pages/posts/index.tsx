import { gql } from '@apollo/client'
import { Box, Center, Icon, Text } from '@chakra-ui/react'
import { AiOutlineIdcard } from 'react-icons/ai'

import { LayoutWithHead, TabNavigation } from '@/components/layout/container'

const TopPostsPage = () => {
  return (
    <LayoutWithHead title="ポスト一覧" sideMenu>
      <TabNavigation now="post" />
      <Center py="10px">
        <Box py="30px" px="400px" bg="gray.50">
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
gql`
  query GetAllPost($offset: Int!) {
    posts(limit: 3, order_by: { id: asc }, offset: $offset) {
      id
      image
      gender
      content
      created_at
      user {
        id
        display_id
        image
        name
      }
      comments_aggregate {
        aggregate {
          count(columns: id)
        }
      }
      likes_aggregate {
        aggregate {
          count(columns: id)
        }
      }
    }
  }
`
