import { Box, Heading, VStack } from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import type { VFC } from 'react'
import { useForm } from 'react-hook-form'
import { FaTwitter } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import * as yup from 'yup'

import { IconButton, NormalButton } from '@/components/common/unit'
import { TextForm } from '@/components/forms/unit'

const REQUIRE_MSG = '必須入力項目です'
const VIOLATION_EMAIL = '正しい形式で入力してください'

const LoginSchema = yup.object().shape({
  email: yup.string().required(REQUIRE_MSG).email(VIOLATION_EMAIL),
  password: yup.string().required(REQUIRE_MSG),
})

const LoginForm: VFC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  })

  const onSubmit = (data: any) => {
    // eslint-disable-next-line no-console
    console.log(data)
  }

  return (
    <Box py="30px" bg="gray.100" w="650px" borderRadius="20px">
      <VStack spacing="9" mb="30px">
        <Heading color="green.300" size="sm" cursor="pointer">
          アカウントをお持ちでない方はこちら
        </Heading>
        <IconButton
          text="Googleでログイン"
          fontWeight="semibold"
          bg="white"
          border="2px"
          borderColor="gray.700"
          color="gray.700"
          icon={FcGoogle}
          iconPosition="left"
        />
        <IconButton
          text="Twitterでログイン"
          fontWeight="semibold"
          bg="white"
          border="2px"
          borderColor="#55ACEE"
          color="gray.700"
          icon={FaTwitter}
          iconPosition="left"
        />
      </VStack>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <VStack spacing="7">
          <TextForm
            label={'メールアドレス'}
            placeholder={'メールアドレスを入力'}
            name="email"
            type="email"
            isRequired={false}
            registers={register('email')}
            errorMessage={errors.email?.message}
          />
          <TextForm
            label={'パスワード'}
            placeholder={'パスワードを入力'}
            type="password"
            name="password"
            isRequired={false}
            registers={register('password')}
            errorMessage={errors.password?.message}
          />
          <NormalButton
            type="submit"
            width="200px"
            text="ログイン"
            bg="white"
            variant="outline"
            color="green.300"
            borderColor="green.300"
            hover={{ bg: 'green.300', color: 'white' }}
          />
        </VStack>
      </form>
    </Box>
  )
}

export { LoginForm }
