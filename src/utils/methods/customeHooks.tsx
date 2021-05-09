import { useMediaQuery } from '@chakra-ui/react'
import { useEffect, useMemo, useState } from 'react'

import { isShowPostModalVar } from '@/apollo/cache'
import { initializeApollo } from '@/apollo/client'
import type {
  GetAllBrandsQuery,
  GetAllBrandsQueryVariables,
  GetAllTopicsQuery,
  GetAllTopicsQueryVariables,
} from '@/apollo/graphql'
import { GetAllBrandsDocument, GetAllTopicsDocument } from '@/apollo/graphql'

// 引数が無い場合画面幅が481px以上ならtrueを返す
export const useIsDesktop = (media = '480px'): boolean => {
  const [isPC] = useMediaQuery(`(min-width: ${media})`)
  return isPC
}

// hasura上に保存されている日時を整形して返す
export const useConvertDateFromHasura = (date: string): string => {
  return useMemo(() => {
    const yearN = Number(date.substring(0, 4))
    const monthN = Number(date.substring(5, 7))
    const dayN = Number(date.substring(8, 10))
    const hourN = Number(date.substring(11, 13))
    const minuteN = Number(date.substring(14, 16))

    const createdAt = new Date(yearN, monthN, dayN, hourN, minuteN)
    createdAt.setDate(createdAt.getHours() + 7)
    const [year, month, day, hour, minute] = [
      createdAt.getFullYear(),
      createdAt.getMonth(),
      createdAt.getDay(),
      createdAt.getHours(),
      createdAt.getMinutes(),
    ]
    return `${year}年${month}月${day}日 ${hour}時${minute}分`
  }, [date])
}

// brandとtopicのInputに入力候補をサジェストする為にHasuraからbrandとtopicデータを全件取得する
export const useAllTopicsAndBrands = (deps: any[] = []) => {
  const [allTopics, setAllTopics] = useState<string[]>([])
  const [allBrands, setAllBrands] = useState<string[]>([])

  const dependencies = deps.length === 0 ? [] : deps
  const client = initializeApollo()

  useEffect(() => {
    if (isShowPostModalVar() || dependencies.length === 0) {
      ;(async () => {
        const fetchAllTopics = await client.query<GetAllTopicsQuery, GetAllTopicsQueryVariables>({
          query: GetAllTopicsDocument,
        })
        const fetchAllBrands = await client.query<GetAllBrandsQuery, GetAllBrandsQueryVariables>({
          query: GetAllBrandsDocument,
        })

        const allTopicsData = fetchAllTopics.data.topics.map((data) => {
          return data.name
        })
        const allBrandsData = fetchAllBrands.data.brands.map((data) => {
          return data.name
        })

        setAllTopics(allTopicsData)
        setAllBrands(allBrandsData)
      })()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies)

  return [allTopics, allBrands]
}
