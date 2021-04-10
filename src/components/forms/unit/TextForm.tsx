import { Badge, FormControl, FormLabel, Input, Text } from '@chakra-ui/react'
import type { VFC } from 'react'

export type TextFormProps = {
  label: string
  placeholder: string
  name: string
  type: string
  isRequired: boolean
  errorMessage?: any
  registers?: any
}

const TextForm: VFC<TextFormProps> = (props: TextFormProps) => {
  // eslint-disable-next-line no-console
  console.log(props.errorMessage)
  return (
    <FormControl id={props.name} w="400px">
      <FormLabel m={1}>
        <Text display="inline" fontSize="13px" fontWeight="bold">
          {props.label}
        </Text>{' '}
        {props.isRequired && (
          <Badge bg="red.400" color="white" py="3px" px="5px" borderRadius="7px">
            必須
          </Badge>
        )}
      </FormLabel>

      <Input
        type={props.type}
        placeholder={props.placeholder}
        borderColor="gray.500"
        borderRadius="10px"
        color="gray.700"
        _placeholder={{
          fontSize: '14px',
        }}
        {...props.registers}
      />
      <Text color="red.500" fontSize="14px">
        {props.errorMessage}
      </Text>
    </FormControl>
  )
}

export { TextForm }
