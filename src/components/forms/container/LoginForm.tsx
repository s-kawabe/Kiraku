import { Box, Heading, VStack } from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import Link from 'next/link'
import { useRouter } from 'next/router'
import type { VFC } from 'react'
import { useForm } from 'react-hook-form'
import { FaTwitter } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import * as yup from 'yup'

import { IconButton, NormalButton } from '@/components/common/unit'
import { TextForm } from '@/components/forms/unit'
import firebase, { auth } from '@/firebase/firebaseConfig'

type FormType = {
  email: string
  password: string
}

const REQUIRE_MSG = '必須入力項目です'
const VIOLATION_EMAIL = '正しい形式で入力してください'

const LoginSchema = yup.object().shape({
  email: yup.string().required(REQUIRE_MSG).email(VIOLATION_EMAIL),
  password: yup.string().required(REQUIRE_MSG),
})

const LoginForm: VFC = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  })

  const emailLogin = (data: FormType) => {
    auth
      .signInWithEmailAndPassword(data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user
        console.log(user)
        router.push('/')
      })
      .catch((error) => {
        // todo トーストにエラー表示
        console.error(error.code, error.message)
        if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') {
          alert('ユーザ名またはパスワードが違います')
        } else {
          alert('エラーが発生しました。')
        }
      })
  }

  const googleLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    await auth
      .signInWithPopup(provider)
      .then(() => {
        router.push('/')
      })
      .catch((error) => {
        console.log(error.code, error.message)
        alert('エラーが発生しました。')
      })
  }

  const twitterLogin = async () => {
    const provider = new firebase.auth.TwitterAuthProvider()
    await auth
      .signInWithPopup(provider)
      .then(() => {
        router.push('/')
      })
      .catch((error) => {
        console.log(error.code, error.message)
        alert('エラーが発生しました。')
      })
  }

  return (
    <Box py="30px" bg="white" w="650px" borderRadius="20px">
      <VStack spacing="9" mb="30px">
        <Link href="/signup">
          <a>
            <Heading color="green.300" size="sm" cursor="pointer">
              アカウントをお持ちでない方はこちら
            </Heading>
          </a>
        </Link>
        <IconButton
          text="Googleでログイン"
          fontWeight="semibold"
          bg="white"
          border="2px"
          borderColor="gray.700"
          color="gray.700"
          icon={FcGoogle}
          iconPosition="left"
          onClick={googleLogin}
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
          onClick={twitterLogin}
        />
      </VStack>
      <form onSubmit={handleSubmit(emailLogin)} noValidate>
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
