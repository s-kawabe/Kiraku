import { useMediaQuery } from '@chakra-ui/react'

export const useIsDesktop = (media = '480px'): boolean => {
  const [isDesktop] = useMediaQuery(`(min-width: ${media})`)
  return isDesktop
}
