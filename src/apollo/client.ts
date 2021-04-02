import { ApolloClient, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

import { cache } from './cache'

const HASURA_URL = process.env.HASURA_URL

const httpLink = createHttpLink({ uri: HASURA_URL })

const authLink = setContext(async (_, { headers }) => {
  const token = 'bar' // TODO user token
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : '',
    },
  }
})

// TODO カスタムフック等を使ってログイン後にApolloClientが再生成できるようにしないといけない
export const client = new ApolloClient({
  cache,
  link: authLink.concat(httpLink),
})
