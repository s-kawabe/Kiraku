import { gql } from '@apollo/client'
import { Button, Center, Flex, Icon, SimpleGrid, Text } from '@chakra-ui/react'
import { Fragment, useEffect, useState } from 'react'
import { HiOutlineNewspaper } from 'react-icons/hi'

import { addApolloState, initializeApollo } from '@/apollo/client'
import type { GetAllBlogQuery, GetAllBlogQueryVariables } from '@/apollo/graphql'
import { GetAllBlogDocument, useGetAllBlogQuery } from '@/apollo/graphql'
import { BlogCard } from '@/components/blog/container'
import { LayoutWithHead, TabNavigation } from '@/components/layout/container'
import { convertBlogContentToString, getTopImage } from '@/utils/methods/blog'

const LIMIT_OFFSET = 12

const TopBlogsPage = () => {
  const [offset, setOffset] = useState(LIMIT_OFFSET)
  const [blogs, setBlogs] = useState<GetAllBlogQuery['blogs']>([])
  const { data, fetchMore } = useGetAllBlogQuery({
    variables: {
      limit: LIMIT_OFFSET,
      offset: 0,
    },
  })

  const handleMoreLoad = async () => {
    setOffset((prev) => {
      return prev + LIMIT_OFFSET
    })
    const addData = await fetchMore({
      variables: {
        limit: LIMIT_OFFSET,
        offset: offset,
      },
    })
    if (addData) {
      setBlogs((prev) => {
        return [...prev, ...addData.data.blogs]
      })
    }
  }

  useEffect(() => {
    if (data) {
      setBlogs(data.blogs)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <LayoutWithHead title="ブログ一覧" sideMenu>
      <TabNavigation now="blog" />
      <Center pt="10px" my="25px">
        <Text fontSize="26px" color="gray.700" fontWeight="semibold">
          <Center>
            <Icon as={HiOutlineNewspaper} fontSize="40px" />
          </Center>
          ブログ
        </Text>
      </Center>
      <Center flexDir="column">
        <Flex>
          <SimpleGrid columns={[1, 1, 2, 2, 3]} spacingX={8} spacingY={8}>
            {blogs.map((blog) => {
              return (
                <Fragment key={blog.id}>
                  <BlogCard
                    title={blog.title}
                    text={convertBlogContentToString(blog.content)}
                    blogId={blog.id}
                    userIcon={blog.user.image ?? '/nouser.svg'}
                    userName={blog.user.name as string}
                    userId={blog.user.display_id}
                    commentCount={blog.comments_aggregate.aggregate?.count as number}
                    likeCount={blog.likes_aggregate.aggregate?.count as number}
                    topImage={getTopImage(blog.content)}
                  />
                </Fragment>
              )
            })}
          </SimpleGrid>
        </Flex>
        <Button my="40px" onClick={handleMoreLoad}>
          もっと見る
        </Button>
      </Center>
    </LayoutWithHead>
  )
}

export default TopBlogsPage

export const getStaticProps = async () => {
  const client = initializeApollo()
  await client.query<GetAllBlogQuery, GetAllBlogQueryVariables>({
    query: GetAllBlogDocument,
    variables: {
      limit: LIMIT_OFFSET,
      offset: 0,
    },
  })
  return addApolloState(client, { props: {}, revalidate: 300 })
}

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
