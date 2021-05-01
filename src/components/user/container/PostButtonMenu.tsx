import { Heading, Icon, MenuDivider, MenuItem, MenuList, useDisclosure } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import type { VFC } from 'react'
import { AiOutlineIdcard } from 'react-icons/ai'
import { HiOutlineNewspaper } from 'react-icons/hi'

import { isShowPostModalVar } from '@/apollo/cache'
import { PostModal } from '@/components/post/container'

const PostButtonMenu: VFC = () => {
  const router = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <MenuList borderRadius="18px" boxShadow="1px 1px 8px rgba(50,50,50,0.15)">
        <MenuItem
          borderRadius="4px"
          my="5px"
          onClick={() => {
            isShowPostModalVar(true)
            onOpen()
          }}
        >
          <Heading display="flex" alignItems="center" size="sm" fontWeight="semibold">
            <Icon as={AiOutlineIdcard} mr="2" />
            ポスト
          </Heading>
        </MenuItem>
        <MenuDivider p={0} m={0} color="gray.300" />
        <MenuItem
          borderRadius="4px"
          my="5px"
          onClick={() => {
            router.push('/blogs/new')
          }}
        >
          <Heading display="flex" alignItems="center" size="sm">
            <Icon as={HiOutlineNewspaper} mr="2" />
            ブログ
          </Heading>
        </MenuItem>
      </MenuList>
      {/* ポスト投稿/編集時のモーダル */}
      <PostModal isOpen={isOpen} onClose={onClose} isNew />
    </>
  )
}

export { PostButtonMenu }
