import { gql } from '@apollo/client'
import { Button, Center, Flex, Icon, SimpleGrid, Text } from '@chakra-ui/react'
import { Fragment, useEffect, useState } from 'react'
import { AiOutlineIdcard } from 'react-icons/ai'

import { addApolloState, initializeApollo } from '@/apollo/client'
import type { GetAllPostQuery, GetAllPostQueryVariables } from '@/apollo/graphql'
import { GetAllPostDocument, useGetAllPostQuery } from '@/apollo/graphql'
import { LayoutWithHead, TabNavigation } from '@/components/layout/container'
import { PostCard } from '@/components/post/container'

const TopPostsPage = () => {
  const [offset, setOffset] = useState(10)
  const [posts, setPosts] = useState<GetAllPostQuery['posts']>([])
  const { data, fetchMore } = useGetAllPostQuery({
    variables: {
      limit: 10,
      offset: 0,
    },
  })

  const handleMoreLoad = async () => {
    setOffset((prev) => {
      return prev + 10
    })
    const addData = await fetchMore({
      variables: {
        limit: 10,
        offset: offset,
      },
    })
    if (addData) {
      setPosts((prev) => {
        return [...prev, ...addData.data.posts]
      })
    }
  }

  useEffect(() => {
    if (data) {
      setPosts(data.posts)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <LayoutWithHead title="ポスト一覧" sideMenu>
      <TabNavigation now="post" />
      <Center py="10px" my="25px">
        <Text fontSize="26px" color="gray.700" fontWeight="semibold">
          <Center>
            <Icon as={AiOutlineIdcard} fontSize="40px" />
          </Center>
          ポスト
        </Text>
      </Center>
      <Center flexDir="column">
        <Flex>
          <SimpleGrid columns={[1, 1, 1, 1, 2]} spacingX={6} spacingY={6}>
            {posts.map((post) => {
              return (
                <Fragment key={post.id}>
                  <PostCard
                    imageSrc={post.image}
                    postId={post.id}
                    text={post.content}
                    userIcon={post.user.image ?? '/nouser.svg'}
                    userName={post.user.name as string}
                    userId={post.user.display_id}
                    commentCount={post.comments_aggregate.aggregate?.count as number}
                    likeCount={post.likes_aggregate.aggregate?.count as number}
                    isSmall={true}
                  />
                </Fragment>
              )
            })}
          </SimpleGrid>
        </Flex>
        <Button mt="40px" onClick={handleMoreLoad}>
          もっと見る
        </Button>
      </Center>
    </LayoutWithHead>
  )
}

// eslint-disable-next-line import/no-default-export
export default TopPostsPage

export const getStaticProps = async () => {
  const client = initializeApollo()
  await client.query<GetAllPostQuery, GetAllPostQueryVariables>({
    query: GetAllPostDocument,
    variables: {
      limit: 10,
      offset: 0,
    },
  })
  return addApolloState(client, { props: {}, revalidate: 300 })
}

// 全ユーザのポスト全件(or一定期間まで)の新着順
gql`
  query GetAllPost($limit: Int!, $offset: Int!) {
    posts(limit: $limit, order_by: { id: asc }, offset: $offset) {
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
