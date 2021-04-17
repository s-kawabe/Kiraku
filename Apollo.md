# 1. ApolloClient のキャッシュが分からなすぎたのでメモ

Apollo が難しすぎて泣いています。
データフェッチや mutation に関しての基礎理解は掴めてきたものの
キャッシュについての知識が浅いので備忘録として残しておきたいと思います。
更におまけとして、個人開発中のアプリでは version3 からの新機能「ReactiveVariables」
を採用したいと思っているため、これに関しても調べました。

## 1-1. ApolloClient におけるキャッシュ機構とは

ApolloClient は GraphQL のクエリ結果を正規化されたメモリ内のキャッシュに保存できます。
これによってクライアントは、不要なリクエストを送信することなく、
同じ結果である将来のリクエストに対応できます。

## 1-2. InMemoryCache の初期化

`InMemoryCache`オブジェクトを作成し、ApolloClient のコンストラクタに含める。

```ts
import { InMemoryCache, ApolloClient } from '@apollo/client'

const client = new ApolloClient({
  // ...other arguments...
  cache: new InMemoryCache(options),
})
```

### オプションの構成

InMemoryCache の動作をカスタマイズするにはコンストラクター生成時に
オブジェクトを提供する。このオブジェクトは以下をサポートする。

- **addTypename: boolean**
  - true の場合キャッシュは全ての送信クエリに`__typename`フィールドを
    自動で追加する。デフォルトは true
- **resultCaching: boolean**
  -
- **possibleTypes: object**
- **typePolicies: object**
- **dataIdFromObject: function**

##

# 2. おまけ： ReactiveVariables について

ApolloClient3 の新機能である**ReactiveVariables**(以下,リアクティブ変数)は、
ApolloClient キャッシュの外部にローカル状態を格納するためのメカニズム。
そしてこれは上述したキャッシュからは分離されているため、リアクティブ変数には
任意の型と構造のデータを格納できて、GraphQL とは無関係のデータでも
アプリケーションの任意の箇所からやりとりが可能です。

リアクティブ変数を変更すると、その変数に依存する全てのアクティブクエリの更新
及び**useReactiveVar** Hooks から返された返却値に関連づけられたデータの
更新がトリガーされます。
