import { InMemoryCache } from '@apollo/client'

// reactiveVarを定義する
// ログイン中のユーザ情報を格納する
// が、これを用意せずに各所でfirebaseのsessionを確認しに行くのは微妙なのか？
// どこかにuseUserカスタムフックを作成する
// →useUserは作らない
// ReactiveVarにはもともとそう言う機能があるのでいろいろここに記述する
export const cache: InMemoryCache = new InMemoryCache()
