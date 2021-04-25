import { useMediaQuery } from '@chakra-ui/react'

// 引数が無い場合画面幅が481px以上ならtrueを返す
export const useIsDesktop = (media = '480px'): boolean => {
  const [isPC] = useMediaQuery(`(min-width: ${media})`)
  return isPC
}
