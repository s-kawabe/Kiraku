import { gql } from '@apollo/client'
import { Center, VStack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import { IconHeading } from '@/components/common/unit'
import { LayoutWithHead } from '@/components/layout/container'

const SearchPage: NextPage = () => {
  const router = useRouter()
  const { word } = router.query

  return (
    <LayoutWithHead title={`「${word}」の検索結果`} sideMenu>
      <Center pt="10px" my="40px">
        <VStack spacing="10">
          <IconHeading
            type="search"
            text={`${word as string}の検索結果`}
            color="gray.500"
            size="lg"
          />
        </VStack>
      </Center>
    </LayoutWithHead>
  )
}

export default SearchPage

gql`
  query GetSearchResult($word: String!) {
    users(where: { name: { _ilike: $word } }) {
      id
      display_id
      name
      profile
      gender
      image
      created_at
    }
    posts(where: { content: { _ilike: $word } }) {
      id
      user_id
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
    blogs(where: { title: { _like: $word } }) {
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
