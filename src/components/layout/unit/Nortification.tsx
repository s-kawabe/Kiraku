import { Avatar, AvatarBadge, Icon } from '@chakra-ui/react'
import type { VFC } from 'react'
import { FaBell } from 'react-icons/fa'

export type NortificationProps = {
  isNortification: boolean
}

const Nortification: VFC<NortificationProps> = (props: NortificationProps) => {
  return (
    <Avatar m="1" size="sm" background="transparent" cursor="pointer">
      <Icon as={FaBell} w="25px" h="25px" color="gray.700" />
      {props.isNortification && <AvatarBadge boxSize="1em" bg="blue.400" />}
    </Avatar>
  )
}

export { Nortification }
