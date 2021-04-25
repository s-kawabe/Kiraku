import { loginUserVar } from '@/apollo/cache'
import { storage } from '@/firebase/firebaseConfig'

// 画像をfirebaseにアップロードする
export const uploadPostImage = (files: any) => {
  const loginUser = loginUserVar()
  const blob = new Blob(files, { type: 'image/png' })

  // Generate random 16 digits strings
  const S = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  const N = 16
  const fileName = Array.from(crypto.getRandomValues(new Uint32Array(N)))
    .map((n) => {
      return S[n % S.length]
    })
    .join('')

  const uploadRef = storage.ref(`images/post/${loginUser?.id}`).child(fileName)
  const uploadTask = uploadRef.put(blob)

  uploadTask
    .then(() => {
      uploadTask.snapshot.ref.getDownloadURL().then((downloadURL: string) => {
        return downloadURL
      })
    })
    .catch((error) => {
      console.log(error)
    })
}
// brandsとtopicsの配列を受け取り中身があるか判定する
export const checkExistArrayContents = () => {
  console.log('h')
}

// 投稿時topicsのみ1つ以上入力していた場合

// 投稿時brandsのみ1つ以上入力していた場合

// 投稿時topics,brandsともに1つ以上入力していた場合

// topicsの配列の中にDBに未登録の物がないか調査し、あればDBに新しくINSERTする

// brandsの配列の中にDBに未登録の物がないか調査し、あればDBに新しくINSERTする
