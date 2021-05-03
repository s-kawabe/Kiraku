import { useMediaQuery } from '@chakra-ui/react'
import { useMemo } from 'react'

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
