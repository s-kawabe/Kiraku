import { ApolloClient, createHttpLink, gql, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import * as admin from 'firebase-admin'
import * as functions from 'firebase-functions'
import fetch from 'node-fetch'
const cors = require('cors')

admin.initializeApp(functions.config().firebase)

const createUserMutation = gql`
  mutation createUser($id: String!, $display_id: String!, $email: String!, $name: String!, $image: String) {
    insert_users_one(object: {id: $id, display_id: $display_id, name: $name, email: $email, image: $image}) {
      id
      display_id
      email
      name
      image
      created_at
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
// イベントハンドラをやめて普通のHTTPSリクエストにする。
// 1回のmutationで全て実現可能にする
// export const processSignUp = functions.auth.user().onCreate(async (user) => {
//   try {
//     // displayIDはuserIDの先頭8桁とする
//     const display_id = user.uid.substring(0, 8)
//     const image = user.photoURL
//     client.mutate({
//       variables: {
//         id: user.uid,
//         display_id: display_id,
//         email: user.email,
//         name: user.displayName || 'guest',
//         image
//       },
//       mutation: createUserMutation,
//     })

//     admin.firestore().collection('user_meta').doc(user.uid).create({
//       refreshTime: admin.firestore.FieldValue.serverTimestamp(),
//     })
//   } catch (error) {
//     console.error(error)
//   }
// })

// EmailでのSignup、Google/Twitterでの初回ログイン時 Hasuraのusersに追加
export const accountSignup = functions.https.onRequest(async (req,res) => {
  try {
    const corsHandler = cors({ origin: true })

    corsHandler(req,res, async () => {
      const { id, email, name, image } = req.body
  
      const display_id = id.substring(0, 8)
      const result = await client.mutate({
        variables: {
          id: id,
          display_id: display_id,
          email: email,
          name: name || 'guest',
          image: image
        },
        mutation: createUserMutation,
      })
  
      admin.firestore().collection('user_meta').doc(id).create({
        refreshTime: admin.firestore.FieldValue.serverTimestamp(),
      })
  
      res.status(200).send({
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: result
      })
    })

  } catch (error) {
    console.error('function errror:', error)
    res.status(405).send('Invarid operation')
  }
})
