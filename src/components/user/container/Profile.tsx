import { useReactiveVar } from '@apollo/client'
import { Alert, AlertIcon, Box, Button, Center, Stack, Text, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import type { VFC } from 'react'

import { loginUserVar } from '@/apollo/cache'
import type { Users } from '@/apollo/graphql'
import { FollowButton, UserIcon } from '@/components/user/unit'
import { useConvertDayFromHasura } from '@/utils/methods/customeHooks'
import { useIsDesktop } from '@/utils/methods/customeHooks'

type Props = {
  user: Users
}

const Profile: VFC<Props> = (props: Props) => {
  const router = useRouter()
  const loginUser = useReactiveVar(loginUserVar)
  const isPC = useIsDesktop('840px')
  const isMine = loginUser && loginUser.display_id === props.user.display_id
  const createdAt = useConvertDayFromHasura(props.user.created_at)

  // useEffect 編集直後を考慮して自分自身のページならCSRする

  return (
    <Center
      pt={['40px', '60px']}
      px={['20px', '60px', '140px']}
      h="350px"
      bg="white"
      alignItems="flex-start"
    >
      <Stack direction={{ base: 'column-reverse', lg: 'row' }} spacing={['8', '8', '8', '20']}>
        <Stack direction="row" spacing={['4', '4', '8']}>
          <VStack spacing="5">
            <UserIcon
              src={props.user?.image ?? '/nouser.svg'}
              width={isPC ? 120 : 90}
              height={isPC ? 120 : 90}
            />
            {/* TODO */}
            {loginUser && !isMine && (
              <FollowButton fromUserId={loginUser.id} toUserId={props.user.id} />
            )}
          </VStack>
          <Box>
            <Text fontSize={['20px', '20px', '26px']} fontWeight="bold" color="gray.700" mb="2px">
              {props.user.name}
            </Text>
            <Text fontSize={['14px', '14px', '16px']} color="gray.500" mb="16px">
              @{props.user.display_id} &nbsp; {props.user.gender} &nbsp;
              {createdAt}
              に登録
            </Text>
            <Box h="170px">
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
          <Box textAlign="right">
            <Button
              fontSize={['11px', '12px']}
              color="gray.600"
              fontWeight="normal"
              boxShadow="md"
              w="126px"
              onClick={() => {
                router.push('/account/profile')
              }}
            >
              プロフィール編集
            </Button>
          </Box>
        )}
      </Stack>
    </Center>
  )
}

export { Profile }
