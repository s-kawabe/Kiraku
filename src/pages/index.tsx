// import { useReactiveVar } from '@apollo/client'
import { gql } from '@apollo/client'
import { Box, SimpleGrid, Stack } from '@chakra-ui/react'

import { sideMenuVar } from '@/apollo/cache'
import { addApolloState, initializeApollo } from '@/apollo/client'
import type { Top10TopicAndBrandQuery, Top10TopicAndBrandQueryVariables } from '@/apollo/graphql'
import { Top10TopicAndBrandDocument, useTop10TopicAndBrandQuery } from '@/apollo/graphql'
import { BlogCard } from '@/components/blog/container/BlogCard'
import { LayoutWithHead } from '@/components/layout/container'
import { PostCard } from '@/components/post/container'

const Home = () => {
  // レンダリング時、グローバルステートにメッセージキューがあればトーストで表示?
  const { data, loading, error } = useTop10TopicAndBrandQuery()
  // todo できればログアウト時aboutにリダイレクトしたいがお試しユーザの挙動が難しい

  if (loading) return <div>loading...</div>

  if (error) {
    console.log(error)
  }

  if (data) {
    console.log(data)
    sideMenuVar(data)
  }

  return (
    <LayoutWithHead sideMenu>
      <Box w="60vw" m="30px">
        <SimpleGrid columns={2} spacing={8}>
          <PostCard
            imageSrc="/fashion.jpeg"
            text="この前買った腕時計！！ モ モダンな雰囲気でとてもお気に入りですこの前買った腕時計！！ モダンな雰囲気でとてもお気に入りです"
            userIcon="/myicon.jpg"
            userName="shintaro"
            userId="shin_k_2281"
          />
          <PostCard
            imageSrc="/fashion.jpeg"
            text="この前買った腕時計！！ モ モダンな雰囲気でとてもお気に入りですこの前買った腕時計！！ モダンな雰囲気でとてもお気に入りです"
            userIcon="/myicon.jpg"
            userName="shintaro"
            userId="shin_k_2281"
          />
          <PostCard
            imageSrc="/fashion.jpeg"
            text="この前買った腕時計！！ モ モダンな雰囲気でとてもお気に入りですこの前買った腕時計！！ モダンな雰囲気でとてもお気に入りです"
            userIcon="/myicon.jpg"
            userName="shintaro"
            userId="shin_k_2281"
          />
          <PostCard
            imageSrc="/fashion.jpeg"
            text="この前買った腕時計！！ モ モダンな雰囲気でとてもお気に入りですこの前買った腕時計！！ モダンな雰囲気でとてもお気に入りです"
            userIcon="/myicon.jpg"
            userName="shintaro"
            userId="shin_k_2281"
          />
        </SimpleGrid>
      </Box>
      <br />
      <br />
      <br />
      <Stack direction={['column', 'row']} spacing={5} m="30px">
        <BlogCard
          title="おすすめメンズアイテム5選"
          text={`こんにちは、皆様いかがお過ごしでしょうか
              今回は春に先駆けて周りと差別化できるトレンドのメンズ小物3選をご紹介します
              まず第３位は〜〜〜〜.... まず第３位は〜〜〜〜.... まず第３位は〜〜〜〜....
              まず第３位は〜〜〜〜.... まず第３位は〜〜〜〜.... まず第３位は〜〜〜〜....
              まず第３位は〜〜〜〜.... まず第３位は〜〜〜〜....`}
          userIcon="/myicon.jpg"
          userName="taro"
          userId="kusowarota"
        />
      </Stack>
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
