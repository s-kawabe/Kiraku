import { gql } from '@apollo/client'
import { Box, Center, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Fragment } from 'react'

import { addApolloState, initializeApollo } from '@/apollo/client'
import type {
  GetAllUsersQuery,
  GetAllUsersQueryVariables,
  GetOneUserLikeBlogsQuery,
  GetOneUserLikeBlogsQueryVariables,
  Users,
} from '@/apollo/graphql'
import { GetAllUsersDocument, GetOneUserLikeBlogsDocument } from '@/apollo/graphql'
import { BlogCard } from '@/components/blog/container'
import { NextImage } from '@/components/common/unit'
import { LayoutWithHead } from '@/components/layout/container'
import { Profile, ProfileTab } from '@/components/user/container'
import { convertBlogContentToString, getTopImage } from '@/utils/methods/blog'

type Props = {
  user: GetOneUserLikeBlogsQuery['users']
}

const UserLikeBlogsPage: NextPage<Props> = (props: Props) => {
  const user = props.user[0]
  return (
    <LayoutWithHead title={`${user.name}のいいねしたブログ一覧`} sideMenu>
      <Profile user={user as Users} />
      <ProfileTab default={3} userDisplayId={user.display_id} />
      <Center my="30px" flexDir="column">
        {user.blog_likes.length === 0 ? (
          <>
            <Text my="20px" color="gray.400" fontWeight="bold">
              まだいいねした投稿はありません。
            </Text>
            <Box filter="grayscale(55%)">
              <NextImage src={'/show.svg'} alt={'投稿なし'} width={375} height={350} />
            </Box>
          </>
        ) : (
          <Flex>
            <SimpleGrid columns={[1, 1, 2, 2, 3]} spacingX={8} spacingY={8}>
              {user.blog_likes.map(({ blog }) => {
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
        )}
      </Center>
    </LayoutWithHead>
  )
}

export const getStaticProps: GetStaticProps<Props, { userId: string }> = async ({ params }) => {
  const client = initializeApollo()
  const userId = params?.userId ?? ''
  const { data } = await client.query<GetOneUserLikeBlogsQuery, GetOneUserLikeBlogsQueryVariables>({
    query: GetOneUserLikeBlogsDocument,
    variables: {
      display_id: userId,
    },
  })
  if (data.users.length === 0) {
    return {
      notFound: true,
    }
  }
  return addApolloState(client, { props: { user: data.users }, revalidate: 300 })
}

export const getStaticPaths: GetStaticPaths<{ userId: string }> = async () => {
  const client = initializeApollo()
  const { data } = await client.query<GetAllUsersQuery, GetAllUsersQueryVariables>({
    query: GetAllUsersDocument,
  })

  const paths = data.users.map((user) => {
    return { params: { userId: user.display_id } }
  })

  return {
    paths,
    fallback: 'blocking',
  }
}

// eslint-disable-next-line import/no-default-export
export default UserLikeBlogsPage

gql`
  query GetOneUserLikeBlogs($display_id: String!) {
    users(where: { display_id: { _eq: $display_id } }) {
      id
      display_id
      name
      profile
      gender
      image
      created_at
      blog_likes {
        blog {
          id
          title
          content
          gender
          updated_at
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
    }
  }
`
