import { useReactiveVar } from '@apollo/client'
import { Alert, AlertIcon, Box, Button, Center, Stack, Text, VStack } from '@chakra-ui/react'
import type { VFC } from 'react'

import { loginUserVar } from '@/apollo/cache'
import type { Users } from '@/apollo/graphql'
import { UserIcon } from '@/components/user/unit'
import { useConvertDayFromHasura } from '@/utils/methods/customeHooks'

type Props = {
  user: Users
}

const Profile: VFC<Props> = (props: Props) => {
  const loginUser = useReactiveVar(loginUserVar)
  const isMine = loginUser && loginUser.display_id === props.user.display_id
  const createdAt = useConvertDayFromHasura(props.user.created_at)
  return (
    <Center
      pt="60px"
      px="140px"
      h="350px"
      bg="white"
      alignItems="flex-start"
      justifyContent="space-around"
    >
      <Stack direction="row" spacing="8">
        <VStack spacing="5">
          <UserIcon src={props.user?.image ?? '/nouser.svg'} width={120} height={120} />
          {/* TODO */}
          {loginUser && !isMine && (
            <Button colorScheme="blue" variant="outline" size="sm" ml="30px">
              フォロー
            </Button>
          )}
        </VStack>
        <Box>
          <Text fontSize="26px" fontWeight="bold" color="gray.700" mb="2px">
            {props.user.name}
          </Text>
          <Text fontSize="16px" color="gray.500" mb="16px">
            @{props.user.display_id} &nbsp; {props.user.gender} &nbsp;
            {createdAt}
            に登録
          </Text>
          <Box w="520px" h="170px">
            <Text color="gray.700" fontSize="15px">
              {props.user.profile ?? (
                <Alert
                  status="info"
                  fontSize="14px"
                  color="gray.600"
                  bg="#E0F1FB"
                  borderRadius="md"
                >
                  <AlertIcon />
                  まだプロフィールは設定されていません
                </Alert>
              )}
            </Text>
          </Box>
        </Box>
      </Stack>
      {isMine && (
        <Button fontSize="12px" color="gray.600" fontWeight="normal" boxShadow="md">
          プロフィール編集
        </Button>
      )}
    </Center>
  )
}

export { Profile }
