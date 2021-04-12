import { Stack } from '@chakra-ui/react'

import { BlogCard } from '@/components/blog/container/BlogCard'
import { LayoutWithHead } from '@/components/layout/container'
import { PostCard } from '@/components/post/container'

const Home = () => {
  return (
    <LayoutWithHead>
      <Stack direction={['column', 'row']} spacing={5} mt="30px">
        <PostCard
          imageSrc="/fashion.jpeg"
          text="この前買った腕時計！！ モ モダンな雰囲気でとてもお気に入りですこの前買った腕時計！！ モダンな雰囲気でとてもお気に入りです"
          userIcon="/myicon.jpg"
          userName="shintaro"
          userId="shin_k_2281"
        />
      </Stack>
      <br />
      <br />
      <br />
      <Stack direction={['column', 'row']} spacing={5} mt="30px">
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

// eslint-disable-next-line import/no-default-export
export default Home
