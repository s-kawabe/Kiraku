import imageCompression from 'browser-image-compression'

import { loginUserVar } from '@/apollo/cache'
import { storage } from '@/firebase/firebaseConfig'

type FromSubmitData = {
  content: string
  registerTopics: string[]
  registerBrands: string[]
  gender: string
  imageURL: string | null
}

// 画像をfirebaseにアップロードする
export const uploadPostImage = async (file: File): Promise<string> => {
  const loginUser = loginUserVar()
  const compressedFile = await imageCompression(file, {
    maxSizeMB: 0.5,
    maxWidthOrHeight: 800,
  })
  const blob = new Blob([compressedFile], { type: file.type })

  // Generate random 16 digits strings
  const S = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  const N = 16
  const fileName = Array.from(crypto.getRandomValues(new Uint32Array(N)))
    .map((n) => {
      return S[n % S.length]
    })
    .join('')

  const uploadRef = storage.ref(`images/post/${loginUser?.id}`).child(fileName)

  return new Promise((resolve, _) => {
    uploadRef
      .put(blob)
      .then((snap) => {
        snap.ref.getDownloadURL().then((downloadURL: string) => {
          resolve(downloadURL as string)
        })
      })
      .catch((error) => {
        console.log(error)
      })
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

// 入力データを元にhasuraのpostsテーブルにINSERTする
export const insertPostToHasura = ({
  content,
  registerTopics,
  registerBrands,
  gender,
  imageURL,
}: FromSubmitData) => {
  console.log(content, registerTopics, registerBrands, gender, imageURL)
}
