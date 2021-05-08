import imageCompression from 'browser-image-compression'

import { loginUserVar } from '@/apollo/cache'
import { initializeApollo } from '@/apollo/client'
import type {
  EditPostOneImageNoUpdateMutation,
  EditPostOneImageNoUpdateMutationVariables,
  EditPostOneMutation,
  EditPostOneMutationVariables,
  InsertBrandsMutation,
  InsertBrandsMutationVariables,
  InsertPostOneMutation,
  InsertPostOneMutationVariables,
  InsertPostOneWithBrandsMutation,
  InsertPostOneWithBrandsMutationVariables,
  InsertPostOneWithTopicsAndBrandsMutation,
  InsertPostOneWithTopicsAndBrandsMutationVariables,
  InsertPostOneWithTopicsMutation,
  InsertPostOneWithTopicsMutationVariables,
  InsertTopicsMutation,
  InsertTopicsMutationVariables,
  MappingBrandsToIdQuery,
  MappingBrandsToIdQueryVariables,
  MappingTopicsToIdQuery,
  MappingTopicsToIdQueryVariables,
} from '@/apollo/graphql'
import {
  EditPostOneDocument,
  EditPostOneImageNoUpdateDocument,
  InsertBrandsDocument,
  InsertPostOneDocument,
  InsertPostOneWithBrandsDocument,
  InsertPostOneWithTopicsAndBrandsDocument,
  InsertPostOneWithTopicsDocument,
  InsertTopicsDocument,
  MappingBrandsToIdDocument,
  MappingTopicsToIdDocument,
} from '@/apollo/graphql'
import { storage } from '@/firebase/firebaseConfig'

type FromSubmitData = {
  id?: number
  content: string
  registerTopics: string[]
  registerBrands: string[]
  gender: string
  image: string | null
  imageId: string | null
}

type CheckExistTopics = {
  key: 'topics' | 'brands'
  formInsert: string[]
  allData: string[]
}

// 画像の圧縮
export const compressFile = async (file: File): Promise<File> => {
  return await imageCompression(file, {
    maxSizeMB: 0.5,
    maxWidthOrHeight: 800,
  })
}

// firebase storageに画像を上げる際のfileNameランダム生成
export const getRandom16DigitsName = () => {
  const S = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  const N = 16
  const fileName = Array.from(crypto.getRandomValues(new Uint32Array(N)))
    .map((n) => {
      return S[n % S.length]
    })
    .join('')

  return fileName
}

// 画像をfirebaseにアップロードする
export const uploadPostImage = async (file: File) => {
  const loginUser = loginUserVar()
  const compressedFile = await compressFile(file)
  const blob = new Blob([compressedFile], { type: file.type })

  const fileName = getRandom16DigitsName()
  const uploadRef = storage.ref(`images/post/${loginUser?.id}`).child(fileName)

  const image: string = await new Promise((resolve, _) => {
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
  return {
    image,
    imageId: fileName,
  }
}

// 投稿が削除された際のその投稿に登録されている画像も削除する
export const deletePostImage = (userId: string, fileName: string) => {
  const imageRef = storage.ref(`images/post/${userId}`).child(fileName)
  imageRef
    .delete()
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    .then(() => {})
    .catch((error) => {
      console.log(error)
    })
}

// 渡されたtopicかbrandsを判定しDBに無い物があれば新しくINSERTする
export const checkExistTable = async ({ key, formInsert, allData }: CheckExistTopics) => {
  const client = initializeApollo()
  // そもそもひとつも登録していない場合は処理無し
  if (formInsert.length === 0) return

  const noRegisterContents = formInsert.filter((item) => {
    return !allData.includes(item)
  })
  // 既存のデータのみだった場合も処理無し
  if (noRegisterContents.length === 0) return

  const variables = noRegisterContents.map((item) => {
    return { name: item }
  })

  key === 'topics'
    ? await client.mutate<InsertTopicsMutation, InsertTopicsMutationVariables>({
        mutation: InsertTopicsDocument,
        variables: {
          newItems: variables,
        },
      })
    : await client.mutate<InsertBrandsMutation, InsertBrandsMutationVariables>({
        mutation: InsertBrandsDocument,
        variables: {
          newItems: variables,
        },
      })
}

// topicsかbrandsの配列を受け取り、hasura上のidにマッピングして返す
export const mappingContentToId = async (key: 'topics' | 'brands', contents: string[]) => {
  const client = initializeApollo()
  if (key === 'topics') {
    const result = await client.query<MappingTopicsToIdQuery, MappingTopicsToIdQueryVariables>({
      query: MappingTopicsToIdDocument,
      variables: {
        topics: contents,
      },
    })
    return result.data.topics.map((item) => {
      return { topic_id: item.topic_id }
    })
  } else {
    const result = await client.query<MappingBrandsToIdQuery, MappingBrandsToIdQueryVariables>({
      query: MappingBrandsToIdDocument,
      variables: {
        brands: contents,
      },
    })
    return result.data.brands.map((item) => {
      return { brand_id: item.brand_id }
    })
  }
}

// 入力データを元にhasuraのpostsテーブルにINSERTする
export const insertPostToHasura = async ({
  id, // idがある場合は編集mutation
  content,
  registerTopics,
  registerBrands,
  gender,
  image,
  imageId,
}: FromSubmitData) => {
  const client = initializeApollo()
  const loginUser = loginUserVar()

  if (!loginUser) {
    return
  }

  // どちらも登録
  if (registerTopics.length !== 0 && registerBrands.length !== 0) {
    const registerTopicsIds = (await mappingContentToId('topics', registerTopics)) as {
      topic_id: number
    }[]
    const registerBrandsIds = (await mappingContentToId('brands', registerBrands)) as {
      brand_id: number
    }[]
    return await client.mutate<
      InsertPostOneWithTopicsAndBrandsMutation,
      InsertPostOneWithTopicsAndBrandsMutationVariables
    >({
      mutation: InsertPostOneWithTopicsAndBrandsDocument,
      variables: {
        user_id: loginUser.id,
        content: content,
        image: image,
        image_id: imageId,
        gender: gender,
        topicsIds: registerTopicsIds,
        brandsIds: registerBrandsIds,
      },
    })
    // topicのみ登録
  } else if (registerTopics.length !== 0 && registerBrands.length === 0) {
    const registerTopicsIds = (await mappingContentToId('topics', registerTopics)) as {
      topic_id: number
    }[]
    return await client.mutate<
      InsertPostOneWithTopicsMutation,
      InsertPostOneWithTopicsMutationVariables
    >({
      mutation: InsertPostOneWithTopicsDocument,
      variables: {
        user_id: loginUser.id,
        content: content,
        image: image,
        image_id: imageId,
        gender: gender,
        topicsIds: registerTopicsIds,
      },
    })
    // brandのみ登録
  } else if (registerTopics.length === 0 && registerBrands.length !== 0) {
    const registerBrandsIds = (await mappingContentToId('brands', registerBrands)) as {
      brand_id: number
    }[]
    return await client.mutate<
      InsertPostOneWithBrandsMutation,
      InsertPostOneWithBrandsMutationVariables
    >({
      mutation: InsertPostOneWithBrandsDocument,
      variables: {
        user_id: loginUser.id,
        content: content,
        image: image,
        image_id: imageId,
        gender: gender,
        brandsIds: registerBrandsIds,
      },
    })
    // topic,brandをどちらも登録しない
  } else {
    if (id) {
      // 投稿編集時
      if (image && imageId) {
        // 画像変更あり
        return await client.mutate<EditPostOneMutation, EditPostOneMutationVariables>({
          mutation: EditPostOneDocument,
          variables: {
            id: id,
            user_id: loginUser.id,
            content: content,
            image: image,
            image_id: imageId,
            gender: gender,
          },
        })
      } else {
        // 画像変更なし
        return await client.mutate<
          EditPostOneImageNoUpdateMutation,
          EditPostOneImageNoUpdateMutationVariables
        >({
          mutation: EditPostOneImageNoUpdateDocument,
          variables: {
            // 投稿編集時
            id: id,
            user_id: loginUser.id,
            content: content,
            gender: gender,
          },
        })
      }
    } else {
      // 新規投稿時
      return await client.mutate<InsertPostOneMutation, InsertPostOneMutationVariables>({
        mutation: InsertPostOneDocument,
        variables: {
          user_id: loginUser.id,
          content: content,
          image: image,
          image_id: imageId,
          gender: gender,
        },
      })
    }
  }
}

// FIXME: タグのコンポーネント内のInputに属性を追加したいが現状直接DOMを触りにいくしか方法がない
export const addTagAttribute = () => {
  const inputElems = document.getElementsByClassName('react-tag-input__input')
  inputElems[0]?.setAttribute('type', 'text')
  inputElems[0]?.setAttribute('list', 'topics-list')
  inputElems[0]?.setAttribute('autocomplete', 'on')
  inputElems[1]?.setAttribute('type', 'text')
  inputElems[1]?.setAttribute('list', 'brands-list')
  inputElems[1]?.setAttribute('autocomplete', 'on')
}
