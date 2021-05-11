import { gql } from '@apollo/client'
import { Center, SimpleGrid } from '@chakra-ui/react'

import { addApolloState, initializeApollo } from '@/apollo/client'
import type { Top10TopicAndBrandQuery, Top10TopicAndBrandQueryVariables } from '@/apollo/graphql'
import { Top10TopicAndBrandDocument } from '@/apollo/graphql'
// import { BlogCard } from '@/components/blog/container/BlogCard'
import { LayoutWithHead } from '@/components/layout/container'
// import { PostCard } from '@/components/post/container'

const Home = () => {
  // レンダリング時、グローバルステートにメッセージキューがあればトーストで表示?
  // todo できればログアウト時aboutにリダイレクトしたいがお試しユーザの挙動が難しい

  return (
    <LayoutWithHead sideMenu>
      <Center maxW="70vw" m={['10px', '30px']}>
        <SimpleGrid columns={[1, 2]} spacingX={3} spacingY={5}></SimpleGrid>
      </Center>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </LayoutWithHead>
  )
}

export const getStaticProps = async () => {
  const client = initializeApollo()
  await client.query<Top10TopicAndBrandQuery, Top10TopicAndBrandQueryVariables>({
    query: Top10TopicAndBrandDocument,
  })
  return addApolloState(client, { props: {}, revalidate: 300 })
}

// eslint-disable-next-line import/no-default-export
export default Home

gql`
  query Top10TopicAndBrand {
    topics(limit: 10, order_by: { post_topics_aggregate: { count: desc } }) {
      name
      id
    }
    brands(limit: 10, order_by: { post_brands_aggregate: { count: desc } }) {
      name
      id
    }
  }
`
