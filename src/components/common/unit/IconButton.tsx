import { Button, Text } from '@chakra-ui/react'
import { css } from '@emotion/react'
import type { VFC } from 'react'
import type { IconType } from 'react-icons'
import { FaTwitter } from 'react-icons/fa'

export type IconButtonProps = {
  text: string
  bg: string
  color: string
  border: string
  borderColor?: string
  icon: IconType
  iconPosition: 'left' | 'right'
  fontWeight?: string
  onClick?: () => void
}

const IconButton: VFC<IconButtonProps> = (props: IconButtonProps) => {
  const iconColor = css`
    ${props.icon === FaTwitter ? `color: #55ACEE;` : ``}
  `

  return (
    <Button
      bg={props.bg}
      color={props.color}
      border={props.border}
      borderColor={props.borderColor}
      variant="outline"
      fontSize={{ base: '12px', sm: '13px' }}
      w={{ base: '180px', sm: '250px' }}
      borderRadius="5px"
      fontWeight={props.fontWeight}
      _hover={{ opacity: 0.8 }}
      onClick={props.onClick}
    >
      {props.iconPosition === 'left' ? (
        <>
          <Text fontSize="lg" mr="3" css={iconColor}>
            <props.icon />
          </Text>
          {props.text}
        </>
      ) : (
        <>
          {props.text}
          <Text fontSize="lg" ml="3">
            <props.icon />
          </Text>
        </>
      )}
    </Button>
  )
}

export { IconButton }
