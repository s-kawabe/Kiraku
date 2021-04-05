import { useMediaQuery } from '@chakra-ui/react'

export const useIsDesktop = (media = '480px'): boolean[] => {
  return useMediaQuery(`(min-width: ${media})`)
}
