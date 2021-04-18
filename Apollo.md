# ApolloClient の InMemoryCache 及び ReactiveVariables について

Apollo が難しすぎて泣いています。
データフェッチや mutation に関しての基礎理解は掴めてきたものの
キャッシュ機構の`InMemoryCache`と v3 から追加された
グローバルステート管理用の`ReactiveVariables`について理解が浅いため
ドキュメントや GitHub を調べつつメモしておきます。
駆け出し故に拙い点があれば申し訳ありません。

# 1. InMemoryCache

## 1-1. ApolloClient におけるキャッシュ機構とは

ApolloClient は GraphQL のクエリ結果を正規化されたメモリ内のキャッシュに保存できます。
これによってクライアントは、不要なリクエストを送信することなく、
同じ結果である将来のリクエストに対応できます。
そしてキャッシュ済みのリクエストの場合、とても素早くアプリに応答を返します。

## 1-2. InMemoryCache の初期化

`InMemoryCache`オブジェクトを作成し、ApolloClient のコンストラクタに含める。

```ts
import { InMemoryCache, ApolloClient } from '@apollo/client'

const client = new ApolloClient({
  // ...other arguments...
  cache: new InMemoryCache(options),
})
```

## オプションの構成

InMemoryCache の動作をカスタマイズするにはコンストラクター生成時に
オブジェクトを提供する。このオブジェクトは以下をサポートします。
[参考](https://www.apollographql.com/docs/react/caching/cache-configuration/#configuration-options)

- **addTypename: boolean**
  - true の場合キャッシュは全ての送信クエリに`__typename`フィールドを
    自動で追加する。デフォルトは true
- **resultCaching: boolean**
  - true の場合、元になるデータと完全に同一(===)である場合
    キャッシュは同じクエリの実行ごとに同一のオブジェクトを返す。デフォルトは true
- **possibleTypes: object**
  - スキーマの型ごとの関係性を定義できる。
    `__typename: [__typenameに属するフィールド配列]`の形で指定。
- **typePolicies: object**
  - これを指定することによりスキーマの型ごとに
    キャッシュの動作をカスタマイズできる。
- **dataIdFromObject: function**
  - 非推奨。オブジェクトを受け取ってストア内のデータを正規化する際に使用される。
    typePolicies 内 keyFields を使用する手法を優先する方が良い。

## typePolicies の構成

よく指定する事になる`typePolicies`オプションのオブジェクトについて。
InMemoryCache はデータを内部ストアに保存する前に以下の手順でデータの正規化を行う。

1. キャッシュはレスポンスに含まれる全ての識別可能なオブジェクトに対して一意の ID を作成
2. キャッシュはオブジェクトを ID 別にテーブルに格納
3. 新しいオブジェクトが、既にキャッシュ済みのオブジェクトと同じ ID で格納される場合は
   常にそれらのフィールドがマージされる。
   (新しいオブジェクトと既存のオブジェクトでフィールドが競合している場合は、新しいオブジェクトが
   既存のフィールドを上書きする。)

デフォルトで InMemoryCache のキャッシュ保存は、保存するオブジェクトの
`id`または`_id`というフィールドを主キーと認識する。
これ以外を主キーとしたい場合に`typePolicies`の指定が必要になる。
[参考](https://www.apollographql.com/docs/react/caching/cache-configuration/#customizing-identifier-generation-by-type)

(例)

```ts
const cache = new InMemoryCache({
  typePolicies: {
    Product: {
      keyFields: ['upc'],
    },
    Person: {
      keyFields: ['name', 'email'],
    },
    Book: {
      keyFields: ['title', 'author', ['name']],
    },
  },
})
```

typePolicies の直下のキーはスキーマ上の`__typename`と同等。
keyFields 内のフィールド指定は、そのスキーマが一意に決まる要素を指定している。

## Query のフェッチポリシーについて

クエリを投げる際、Apollo はクライアントのキャッシュを調べ、
要求した全てのデータが既にローカルにキャッシュ済みかチェックします。
全てのデータがローカルから使用可能な場合 Apollo は GraphQL サーバに対してクエリを実行しません。
このキャッシュの適用ポリシーには次のルールを指定可能です。
[参考](https://www.apollographql.com/docs/react/data/queries/#supported-fetch-policies)

- cache-first(初期値)
- cache-only
- cache-and-network
- network-only
- no-cache
- standby

これらは ApolloClient のインスタンス生成時に指定、
若しくは useQuery のクエリ単位で引数に指定することも可能です。

```ts
import { ApolloClient, InMemoryCache } from '@apollo/client'

const cache = new InMemoryCache()

const client = new ApolloClient({
  /* other config... */
  cache: cache,
  uri: '****',
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
})
```

or

```ts
const { loading, error, data } = useQuery(GET_DOGS, {
  fetchPolicy: 'network-only',
})
```

# 2. ReactiveVariables

## 2-1. ReactiveVariables とは何か

ApolloClient3 の新機能である**ReactiveVariables**(以下,リアクティブ変数)は、
ApolloClient キャッシュの外部にローカル状態を格納するためのメカニズム。
そしてこれは上述したキャッシュからは分離されているため、リアクティブ変数には
任意の型と構造のデータを格納できて、GraphQL とは無関係のデータでも
アプリケーションの任意の箇所からやりとりが可能です。

リアクティブ変数を変更すると、その変数に依存する全てのアクティブクエリの更新
及び**useReactiveVar** Hooks から返された返却値に関連づけられたデータの
更新がトリガーされます。

## 2-2. InMemoryCache 引数への記述例

ログイン中のユーザをグローバルステートに管理したいユースケースを想定。
今回は firebase 上の User 情報を格納していますが
後で Hasura 上の User テーブル情報に変更する予定。

```tsx
import { InMemoryCache, ReactiveVar, makeVar } from '@apollo/client'****
import firebase from '../firebase/firebaseConfig'

type LoginUser = firebase.User

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        loginUser: {
          read() {
            return loginUserVar()
          },
        },
      },
    },
  },
})

const loginUserInitialValue: LoginUser = {
  /* 省略 */
}

export const loginUserVar: ReactiveVar<LoginUser> = makeVar<LoginUser>(loginUserInitialValue)
```

## 2-3. コンポーネント側でグローバルステートから取得する

直接 loginUserVar を指定して引っ張るやり方と、
useReactiveVar(loginUserVar)のように指定して引っ張るやり方がある。
**前者は再レンダリングが行われ、後者は際レンダリングが行われないらしい**
ユースケースに応じて使い分ける必要あり

[参考](https://www.apollographql.com/docs/react/local-state/managing-state-with-field-policies/#storing-local-state-in-reactive-variables)

# さいごに

筆者が個人開発中のアプリでは、Hasura 上で PostgreSQL を動かして
そこに対して Apollo でデータフェッチを行う感じにしています。
まだデータフェッチ周りのコードをあまり書けていないので、今後試しつつ
`graphql-codegen`を用いた Schema 型生成や、これらを使ってみてどうだったかなども
記事にできればなと思っています。
