import type { NormalizedCacheObject } from '@apollo/client'
import { ApolloClient, createHttpLink, split } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { WebSocketLink } from '@apollo/client/link/ws'
import { getMainDefinition } from '@apollo/client/utilities'
import merge from 'deepmerge'
import isEqual from 'lodash.isequal'
import type { AppProps } from 'next/app'
import { useMemo } from 'react'

import { auth } from '@/firebase/firebaseConfig'

import { cache } from './cache'

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__'

let apolloClient: ApolloClient<NormalizedCacheObject>

const wsLink = process.browser
  ? new WebSocketLink({
      uri: process.env.HASURA_WS_URL as string,
      options: {
        reconnect: true,
      },
    })
  : undefined

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

// Subscriptionsを使う場合はWebSocket, Query/Mutationを使う場合はHTTPで通信を行うように設定
const splitLink = process.browser
  ? split(
      ({ query }) => {
        const definition = getMainDefinition(query)
        return definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
      },
      wsLink as WebSocketLink,
      authLink.concat(httpLink)
    )
  : authLink.concat(httpLink)

export const createClient = () => {
  return new ApolloClient({
    cache,
    link: splitLink,
    ssrMode: typeof window === 'undefined',
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
      },
    },
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
