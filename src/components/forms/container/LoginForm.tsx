import { gql } from '@apollo/client'
import { Box, Heading, VStack } from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import type { VFC } from 'react'
import { useForm } from 'react-hook-form'
import { FaTwitter } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import * as yup from 'yup'

import { loginUserVar } from '@/apollo/cache'
import { initializeApollo } from '@/apollo/client'
import type { ReactiveVarGetUserQuery, ReactiveVarGetUserQueryVariables } from '@/apollo/graphql'
import { ReactiveVarGetUserDocument } from '@/apollo/graphql'
import { IconButton, NormalButton } from '@/components/common/unit'
import { TextForm } from '@/components/forms/unit'
import firebase, { auth } from '@/firebase/firebaseConfig'
import type { LoginUser } from '@/utils/constants/User'
import { SIGNUP_API } from '@/utils/constants/User'

type FormType = {
  email: string
  password: string
}

export type SignupReturn = {
  headers: any
  body: {
    data: {
      insert_users_one: LoginUser
    }
  }
}

const REQUIRE_MSG = '必須入力項目です'
const VIOLATION_EMAIL = '正しい形式で入力してください'

const LoginSchema = yup.object().shape({
  email: yup.string().required(REQUIRE_MSG).email(VIOLATION_EMAIL),
  password: yup.string().required(REQUIRE_MSG),
})

const usersLoginAction = async (credential: firebase.auth.UserCredential) => {
  const client = initializeApollo()
  const user = credential.user
  if (user) {
    // Google/Twitterによる初回ログインの場合はsignup処理
    if (credential.additionalUserInfo?.isNewUser) {
      const resdata = await axios.post<SignupReturn>(SIGNUP_API, {
        id: user.uid,
        email: user.email,
        name: user.displayName,
        image: user.photoURL,
      })
      loginUserVar(resdata.data.body.data.insert_users_one)
    } else {
      const resdata = await client.query<ReactiveVarGetUserQuery, ReactiveVarGetUserQueryVariables>(
        {
          query: ReactiveVarGetUserDocument,
          variables: {
            id: user.uid,
          },
        }
      )
      loginUserVar(resdata.data.users_by_pk)
    }
  }
}

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
      .then(async (userCredential) => {
        await usersLoginAction(userCredential)
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
      .then(async (userCredential) => {
        await usersLoginAction(userCredential)
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
      .then(async (userCredential) => {
        await usersLoginAction(userCredential)
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

gql`
  query ReactiveVarGetUser($id: String!) {
    users_by_pk(id: $id) {
      id
      display_id
      name
      profile
      gender
      email
      image
      created_at
    }
  }
`
