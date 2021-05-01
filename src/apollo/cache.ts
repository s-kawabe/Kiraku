import type { ReactiveVar } from '@apollo/client'
import { InMemoryCache, makeVar } from '@apollo/client'

import type { LoginUser } from '@/utils/constants/User'

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        loginUser: {
          read() {
            return loginUserVar()
          },
        },
        isShowPostModal: {
          read() {
            return isShowPostModalVar()
          },
        },
      },
    },
  },
})

export const loginUserVar: ReactiveVar<LoginUser> = makeVar<LoginUser>(null)
export const isShowPostModalVar: ReactiveVar<boolean> = makeVar<boolean>(false)
