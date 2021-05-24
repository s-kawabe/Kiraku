import { gql, useReactiveVar } from '@apollo/client'
import {
  Box,
  Button,
  Flex,
  Input,
  Stack,
  Text,
  Textarea,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
// import { yupResolver } from '@hookform/resolvers/yup'
// import { useRouter } from 'next/router'
import type { VFC } from 'react'
import { useEffect, useState } from 'react'

// import { useForm } from 'react-hook-form'
// import * as yup from 'yup'
import { loginUserVar } from '@/apollo/cache'
import { ImageTrimmingModal } from '@/components/common/container'
import { GenderRadioButton } from '@/components/common/unit'
import { UserIcon } from '@/components/user/unit'
import type { Gender } from '@/utils/constants/Common'

const ProfileCangeForm: VFC = () => {
  const [name, setName] = useState('')
  const [displayId, setDisplayId] = useState('')
  const [profile, setProfile] = useState('')
  const [image, setImage] = useState<string | null>(null)
  const [gender, setGender] = useState<Gender>('ALL')
  const loginUser = useReactiveVar(loginUserVar)
  // const router = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const onSubmit = () => {
    console.log({ name, displayId, profile, image, gender })
  }

  useEffect(() => {
    if (loginUser) {
      setName(loginUser.name as string)
      setDisplayId(loginUser.display_id as string)
      setProfile(loginUser.profile as string)
      setGender((loginUser.gender ?? 'ALL') as Gender)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginUser])

  return (
    <Box py="20px" px="5px" bg="white" w="min(700px, 95vw)" borderRadius="20px">
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
      <Stack
        alignItems="flex-start"
        spacing="10"
        direction={['column', 'column', 'row']}
        p={['20px', '40px']}
      >
        <VStack _hover={{ opacity: 0.8 }} onClick={onOpen}>
          {image ? (
            <Box borderRadius="full" w="85px" h="85px" overflow="hidden">
              <img src={image} alt="プレビュー" />
            </Box>
          ) : (
            <UserIcon src={loginUser?.image} width={85} height={85} />
          )}
          <Text fontSize="13px" color="blue.400">
            変更
          </Text>
        </VStack>
        {/* 画像をトリミングするためのモーダル */}
        <ImageTrimmingModal isOpen={isOpen} onClose={onClose} setImage={setImage} />

        <VStack spacing="8" w="100%" alignItems="flex-start">
          <Box w="100%">
            <Text fontSize="14px" color="gray.600" fontWeight="bold" mb="1">
              ユーザ名
            </Text>
            <Input
              value={name}
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
          </Box>
          <Box w="100%">
            <Text fontSize="14px" color="gray.600" fontWeight="bold" mb="1">
              ID
            </Text>
            <Input
              value={displayId}
              placeholder="ID"
              borderColor="gray.400"
              borderRadius="10px"
              color="gray.700"
              _placeholder={{
                fontSize: '14px',
                color: 'gray.400',
              }}
              bg="gray.100"
            />
          </Box>
          <Box w="100%">
            <Text fontSize="14px" color="gray.600" fontWeight="bold" mb="1">
              プロフィール
            </Text>
            <Textarea
              value={profile}
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
          </Box>
          <Box>
            <Text fontSize="14px" color="gray.600" fontWeight="bold" mb="1">
              性別
            </Text>
            <GenderRadioButton default={gender} setGender={setGender} />
          </Box>
          <Flex w="100%" justifyContent="flex-end">
            <Button colorScheme="teal" onClick={onSubmit}>
              更新する
            </Button>
          </Flex>
        </VStack>
      </Stack>
    </Box>
  )
}

export { ProfileCangeForm }

gql`
  mutation UpdateUserProfile(
    $id: String!
    $name: String!
    $displayId: String!
    $profile: String
    $gender: String!
    $image: String
  ) {
    insert_users_one(
      object: {
        id: $id
        name: $name
        display_id: $displayId
        profile: $profile
        gender: $gender
        image: $image
      }
      on_conflict: {
        constraint: users_pkey
        update_columns: [name, display_id, profile, gender, updated_at, image]
      }
    ) {
      id
      name
      display_id
      profile
      gender
      image
    }
  }
`
