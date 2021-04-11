import { Button } from '@chakra-ui/react'
import type { VFC } from 'react'

import { useIsDesktop } from '@/utils/methods/customeHooks'

export type NormalButtonProps = {
  text: string
  bg: string
  color: string
  variant?: string
  borderColor?: string
  borderRadius?: string
  width?: string
  hover?: {
    bg?: string
    color?: string
  }
  type?: 'button' | 'submit' | 'reset'
}

const NormalButton: VFC<NormalButtonProps> = (props: NormalButtonProps) => {
  const isDesktop = useIsDesktop()

  return (
    <Button
      width={props.width}
      bg={props.bg}
      color={props.color}
      variant={props.variant}
      borderColor={props.borderColor}
      size={isDesktop ? 'md' : 'sm'}
      _hover={props.hover}
      type={props.type}
    >
      {props.text}
    </Button>
  )
}

export { NormalButton }
