import { Heading, Icon } from '@chakra-ui/react'
import type { VFC } from 'react'
import { FaTshirt } from 'react-icons/fa'
import { MdLabel } from 'react-icons/md'

export type IconHeadingProps = {
  type: 'brand' | 'topic'
  color: string
  text: string
  size?: string
}

const IconHeading: VFC<IconHeadingProps> = (props: IconHeadingProps) => {
  return (
    <Heading display="flex" alignItems="center" color={props.color} size={props.size}>
      {props.type === 'brand' ? (
        <>
          <Icon as={FaTshirt} mr="1" />
          {props.text}
        </>
      ) : (
        <>
          <Icon as={MdLabel} mr="1" />
          {props.text}
        </>
      )}
    </Heading>
  )
}

export { IconHeading }
