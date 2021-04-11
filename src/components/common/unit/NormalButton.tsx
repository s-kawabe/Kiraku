import { Button } from '@chakra-ui/react'
import type { VFC } from 'react'

export type NormalButtonProps = {
  text: string
  bg: string
  color: string
  mr?: string
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
  // eslint-disable-next-line react/destructuring-assignment
  const { text, hover, ...inputProps } = props

  return (
    <Button size="md" _hover={hover} {...inputProps}>
      {text}
    </Button>
  )
}

export { NormalButton }
