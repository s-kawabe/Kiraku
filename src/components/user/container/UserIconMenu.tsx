import { MenuDivider, MenuItem, MenuList } from '@chakra-ui/react'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import type { VFC } from 'react'

import { DarkmodeToggle } from '@/components/layout/unit'
import { auth } from '@/firebase/firebaseConfig'
import type { LoginUser } from '@/utils/constants/User'

type UserIconMenuProps = {
  user: LoginUser
}

const UserIconMenu: VFC<UserIconMenuProps> = (props: UserIconMenuProps) => {
  const router = useRouter()

  const handleLogout = async () => {
    await auth.signOut()
    router.push('/about')
  }

  return (
    <MenuList borderRadius="18px" boxShadow="1px 1px 8px rgba(50,50,50,0.15)" zIndex="5">
      <MenuItem
        borderRadius="4px"
        my="5px"
        onClick={() => {
          router.push(`/${props.user?.display_id}`)
        }}
      >
        <Box>
          <Flex align="center">
            <Heading size="sm">{props.user?.name ?? 'guest'}</Heading>
            <Text ml="2" color="gray.400" fontSize="12px">
              @{props.user?.display_id}
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
          router.push(`/${props.user?.display_id}`)
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
          router.push(`/${props.user?.display_id}/likes/posts`)
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
          router.push(`/account/profile`)
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
      <MenuItem borderRadius="4px" my="5px">
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
