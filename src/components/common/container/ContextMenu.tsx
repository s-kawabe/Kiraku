import { MenuDivider, MenuItem, MenuList } from '@chakra-ui/react'
import type { VFC } from 'react'
// import type { ReactNode } from 'react'

export type ContextMenuProps = {
  items: JSX.Element[]
}

const ContextMenu: VFC<ContextMenuProps> = (props: ContextMenuProps) => {
  return (
    <MenuList borderRadius="18px">
      {props.items.map((item, i) => {
        return (
          <div key={i}>
            <MenuItem borderRadius="4px" my={0}>
              {item}
            </MenuItem>
            {props.items.lastIndexOf(item) !== props.items.length - 1 && (
              <MenuDivider p={0} m={0} />
            )}
          </div>
        )
      })}
    </MenuList>
  )
}

export { ContextMenu }
