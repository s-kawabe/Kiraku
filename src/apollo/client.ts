import type { NormalizedCacheObject } from '@apollo/client'
import { ApolloClient, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import merge from 'deepmerge'
import isEqual from 'lodash.isequal'
import type { AppProps } from 'next/app'
import { useMemo } from 'react'

import { auth } from '@/firebase/firebaseConfig'

import { cache } from './cache'

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__'

let apolloClient: ApolloClient<NormalizedCacheObject>

const httpLink = createHttpLink({ uri: process.env.HASURA_URL })

const authLink = setContext(async (_, { headers }) => {
  let token = ''
  // 匿名ログインでない、かつidTokenが存在すればidTokenを設定
  if (!auth.currentUser?.isAnonymous && auth.currentUser) {
    token = await auth.currentUser.getIdToken()
  }
  return token
    ? {
        headers: {
          ...headers,
          authorization: `Bearer ${token}`,
        },
      }
    : { headers }
})

const adminLink = setContext(async (_, { headers }) => {
  return {
    headers: {
      ...headers,
      'x-hasura-admin-secret': process.env.HASURA_GRAPHQL_ADMIN_SECRET,
    },
  }
})

export const createClient = (isAdmin = false) => {
  const _authLink = isAdmin ? adminLink : authLink
  return new ApolloClient({
    cache,
    link: typeof window === 'undefined' ? httpLink : _authLink.concat(httpLink),
    ssrMode: typeof window === 'undefined',
  })
}

// getStatipPropsなどでqueryを投げたい場合はuseApolloを使わず直接こちらを呼ぶ
export const initializeApollo = (initialState: AppProps['pageProps'] = null) => {
  const _apolloClient = apolloClient ?? createClient()

  if (initialState) {
    const existingCache = _apolloClient.extract()

    const data = merge(initialState, existingCache, {
      arrayMerge: (destinationArray, sourceArray) => {
        return [
          ...sourceArray,
          ...destinationArray.filter((d) => {
            return sourceArray.every((s) => {
              return !isEqual(d, s)
            })
          }),
        ]
      },
    })

    _apolloClient.cache.restore(data)
  }

  // サーバ実行の場合は常にClientを新規作成
  if (typeof window === 'undefined') {
    return _apolloClient
  }

  if (!apolloClient) {
    apolloClient = _apolloClient
  }

  return _apolloClient
}

export const addApolloState = (
  client: ApolloClient<NormalizedCacheObject>,
  pageProps: AppProps['pageProps']
) => {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract()
  }
  return pageProps
}

// _app.tsxで使用。clientをメモ化しておく
export const useApollo = (pageProps: AppProps['pageProps']) => {
  const state = pageProps[APOLLO_STATE_PROP_NAME]
  const store = useMemo(() => {
    return initializeApollo(state)
  }, [state])
  return store
}
