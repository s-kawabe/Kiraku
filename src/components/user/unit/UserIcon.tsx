import { Circle } from '@chakra-ui/react'
import type { VFC } from 'react'

import { NextImage } from '@/components/common/unit/NextImage'

export type UserIconProps = {
  src: string
  width: number
  height: number
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void
}

const UserIcon: VFC<UserIconProps> = (props: UserIconProps) => {
  return (
    <Circle
      w={props.width + 'px'}
      h={props.height + 'px'}
      overflow="hidden"
      onClick={props.onClick}
      cursor="pointer"
    >
      <NextImage src={props.src} alt="ユーザアイコン" width={props.width} height={props.height} />
    </Circle>
  )
}

export { UserIcon }
