import type { ApolloClient, ReactiveVar } from '@apollo/client'
import type { NormalizedCacheObject } from '@apollo/client'
import { gql, InMemoryCache, makeVar } from '@apollo/client'

import type { ReactiveVarGetUserQuery, ReactiveVarGetUserQueryVariables } from '@/apollo/graphql'
import type { Users } from '@/apollo/graphql'
import { ReactiveVarGetUserDocument } from '@/apollo/graphql'

type LoginUser = Pick<
  Users,
  'id' | 'display_id' | 'name' | 'profile' | 'gender' | 'email' | 'image' | 'created_at'
> | null

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        loginUser: {
          read() {
            return loginUserVar()
          },
        },
      },
    },
  },
})

export const loginUserVar: ReactiveVar<LoginUser> = makeVar<LoginUser>(null)

export const setLoginUserVar = async (client: ApolloClient<NormalizedCacheObject>, uid: string) => {
  const getUser = await client.query<ReactiveVarGetUserQuery, ReactiveVarGetUserQueryVariables>({
    query: ReactiveVarGetUserDocument,
    variables: {
      id: uid,
    },
  })
  loginUserVar(getUser.data.users_by_pk)
}

gql`
  query ReactiveVarGetUser($id: String!) {
    users_by_pk(id: $id) {
      id
      display_id
      name
      profile
      gender
      email
      image
      created_at
    }
  }
`
