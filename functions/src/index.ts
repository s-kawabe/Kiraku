import { ApolloClient, createHttpLink, gql, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import * as admin from 'firebase-admin'
import * as functions from 'firebase-functions'
import fetch from 'node-fetch'

admin.initializeApp(functions.config().firebase)

const createUserMutation = gql`
  mutation InsertUsers($id: String, $display_id: String, $email: String, $name: String, $image: String) {
    insert_users(objects: { id: $id, display_id: $display_id, name: $name, email: $email, image: $image }) {
      returning {
        id
        display_id
        email
        name
        image
        created_at
      }
    }
  }
`

const httpLink = createHttpLink({ uri: functions.config().hasura.url, fetch: fetch as any })
const authLink = setContext(async (_, { headers }) => {
  return {
    headers: {
      ...headers,
      'x-hasura-admin-secret': functions.config().hasura.admin_secret,
    },
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

// firebaseのユーザ作成時のイベントハンドラ
export const processSignUp = functions.auth.user().onCreate((user) => {
  try {
    // displayIDはuserIDの先頭○桁とする
    const display_id = user.uid.substring(0, 8)
    const image = user.photoURL
    client.mutate({
      variables: {
        id: user.uid,
        display_id: display_id,
        email: user.email,
        name: user.displayName || 'guest',
        image
      },
      mutation: createUserMutation,
    })

    admin.firestore().collection('user_meta').doc(user.uid).create({
      refreshTime: admin.firestore.FieldValue.serverTimestamp(),
    })
  } catch (error) {
    console.error(error)
  }
})