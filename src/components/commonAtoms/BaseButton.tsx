import { Button } from '@chakra-ui/react'
import { css } from '@emotion/react'
import type { VFC } from 'react'

export type BaseButtonProps = {
  text: string
  color: 'teal' | 'red' | 'green'
}

const shadow = css`
  box-shadow: 4px 5px 10px 0 rgba(0, 0, 0, 0.3);
`

const BaseButton: VFC<BaseButtonProps> = (props: BaseButtonProps) => {
  return (
    <Button colorScheme={props.color} m={3} css={shadow}>
      {props.text}
    </Button>
  )
}

export { BaseButton }
