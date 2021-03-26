import { Button } from '@chakra-ui/react'
import type { VFC } from 'react'

export type BaseButtonProps = {
  text: string
  color: 'teal' | 'red' | 'green'
}

const BaseButton: VFC<BaseButtonProps> = (props: BaseButtonProps) => {
  return (
    <Button colorScheme={props.color} m={3}>
      {props.text}
    </Button>
  )
}

export { BaseButton }
