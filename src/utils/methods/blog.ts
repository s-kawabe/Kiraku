import { loginUserVar } from '@/apollo/cache'
import { initializeApollo } from '@/apollo/client'
import type {
  EditBlogOneMutation,
  EditBlogOneMutationVariables,
  InsertBlogOneMutation,
  InsertBlogOneMutationVariables,
  InsertBlogOneWithBrandsMutation,
  InsertBlogOneWithBrandsMutationVariables,
  InsertBlogOneWithTopicsAndBrandsMutation,
  InsertBlogOneWithTopicsAndBrandsMutationVariables,
  InsertBlogOneWithTopicsMutation,
  InsertBlogOneWithTopicsMutationVariables,
} from '@/apollo/graphql'
import {
  EditBlogOneDocument,
  InsertBlogOneDocument,
  InsertBlogOneWithBrandsDocument,
  InsertBlogOneWithTopicsAndBrandsDocument,
  InsertBlogOneWithTopicsDocument,
} from '@/apollo/graphql'
import { storage } from '@/firebase/firebaseConfig'
import type { BlogContentJson } from '@/utils/constants/Blog'
import { compressFile, getRandom16DigitsName, mappingContentToId } from '@/utils/methods/Post'

type FromSubmitedData = {
  id?: number
  title: string
  userInputData: any
  registerTopics: string[]
  registerBrands: string[]
  gender: string
}

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

export const insertBlogToHasura = async ({
  id,
  title,
  userInputData,
  registerTopics,
  registerBrands,
  gender,
}: FromSubmitedData) => {
  const client = initializeApollo()
  const loginUser = loginUserVar()

  if (!loginUser) {
    return
  }

  // topic, brandをどちらも登録する
  if (registerTopics.length !== 0 && registerBrands.length !== 0) {
    const registerTopicsIds = (await mappingContentToId('topics', registerTopics)) as {
      topic_id: number
    }[]
    const registerBrandsIds = (await mappingContentToId('brands', registerBrands)) as {
      brand_id: number
    }[]
    return await client.mutate<
      InsertBlogOneWithTopicsAndBrandsMutation,
      InsertBlogOneWithTopicsAndBrandsMutationVariables
    >({
      mutation: InsertBlogOneWithTopicsAndBrandsDocument,
      variables: {
        title: title,
        user_id: loginUser.id,
        content: userInputData,
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
      InsertBlogOneWithTopicsMutation,
      InsertBlogOneWithTopicsMutationVariables
    >({
      mutation: InsertBlogOneWithTopicsDocument,
      variables: {
        title: title,
        user_id: loginUser.id,
        content: userInputData,
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
      InsertBlogOneWithBrandsMutation,
      InsertBlogOneWithBrandsMutationVariables
    >({
      mutation: InsertBlogOneWithBrandsDocument,
      variables: {
        title: title,
        user_id: loginUser.id,
        content: userInputData,
        gender: gender,
        brandsIds: registerBrandsIds,
      },
    })
    // topic,brandをどちらも登録しない ※編集時はこちらに入る
  } else {
    if (id) {
      // 引数のidがあれば編集
      return await client.mutate<EditBlogOneMutation, EditBlogOneMutationVariables>({
        mutation: EditBlogOneDocument,
        variables: {
          id: id,
          title: title,
          user_id: loginUser.id,
          content: userInputData,
          gender: gender,
        },
      })
    } else {
      // なければ新規投稿
      return await client.mutate<InsertBlogOneMutation, InsertBlogOneMutationVariables>({
        mutation: InsertBlogOneDocument,
        variables: {
          title: title,
          user_id: loginUser.id,
          content: userInputData,
          gender: gender,
        },
      })
    }
  }
}

// DBから取得したcontent(JSON)をstringに変換する(画像とスタイル情報は無視する)
export const convertBlogContentToString = (content: BlogContentJson): string => {
  const strings = content.blocks.map((item) => {
    return item.text
  })
  const noEmptyStrings = strings.filter((item) => {
    return item.length !== 0 && item !== 'LCR'
  })
  return noEmptyStrings.join('\n')
}

export const getTopImage = (content: BlogContentJson): string | undefined => {
  const imageUrls = Object.values(content.entityMap)
  if (imageUrls.length === 0) return

  for (const item of imageUrls) {
    if (item.type === 'IMAGE') {
      return item.data.src
    }
  }

  return
}
