import { useReactiveVar } from '@apollo/client'
import { Box, Input, Stack, Text, Textarea, VStack } from '@chakra-ui/react'
// import { useRouter } from 'next/router'
import type { VFC } from 'react'
import { useState } from 'react'

import { loginUserVar } from '@/apollo/cache'
import { GenderRadioButton } from '@/components/common/unit'
import { UserIcon } from '@/components/user/unit'
import type { Gender } from '@/utils/constants/Common'

const ProfileCangeForm: VFC = () => {
  // const [name, setName] = useState('')
  // const [profile, setProfile] = useState('')
  const [gender, setGender] = useState<Gender>('ALL')
  const loginUser = useReactiveVar(loginUserVar)
  // const router = useRouter()

  // ログインしていない場合ルートにリダイレクト
  // useEffect(() => {
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  return (
    <Box py="20px" px="8px" bg="white" w="min(700px, 95vw)" borderRadius="20px">
      <Text
        fontWeight="bold"
        px="3"
        pb="3"
        color="gray.500"
        borderBottom="1px"
        borderColor="gray.400"
        fontSize="15px"
      >
        プロフィール
      </Text>
      <Stack alignItems="flex-start" spacing="10" direction={['column', 'column', 'row']} p="40px">
        <VStack _hover={{ opacity: 0.8 }}>
          <UserIcon src={loginUser?.image} width={85} height={85} />
          <Text fontSize="13px" color="blue.400">
            変更
          </Text>
        </VStack>
        <VStack spacing="10" w="100%" alignItems="flex-start">
          <Input
            // value={''}
            placeholder="ユーザ名"
            borderColor="gray.400"
            borderRadius="10px"
            color="gray.700"
            _placeholder={{
              fontSize: '14px',
              color: 'gray.400',
            }}
            bg="gray.100"
          />
          <Textarea
            // value={''}
            h="200px"
            placeholder="プロフィール"
            borderColor="gray.400"
            borderRadius="10px"
            color="gray.700"
            _placeholder={{
              fontSize: '14px',
              color: 'gray.400',
            }}
            bg="gray.100"
          />
          <Box>
            <GenderRadioButton default={gender} setGender={setGender} />
          </Box>
        </VStack>
      </Stack>
    </Box>
  )
}

export { ProfileCangeForm }

// user情報を変更するmutation
// gql``
