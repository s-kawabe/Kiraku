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
import { HStack } from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/router'
import type { VFC } from 'react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { loginUserVar } from '@/apollo/cache'
import { initializeApollo } from '@/apollo/client'
import type {
  UpdateUserProfileMutation,
  UpdateUserProfileMutationVariables,
} from '@/apollo/graphql'
import { UpdateUserProfileDocument } from '@/apollo/graphql'
import { ImageTrimmingModal } from '@/components/common/container'
import { GenderRadioButton } from '@/components/common/unit'
import { UserIcon } from '@/components/user/unit'
import type { Gender } from '@/utils/constants/Common'
import { uploadProfileImage } from '@/utils/methods/profile'

type FormType = {
  name: string
  id: string
  profile: string
}

const REQUIRE = '必須入力項目です'
const ALREADY_ID = 'このIDは既に登録されています'
const VIOLATION_NAME_COUNT = '名前は16文字以下で入力してください'
const VIOLATION_PROFILE_COUNT = 'プロフィールは400文字以下で入力してください'

const profileChangeSchema = yup.object().shape({
  name: yup.string().required(REQUIRE).max(16, VIOLATION_NAME_COUNT),
  id: yup.string().required(REQUIRE),
  profile: yup.string().nullable().max(200, VIOLATION_PROFILE_COUNT),
})

const ProfileCangeForm: VFC = () => {
  const [previewImage, setPreviewImage] = useState<string | null>(null)
  const [blobImage, setBlobImage] = useState<Blob | null>(null)
  const [isIdDuplicateError, setIsIdDuplicateError] = useState(false)
  const [gender, setGender] = useState<Gender>('ALL')
  const loginUser = useReactiveVar(loginUserVar)
  const client = initializeApollo()
  const router = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(profileChangeSchema),
  })

  const onSubmit = async (data: FormType) => {
    let url = null
    if (blobImage) {
      url = await uploadProfileImage(blobImage)
    }

    try {
      if (loginUser) {
        console.log({ name: data.name, id: data.id, profile: data.profile, blobImage, gender })
        await client.mutate<UpdateUserProfileMutation, UpdateUserProfileMutationVariables>({
          mutation: UpdateUserProfileDocument,
          variables: {
            id: loginUser.id,
            name: data.name,
            displayId: data.id,
            profile: data.profile,
            gender: gender,
            image: url,
          },
        })
      }
      router.push('/')
    } catch (error) {
      console.log(error)
      setIsIdDuplicateError(true)
    }
  }

  useEffect(() => {
    if (loginUser) {
      setGender((loginUser.gender ?? 'ALL') as Gender)
      setValue('name', loginUser.name)
      setValue('id', loginUser.display_id)
      setValue('profile', loginUser.profile)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginUser])

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
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
            {previewImage ? (
              <Box borderRadius="full" w="85px" h="85px" overflow="hidden">
                <img src={previewImage} alt="プレビュー" />
              </Box>
            ) : (
              <UserIcon src={loginUser?.image} width={85} height={85} />
            )}
            <Text fontSize="13px" color="blue.400">
              変更
            </Text>
          </VStack>
          {/* 画像をトリミングするためのモーダル */}
          <ImageTrimmingModal
            isOpen={isOpen}
            onClose={onClose}
            setImage={setPreviewImage}
            setBlobImage={setBlobImage}
          />

          <VStack spacing="8" w="100%" alignItems="flex-start">
            <Box w="100%">
              <HStack alignItems="center">
                <Text fontSize="14px" color="gray.600" fontWeight="bold" mb="1">
                  ユーザ名
                </Text>
                <Text fontSize="14px" color="red.500">
                  {errors.name?.message}
                </Text>
              </HStack>
              <Input
                placeholder="ユーザ名"
                borderColor="gray.400"
                borderRadius="10px"
                color="gray.700"
                _placeholder={{
                  fontSize: '14px',
                  color: 'gray.400',
                }}
                bg="gray.100"
                {...register('name')}
              />
            </Box>
            <Box w="100%">
              <HStack>
                <Text fontSize="14px" color="gray.600" fontWeight="bold" mb="1">
                  ID
                </Text>
                <Text fontSize="14px" color="red.500">
                  {errors.id?.message} {isIdDuplicateError && ALREADY_ID}
                </Text>
              </HStack>
              <Input
                placeholder="ID"
                borderColor="gray.400"
                borderRadius="10px"
                color="gray.700"
                _placeholder={{
                  fontSize: '14px',
                  color: 'gray.400',
                }}
                bg="gray.100"
                {...register('id')}
                onChange={() => {
                  setIsIdDuplicateError(false)
                }}
              />
            </Box>
            <Box w="100%">
              <HStack>
                <Text fontSize="14px" color="gray.600" fontWeight="bold" mb="1">
                  プロフィール
                </Text>
                <Text fontSize="14px" color="red.500">
                  {errors.profile?.message}
                </Text>
              </HStack>
              <Textarea
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
                {...register('profile')}
              />
            </Box>
            <Box>
              <Text fontSize="14px" color="gray.600" fontWeight="bold" mb="1">
                性別
              </Text>
              <GenderRadioButton default={gender} setGender={setGender} />
            </Box>
            <Flex w="100%" justifyContent="flex-end">
              <Button colorScheme="teal" type="submit">
                更新する
              </Button>
            </Flex>
          </VStack>
        </Stack>
      </Box>
    </form>
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
