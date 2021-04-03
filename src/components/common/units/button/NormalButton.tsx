import { Button } from '@chakra-ui/react'
import type { VFC } from 'react'

export type NormalButtonProps = {
  text: string
  bg: string
  color: string
  size: 'sm' | 'md'
  hover?: {
    bg?: string
    color?: string
  }
}

const NormalButton: VFC<NormalButtonProps> = (props: NormalButtonProps) => {
  return (
    <Button bg={props.bg} color={props.color} size={props.size} _hover={props.hover}>
      {props.text}
    </Button>
  )
}

export { NormalButton }
