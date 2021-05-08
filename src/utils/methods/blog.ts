import { loginUserVar } from '@/apollo/cache'
// import { initializeApollo } from '@/apollo/client'
import { storage } from '@/firebase/firebaseConfig'
import { compressFile, getRandom16DigitsName } from '@/utils/methods/post'

export const uploadBlogImage = async (file: File) => {
  const loginUser = loginUserVar()
  const compressedFile = await compressFile(file)
  const blob = new Blob([compressedFile], { type: file.type })

  const fileName = getRandom16DigitsName()
  const uploadRef = storage.ref(`images/blog/${loginUser?.id}`).child(fileName)

  const imageUrl: string = await new Promise((resolve, _) => {
    uploadRef
      .put(blob)
      .then((snap) => {
        snap.ref.getDownloadURL().then((downloadURL: string) => {
          resolve(downloadURL as string)
        })
      })
      .catch((error) => {
        alert('画像のアップロードに失敗しました')
        console.log(error)
      })
  })
  return imageUrl
}

// export const insertBlogToHasura = async () => {}
