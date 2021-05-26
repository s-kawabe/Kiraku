import { gql } from '@apollo/client'
import { useRouter } from 'next/router'

import { LayoutWithHead } from '@/components/layout/container'

const TopicPage = () => {
  const router = useRouter()
  const { topicId } = router.query
  return (
    <LayoutWithHead title="□□ - トピック">
      <>
        <p>this is /topics/topicId/ page:{topicId} </p>
      </>
    </LayoutWithHead>
  )
}

// eslint-disable-next-line import/no-default-export
export default TopicPage

gql`
  query GetAllTopics {
    topics {
      id
      name
    }
  }
`

gql`
  query GetTopicWithPostAndBlog($topicId: Int!, $limit: Int!, $offset: Int!) {
    posts(where: { topics: { topic_id: { _eq: $topicId } } }, limit: $limit, offset: $offset) {
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
    blogs(where: { topics: { topic_id: { _eq: $topicId } } }, limit: $limit, offset: $offset) {
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
