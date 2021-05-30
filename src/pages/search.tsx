import { gql } from '@apollo/client'
import type { NextPage } from 'next'

const SearchPage: NextPage = () => {
  return <div>this is search result page</div>
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
