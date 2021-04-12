import { useMediaQuery } from '@chakra-ui/react'

export const useIsDesktop = (media = '480px'): boolean => {
  const [isPC] = useMediaQuery(`(min-width: ${media})`)
  return isPC
}
