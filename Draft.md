# Draft.js を使って Next.js/TypeScript のアプリにブログ機能を実装する

Draft.js というライブラリを使ってみます。

> Draft.js とは Facebook 謹製のリッチテキストエディタを作るためのフレームワークで、以下の特徴を持っております。 React ベースで作られている事もあり、リッチテキストエディタを簡単かつ堅牢な仕組みで実装できます。

Twitter でも使われているらしく、そこそこ人気のライブラリだそうです。
現在作成中のアプリはファッションの投稿を共有できる SNS で、
その一部にブログ機能を実装したく、良さそうな記事も転がっていたのでこのライブラリを使ってみようと思いました。

# 準備/おためし

## インストール

```
yarn add draft-js
```

```
yarn add -D @types/draft-js
```

## おためし実装

```tsx
import 'draft-js/dist/Draft.css'

import { Box } from '@chakra-ui/react'
import { Editor, EditorState } from 'draft-js'
import type { VFC } from 'react'
import { useState } from 'react'

const BlogEditor: VFC = () => {
  const [editorState, setEditorState] = useState(() => {
    return EditorState.createEmpty()
  })

  return (
    <Box w="80vw" minH="300px" bg="gray.100" p="30px">
      <Editor editorState={editorState} onChange={setEditorState} />
    </Box>
  )
}

export { BlogEditor }
```

これで超簡単なテキストエリアができました。
コンテンツは１行(1 ブロック?)ごとに異なるキーが割り当てられているっぽく、
そのように管理されているみたいです。

https://gyazo.com/175db37aaef49a95615cef894a7ae07f

## Draft.js のモジュール

- `EditorState`
  エディタの状態を変化させたりする。初期値の挿入など。
- `RichUtils`
  リッチテキスト編集用のユーティリティ関数群
- `Modifier`
  エディタのコンテントに対する編集操作をカプセル化するユーティリティ関数群
- ``
- ``

## 豆知識：HTML の contentEditable 属性

この属性を true に指定した要素の中は文字の追加や削除、
DOM の移動などが自由に行える状態となるそうです。
知りませんでした。すごい。
先ほどの`Editor`コンポーネントを適用した要素に
この属性が true で与えられることによりテキスト編集を行っているそうです。

[参考]
https://www.tam-tam.co.jp/tipsnote/html_css/post8653.html

# 実装

# 注意点

# さいごに
