import { Badge, FormControl, FormLabel, Input, Text } from '@chakra-ui/react'
import type { VFC } from 'react'

export type TextFormProps = {
  label: string
  placeholder: string
  name: string
  type: string
  isRequired: boolean
  errorMessage?: string
  registers?: any
}

const TextForm: VFC<TextFormProps> = (props: TextFormProps) => {
  return (
    <FormControl id={props.name} w="min(400px, 80vw)">
      <FormLabel m={1}>
        <Text display="inline" fontSize="13px" fontWeight="bold">
          {props.label}
        </Text>{' '}
        {props.isRequired && (
          <Badge bg="red.400" color="white" py="3px" px="5px" borderRadius="7px">
            必須
          </Badge>
        )}
        <Text color="red.500" fontSize="14px">
          {props.errorMessage}
        </Text>
      </FormLabel>

      <Input
        autoComplete={props.type}
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
    </FormControl>
  )
}

export { TextForm }
