import { gql } from '@apollo/client'
import { Box, Center, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Fragment } from 'react'

import { addApolloState, initializeApollo } from '@/apollo/client'
import type {
  GetAllUsersQuery,
  GetAllUsersQueryVariables,
  GetOneUserLikePostsQuery,
  GetOneUserLikePostsQueryVariables,
  Users,
} from '@/apollo/graphql'
import { GetAllUsersDocument, GetOneUserLikePostsDocument } from '@/apollo/graphql'
import { NextImage } from '@/components/common/unit'
import { LayoutWithHead } from '@/components/layout/container'
import { PostCard } from '@/components/post/container'
import { Profile, ProfileTab } from '@/components/user/container'

type Props = {
  user: GetOneUserLikePostsQuery['users']
}

const UserLikePostsPage: NextPage<Props> = (props: Props) => {
  const user = props.user[0]
  return (
    <LayoutWithHead title={`${user.name}のいいねしたポスト一覧`} sideMenu>
      <Profile user={user as Users} />
      <ProfileTab default={2} userDisplayId={user.display_id} />
      <Center my="30px" flexDir="column">
        {user.post_likes.length === 0 ? (
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
            <SimpleGrid columns={[1, 1, 1, 1, 2]} spacingX={6} spacingY={6}>
              {user.post_likes.map(({ post }) => {
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
        )}
      </Center>
    </LayoutWithHead>
  )
}

export const getStaticProps: GetStaticProps<Props, { userId: string }> = async ({ params }) => {
  const client = initializeApollo()
  const userId = params?.userId ?? ''
  const { data } = await client.query<GetOneUserLikePostsQuery, GetOneUserLikePostsQueryVariables>({
    query: GetOneUserLikePostsDocument,
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
export default UserLikePostsPage

gql`
  query GetOneUserLikePosts($display_id: String!) {
    users(where: { display_id: { _eq: $display_id } }) {
      id
      display_id
      name
      profile
      gender
      image
      created_at
      post_likes {
        post {
          id
          content
          image
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
