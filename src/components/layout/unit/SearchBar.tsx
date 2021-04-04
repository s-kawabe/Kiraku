/* eslint-disable react/no-children-prop */
import { Search2Icon } from '@chakra-ui/icons'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import type { VFC } from 'react'
// export type SearchBarProps = {}

const SearchBar: VFC = () => {
  return (
    <InputGroup w="300px">
      <InputLeftElement pointerEvents="none" children={<Search2Icon color="gray.300" />} />
      <Input type="text" placeholder="投稿やブログ、ユーザをさがす" />
    </InputGroup>
  )
}

export { SearchBar }
