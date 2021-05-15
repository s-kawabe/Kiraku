import { gql } from '@apollo/client'
import { Center, Icon, Text } from '@chakra-ui/react'
import { HiOutlineNewspaper } from 'react-icons/hi'

import { LayoutWithHead, TabNavigation } from '@/components/layout/container'

const TopBlogsPage = () => {
  return (
    <LayoutWithHead title="ブログ一覧" sideMenu>
      <TabNavigation now="blog" />
      <Center pt="10px">
        <Text fontSize="26px" color="gray.700" fontWeight="semibold">
          <Center>
            <Icon as={HiOutlineNewspaper} fontSize="40px" />
          </Center>
          ブログ
        </Text>
      </Center>
    </LayoutWithHead>
  )
}

// eslint-disable-next-line import/no-default-export
export default TopBlogsPage

// 全ユーザのブログ全件(or一定期間まで)の新着順
gql`
  query GetAllBlog($limit: Int!, $offset: Int!) {
    blogs(limit: $limit, order_by: { id: asc }, offset: $offset) {
      id
      title
      content
      gender
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
