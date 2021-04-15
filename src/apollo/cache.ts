import { InMemoryCache } from '@apollo/client'

// reactiveVarを定義する
// ログイン中のユーザ情報を格納する
// が、これを用意せずに各所でfirebaseのsessionを確認しに行くのは微妙なのか？
// どこかにuseUserカスタムフックを作成する
export const cache: InMemoryCache = new InMemoryCache()
