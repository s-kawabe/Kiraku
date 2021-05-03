import type { SystemProps } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import type { VFC } from 'react'

import { useIsDesktop } from '@/utils/methods/customeHooks'

export type NormalButtonProps = {
  text: string
  bg: string
  color: string
  mr?: string
  variant?: string
  borderColor?: string
  borderRadius?: SystemProps['borderRadius']
  fontWeight?: SystemProps['fontWeight']
  width?: string
  hover?: {
    bg?: string
    color?: string
  }
  type?: 'button' | 'submit' | 'reset'
  isDisabled?: boolean
}

const NormalButton: VFC<NormalButtonProps> = (props: NormalButtonProps) => {
  // eslint-disable-next-line react/destructuring-assignment
  const { text, hover, ...inputProps } = props
  const isPC = useIsDesktop()
  const isClient = () => {
    return typeof window !== 'undefined'
  }

  return (
    <>
      {isClient() && (
        <Button size={isPC ? 'md' : 'sm'} _hover={hover} {...inputProps}>
          {text}
        </Button>
      )}
    </>
  )
}

export { NormalButton }
