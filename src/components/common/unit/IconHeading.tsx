import { Search2Icon } from '@chakra-ui/icons'
import { Heading, Icon } from '@chakra-ui/react'
import type { VFC } from 'react'
import { FaTshirt } from 'react-icons/fa'
import { MdLabel } from 'react-icons/md'

export type IconHeadingProps = {
  type: 'brand' | 'topic' | 'search'
  color: string
  text: string
  size?: string
}

const IconHeading: VFC<IconHeadingProps> = (props: IconHeadingProps) => {
  return (
    <Heading display="flex" alignItems="center" color={props.color} size={props.size}>
      {props.type === 'brand' && <Icon as={FaTshirt} mr="1" />}
      {props.type === 'topic' && <Icon as={MdLabel} mr="1" />}
      {props.type === 'search' && <Icon as={Search2Icon} mr="3" />}
      {props.text}
    </Heading>
  )
}

export { IconHeading }
