import { MenuDivider, MenuItem, MenuList } from '@chakra-ui/react'
import type { VFC } from 'react'

const ContextMenu: VFC = () => {
  return (
    <MenuList>
      <MenuItem>New File</MenuItem>
      <MenuDivider />
      <MenuItem>New Window</MenuItem>
      <MenuDivider />
      <MenuItem>Open...</MenuItem>
      <MenuDivider />
      <MenuItem>Save File</MenuItem>
    </MenuList>
  )
}

export { ContextMenu }
