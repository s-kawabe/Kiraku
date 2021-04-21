import { Radio, RadioGroup, Stack, Text } from '@chakra-ui/react'
import type { VFC } from 'react'

const GenderRadioButton: VFC = () => {
  return (
    <RadioGroup name="gender">
      <Stack direction="row" color="gray.500" fontSize="15px">
        <Radio value="ALL" colorScheme="teal" size="lg" color="gray.400">
          <Text fontSize={['14px', '16px']}>ALL</Text>
        </Radio>
        <Radio value="MEN" colorScheme="teal" size="lg" color="gray.400">
          <Text fontSize={['14px', '16px']}>MEN</Text>
        </Radio>
        <Radio value="WOMEN" colorScheme="teal" size="lg" color="gray.400">
          <Text fontSize={['14px', '16px']}>WOMEN</Text>
        </Radio>
      </Stack>
    </RadioGroup>
  )
}

export { GenderRadioButton }
