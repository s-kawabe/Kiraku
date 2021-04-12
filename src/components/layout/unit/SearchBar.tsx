/* eslint-disable react/no-children-prop */
import { Search2Icon } from '@chakra-ui/icons'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { css } from '@emotion/react'
import type { VFC } from 'react'

const SearchBar: VFC = () => {
  return (
    <InputGroup w={{ base: '85%', sm: '50vw' }} mx={{ base: 'auto' }}>
      <InputLeftElement children={<Search2Icon color="gray.500" />} cursor="pointer" />
      <Input
        type="text"
        variant="filled"
        borderRadius="25px"
        borderColor="#eee"
        placeholder="ユーザの投稿やブログをさがす"
        fontSize={{ base: '12px', sm: '14px' }}
        css={css`
          background: #fff;
          &::placeholder {
            color: #718096;
          }
          &:focus,
          &:hover {
            background: #fff;
          }
        `}
      />
    </InputGroup>
  )
}

export { SearchBar }
