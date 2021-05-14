/* eslint-disable react/jsx-key */
import { Text } from '@chakra-ui/react'
import { MenuDivider, MenuItem, MenuList } from '@chakra-ui/react'
import type { VFC } from 'react'

// import type { LoginUser } from '@/apollo/cache'
// todo: もらったuserのidで通知テーブルから取得する
// type NortificationMenuProps = {
//   user: LoginUser
// }

const items: JSX.Element[] = [
  <Text color="gray.800" fontSize="13px" my="2">
    @neko さんにフォローされました
  </Text>,
  <Text color="gray.800" fontSize="13px" my="2">
    @hogehoge さんにフォローされました
  </Text>,
  <Text color="gray.800" fontSize="13px" my="2">
    @innu さんにフォローされました
  </Text>,
]

const NortificationMenu: VFC = () => {
  return (
    <MenuList borderRadius="18px" boxShadow="1px 1px 8px rgba(50,50,50,0.15)" zIndex="5">
      {items.map((item, i) => {
        return (
          <div key={i}>
            <MenuItem borderRadius="4px" my="5px">
              {item}
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

export { NortificationMenu }
