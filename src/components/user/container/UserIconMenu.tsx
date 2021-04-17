import { MenuDivider, MenuItem, MenuList } from '@chakra-ui/react'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import type { VFC } from 'react'

import { DarkmodeToggle } from '@/components/layout/unit'
import { auth } from '@/firebase/firebaseConfig'

// TODO propsにuserIDをもらう
const UserIconMenu: VFC = () => {
  const router = useRouter()

  const handleLogout = async () => {
    await auth.signOut()
    router.push('/about')
  }

  return (
    <MenuList borderRadius="18px">
      <MenuItem
        borderRadius="4px"
        my="5px"
        onClick={() => {
          router.push('/useruseruser')
        }}
      >
        <Box>
          <Flex align="center">
            <Heading size="sm">{auth.currentUser?.displayName ?? 'guest'}</Heading>
            <Text ml="2" color="gray.400" fontSize="12px">
              @aaaa
              {/* Todo 最初の@IDはランダム生成 */}
            </Text>
          </Flex>
          <Text color="gray.800" fontSize="12px" mt="1">
            マイページを表示
          </Text>
        </Box>
      </MenuItem>
      <MenuDivider p={0} m={0} color="gray.300" />
      <MenuItem
        borderRadius="4px"
        my="5px"
        onClick={() => {
          router.push('/useruseruser')
        }}
      >
        <Text color="gray.800" fontSize="13px">
          自分の投稿
        </Text>
      </MenuItem>
      <MenuDivider p={0} m={0} color="gray.300" />
      <MenuItem
        borderRadius="4px"
        my="5px"
        onClick={() => {
          router.push('/useruseruser/likes/posts')
        }}
      >
        <Text color="gray.800" fontSize="13px">
          お気に入りの投稿
        </Text>
      </MenuItem>
      <MenuDivider p={0} m={0} color="gray.300" />
      <MenuItem
        borderRadius="4px"
        my="5px"
        onClick={() => {
          router.push('/useruseruser/account/passedit')
        }}
      >
        <Text color="gray.800" fontSize="13px">
          アカウント設定
        </Text>
      </MenuItem>
      <MenuDivider p={0} m={0} color="gray.300" />
      <MenuItem borderRadius="4px" my="5px" onClick={handleLogout}>
        <Text color="gray.800" fontSize="13px">
          ログアウト
        </Text>
      </MenuItem>
      <MenuDivider p={0} m={0} color="gray.300" />
      <MenuItem
        borderRadius="4px"
        my="5px"
        onClick={() => {
          alert('カラーモード変更！') //TODO
        }}
      >
        <Box>
          <Text color="gray.800" fontSize="13px" mb="1">
            カラーモードを変更
          </Text>
          <DarkmodeToggle />
        </Box>
      </MenuItem>
    </MenuList>
  )
}

export { UserIconMenu }
