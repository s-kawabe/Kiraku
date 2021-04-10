import type { VFC } from 'react'

export type TextFormProps = {
  label: string
  name: string
}

const TextForm: VFC<TextFormProps> = (props: TextFormProps) => {
  return <div>{props.label}</div>
}

export { TextForm }
