import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/react'
import type { FC } from 'react'

type Props = {
  children: React.ReactNode
  isOpen: boolean
  onClose: () => void
}

const SidebarDrawer: FC<Props> = (props: Props) => {
  return (
    <Box>
      <Drawer placement="left" isOpen={props.isOpen} onClose={props.onClose} size="xs">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Recomend</DrawerHeader>

            <DrawerBody bg="gray.50">{props.children}</DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={props.onClose}>
                Cancel
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  )
}

export { SidebarDrawer }
