import { Radio, RadioGroup, Stack } from '@chakra-ui/react'
import type { VFC } from 'react'

const GenderRadioButton: VFC = () => {
  return (
    <RadioGroup>
      <Stack direction="row" fontWeight="light">
        <Radio value="all" colorScheme="orange">
          ALL
        </Radio>
        <Radio value="men" colorScheme="orange">
          MEN
        </Radio>
        <Radio value="women" colorScheme="orange">
          WOMEN
        </Radio>
      </Stack>
    </RadioGroup>
  )
}

export { GenderRadioButton }
