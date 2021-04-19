// import type { ReactiveVar } from '@apollo/client'
import { gql, InMemoryCache } from '@apollo/client'

// type LoginUser =

export const cache: InMemoryCache = new InMemoryCache()
//   {
//   typePolicies: {
//     Query: {
//       fields: {
//         loginUser: {
//           read() {
//             return loginUserVar()
//           },
//         },
//       },
//     },
//   },
// }

// const loginUserInitialValue: LoginUser = {}

// export const loginUserVar: ReactiveVar<LoginUser> = makeVar<LoginUser>(loginUserInitialValue)

gql`
  query ReactiveVar_GetUser($id: String!) {
    users(where: { id: { _eq: $id } }) {
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
