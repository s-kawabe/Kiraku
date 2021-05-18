import { gql } from '@apollo/client'
import { Box, Center, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Fragment } from 'react'

import { addApolloState, initializeApollo } from '@/apollo/client'
import type {
  GetAllUsersQuery,
  GetAllUsersQueryVariables,
  GetOneUserAllPostQuery,
  GetOneUserAllPostQueryVariables,
  Users,
} from '@/apollo/graphql'
import { GetAllUsersDocument, GetOneUserAllPostDocument } from '@/apollo/graphql'
import { NextImage } from '@/components/common/unit'
import { LayoutWithHead } from '@/components/layout/container'
import { PostCard } from '@/components/post/container'
import { Profile, ProfileTab } from '@/components/user/container'

type Props = {
  user: GetOneUserAllPostQuery['users']
}

const UserPostListPage: NextPage<Props> = (props: Props) => {
  const user = props.user[0]

  return (
    <LayoutWithHead title={`${user.name}のマイページ`} sideMenu>
      <Profile user={user as Users} />
      <ProfileTab default={0} userDisplayId={user.display_id} />
      <Center m="30px" flexDir="column">
        {user.posts.length === 0 ? (
          <>
            <Text my="20px" color="gray.400" fontWeight="bold">
              まだ投稿はありません。
            </Text>
            <Box filter="grayscale(55%)">
              <NextImage src={'/show.svg'} alt={'投稿なし'} width={375} height={350} />
            </Box>
          </>
        ) : (
          <Flex>
            <SimpleGrid columns={[1, 1, 1, 1, 2]} spacingX={6} spacingY={6}>
              {user.posts.map((post) => {
                return (
                  <Fragment key={post.id}>
                    <PostCard
                      imageSrc={post.image}
                      postId={post.id}
                      text={post.content}
                      userIcon={user.image ?? '/nouser.svg'}
                      userName={user.name as string}
                      userId={user.display_id}
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
  const { data } = await client.query<GetOneUserAllPostQuery, GetOneUserAllPostQueryVariables>({
    query: GetOneUserAllPostDocument,
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
export default UserPostListPage

gql`
  query GetOneUserAllPost($display_id: String!) {
    users(where: { display_id: { _eq: $display_id } }) {
      id
      display_id
      name
      profile
      gender
      image
      created_at
      posts {
        id
        content
        image
        gender
        updated_at
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
`

gql`
  query GetAllUsers {
    users {
      id
      display_id
    }
  }
`
