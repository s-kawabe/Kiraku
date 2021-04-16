import { MenuDivider, MenuItem, MenuList } from '@chakra-ui/react'
import { Heading, Icon } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import type { VFC } from 'react'
import { AiOutlineIdcard } from 'react-icons/ai'
import { HiOutlineNewspaper } from 'react-icons/hi'

export type Items = {
  element: JSX.Element
  path: string
}[]

const items: Items = [
  {
    element: (
      <Heading display="flex" alignItems="center" size="sm" fontWeight="semibold">
        <Icon as={AiOutlineIdcard} mr="2" />
        ポスト
      </Heading>
    ),
    path: '/posts/new',
  },
  {
    element: (
      <Heading display="flex" alignItems="center" size="sm">
        <Icon as={HiOutlineNewspaper} mr="2" />
        ブログ
      </Heading>
    ),
    path: '/blogs/new',
  },
]

const PostButtonMenu: VFC = () => {
  const router = useRouter()
  return (
    <MenuList borderRadius="18px">
      {items.map((item, i) => {
        return (
          <div key={i}>
            <MenuItem
              borderRadius="4px"
              my="5px"
              onClick={() => {
                router.push(item.path)
              }}
            >
              {item.element}
            </MenuItem>
            {items.lastIndexOf(item) !== items.length - 1 && (
              <MenuDivider p={0} m={0} color="gray.300" />
            )}
          </div>
        )
      })}
    </MenuList>
  )
}

export { PostButtonMenu }
