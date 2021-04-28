import imageCompression from 'browser-image-compression'

import { loginUserVar } from '@/apollo/cache'
import { initializeApollo } from '@/apollo/client'
import type {
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

// 画像をfirebaseにアップロードする
export const uploadPostImage = async (file: File) => {
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

  const image: string = await new Promise((resolve, _) => {
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
  return {
    image,
    imageId: fileName,
  }
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
const mappingContentToId = async (key: 'topics' | 'brands', contents: string[]) => {
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
