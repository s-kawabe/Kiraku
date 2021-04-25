import { Radio, RadioGroup, Stack, Text } from '@chakra-ui/react'
import type { VFC } from 'react'
import type { Dispatch, SetStateAction } from 'react'

import type { Gender } from '@/utils/constants/Common'

type GenderRadioButtonProps = {
  default?: Gender
  setGender?: Dispatch<SetStateAction<Gender>>
}

const GenderRadioButton: VFC<GenderRadioButtonProps> = (props: GenderRadioButtonProps) => {
  return (
    <RadioGroup
      name="gender"
      defaultValue={props.default}
      onChange={(e: Gender) => {
        if (props.setGender) {
          props.setGender(e)
        }
      }}
    >
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
