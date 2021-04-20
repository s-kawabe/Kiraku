import type { ReactiveVar } from '@apollo/client'
// import type { ApolloClient, ReactiveVar } from '@apollo/client'
// import type { NormalizedCacheObject } from '@apollo/client'
import { InMemoryCache, makeVar } from '@apollo/client'

// import type { ReactiveVarGetUserQuery, ReactiveVarGetUserQueryVariables } from '@/apollo/graphql'
import type { Users } from '@/apollo/graphql'
// import { ReactiveVarGetUserDocument } from '@/apollo/graphql'

export type LoginUser = Pick<
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
