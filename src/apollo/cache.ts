import type { ReactiveVar } from '@apollo/client'
import { InMemoryCache, makeVar } from '@apollo/client'

import type { SideMenu } from '@/utils/constants/Common'
import type { LoginUser } from '@/utils/constants/User'
import { mergeFields } from '@/utils/methods/apollo'

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        // local variables
        loginUser: {
          read() {
            return loginUserVar()
          },
        },
        sideMenu: {
          read() {
            return sideMenuVar()
          },
        },
        isShowPostModal: {
          read() {
            return isShowPostModalVar()
          },
        },
        // API variables
        topics: {
          // keyArgsの指定によりAll取得と10件取得のqueryを区別してキャッシュされる
          // 同じテーブルから複数の条件queryがある場合など？に指定
          keyArgs: ['order_by', 'limit'],
          merge(existing = [], incoming) {
            return mergeFields(existing, incoming)
          },
        },
        brands: {
          keyArgs: ['order_by', 'limit'],
          merge(existing = [], incoming) {
            return mergeFields(existing, incoming)
          },
        },
        // post_likes: {
        //   keyArgs: ['where'],
        //   merge(existing = [], incoming) {
        //     return mergeFields(existing, incoming)
        //   },
        // },
      },
    },
  },
})

export const loginUserVar: ReactiveVar<LoginUser> = makeVar<LoginUser>(null)
export const sideMenuVar: ReactiveVar<SideMenu> = makeVar<SideMenu>(null)
export const isShowPostModalVar: ReactiveVar<boolean> = makeVar<boolean>(false)
