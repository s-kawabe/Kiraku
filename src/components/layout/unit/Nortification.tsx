import { Avatar, AvatarBadge, Icon } from '@chakra-ui/react'
import type { VFC } from 'react'
import { FaBell } from 'react-icons/fa'

export type NortificationProps = {
  isNortification: boolean
}

const Nortification: VFC<NortificationProps> = (props: NortificationProps) => {
  return (
    <Avatar m="2" size="sm" background="transparent">
      <Icon as={FaBell} w="35px" h="35px" color="gray.700" />
      {props.isNortification && <AvatarBadge boxSize="1em" bg="blue.400" />}
    </Avatar>
  )
}

export { Nortification }
