import { gql } from '@apollo/client'
import { Box, Center, Flex, HStack, SimpleGrid, Text } from '@chakra-ui/react'
import { css } from '@emotion/react'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'

import { addApolloState, initializeApollo } from '@/apollo/client'
import type {
  GetAllUsersQuery,
  GetAllUsersQueryVariables,
  GetOneUserFollowersQuery,
  GetOneUserFollowersQueryVariables,
  Users,
} from '@/apollo/graphql'
import { GetAllUsersDocument, GetOneUserFollowersDocument } from '@/apollo/graphql'
import { NextImage } from '@/components/common/unit'
import { LayoutWithHead } from '@/components/layout/container'
import { Profile, ProfileTab } from '@/components/user/container'
import { UserIcon } from '@/components/user/unit'

type Props = {
  user: GetOneUserFollowersQuery['users']
}

const UserFollowesPage: NextPage<Props> = (props: Props) => {
  const user = props.user[0]
  const router = useRouter()
  return (
    <LayoutWithHead title={`${user.name}のフォロワー一覧`} sideMenu>
      <Profile user={user as Users} />
      <ProfileTab default={5} userDisplayId={user.display_id} />
      <Center my="30px" flexDir="column">
        {user.relation_user_to.length === 0 ? (
          <>
            <Text my="20px" color="gray.400" fontWeight="bold">
              まだフォロワーはいません。
            </Text>
            <Box filter="grayscale(55%)">
              <NextImage src={'/show.svg'} alt={'投稿なし'} width={375} height={350} />
            </Box>
          </>
        ) : (
          <Flex>
            <SimpleGrid columns={[1, 1, 1, 2, 2]} spacingX={7} spacingY={7}>
              {user.relation_user_to.map(({ follow: user }) => {
                return (
                  <>
                    <HStack
                      background="gray.100"
                      pr="30px"
                      borderRadius="full"
                      css={css`
                        &:hover img {
                          opacity: 0.8;
                        }
                      `}
                      onClick={() => {
                        router.push({
                          pathname: '/[userId]',
                          query: {
                            userId: user.display_id,
                          },
                        })
                      }}
                    >
                      <UserIcon src={user.image ?? '/nouser.svg'} width={70} height={70} />
                      <Box>
                        <Text fontSize={['12px', '15px']} color="black">
                          {user.name}
                        </Text>
                        <Text fontSize="12px" color="gray.500">
                          @{user.display_id}
                        </Text>
                      </Box>
                    </HStack>
                  </>
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
  const { data } = await client.query<GetOneUserFollowersQuery, GetOneUserFollowersQueryVariables>({
    query: GetOneUserFollowersDocument,
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
export default UserFollowesPage

gql`
  query GetOneUserFollowers($display_id: String!) {
    users(where: { display_id: { _eq: $display_id } }) {
      id
      display_id
      name
      profile
      gender
      image
      created_at
      relation_user_to {
        follow {
          id
          display_id
          name
          image
          created_at
        }
      }
    }
  }
`
