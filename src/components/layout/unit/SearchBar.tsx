/* eslint-disable react/no-children-prop */
import { Search2Icon } from '@chakra-ui/icons'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { css } from '@emotion/react'
import type { VFC } from 'react'

import { useIsDesktop } from '@/utils/methods/customeHooks'

const SearchBar: VFC = () => {
  const isDesktop = useIsDesktop()
  return (
    <InputGroup w={{ base: '200px', sm: '400px' }} size={isDesktop ? 'md' : 'sm'}>
      <InputLeftElement pointerEvents="none" children={<Search2Icon color="gray.500" />} />
      <Input
        type="text"
        variant="filled"
        borderRadius="25px"
        placeholder="キーワードで検索"
        fontSize={{ base: '12px', sm: '14px' }}
        css={css`
          box-shadow: 1px 1px 5px 0px rgba(50, 50, 50, 0.25) inset;
          background: #cbd5e0;
          &::placeholder {
            color: #718096;
          }
          &:focus {
            background: #cbd5e0;
          }
        `}
      />
    </InputGroup>
  )
}

export { SearchBar }
