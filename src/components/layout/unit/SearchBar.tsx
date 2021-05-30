/* eslint-disable react/no-children-prop */
import { Search2Icon } from '@chakra-ui/icons'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { css } from '@emotion/react'
import { useRouter } from 'next/router'
import type { VFC } from 'react'
import { useState } from 'react'

const SearchBar: VFC = () => {
  const [word, setWord] = useState('')
  const router = useRouter()

  const handleSearch = () => {
    router.push({
      pathname: '/search',
      query: { word },
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value)
  }

  return (
    <InputGroup w={{ base: '85%', sm: '40vw' }} mx={{ base: 'auto' }}>
      <InputLeftElement
        children={<Search2Icon color="gray.500" />}
        cursor="pointer"
        onClick={handleSearch}
      />
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
        onChange={(e) => {
          handleChange(e)
        }}
      />
    </InputGroup>
  )
}

export { SearchBar }
