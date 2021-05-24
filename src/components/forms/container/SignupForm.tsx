import { Heading, VStack } from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import type { VFC } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { loginUserVar } from '@/apollo/cache'
import { NormalButton } from '@/components/common/unit'
import { TextForm } from '@/components/forms/unit'
import { auth } from '@/firebase/firebaseConfig'
import type { LoginUser } from '@/utils/constants/User'
import { SIGNUP_API } from '@/utils/constants/User'

type FormType = {
  email: string
  username: string
  password: string
  password_confirm: string
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
const VIOLATION_NAME_COUNT = '名前は16文字以下で入力してください'
const VIOLATION_PASSWORD_COUNT = 'パスワードは6文字以上16文字以下で入力してください'
const VIOLATION_PASSWORD_CONFIRM = '入力したパスワードが一致しません'

const SignupSchema = yup.object().shape({
  email: yup.string().required(REQUIRE_MSG).email(VIOLATION_EMAIL),
  username: yup.string().required(REQUIRE_MSG).max(16, VIOLATION_NAME_COUNT),
  password: yup
    .string()
    .required(REQUIRE_MSG)
    .min(6, VIOLATION_PASSWORD_COUNT)
    .max(16, VIOLATION_PASSWORD_COUNT),
  password_confirm: yup
    .string()
    .required(REQUIRE_MSG)
    .oneOf([yup.ref('password'), null], VIOLATION_PASSWORD_CONFIRM),
})

const SignupForm: VFC = () => {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  })

  const onSubmit = (data: FormType) => {
    auth
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(async (userCredential) => {
        const user = userCredential.user
        if (user) {
          const resdata = await axios.post<SignupReturn>(SIGNUP_API, {
            id: user.uid,
            email: user.email,
            name: data.username,
          })
          // グローバルステートにユーザ情報格納
          console.log('API response:', resdata.data)
          loginUserVar(resdata.data.body.data.insert_users_one)
          router.push('/')
        }
      })
      .catch((error) => {
        // todo トーストにエラー表示
        console.error(error.code, error.message)
        if (error.code === 'auth/email-already-in-use') {
          alert('入力したメールアドレスは既に登録済みです')
        } else {
          alert('エラーが発生しました')
        }
      })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <VStack py="30px" bg="white" w="650px" spacing="8" borderRadius="20px">
        <Link href="/signin">
          <a>
            <Heading color="green.300" size="sm" cursor="pointer">
              すでにアカウントをお持ちの方はこちら
            </Heading>
          </a>
        </Link>
        <TextForm
          label={'メールアドレス'}
          placeholder={'メールアドレスを入力'}
          name="email"
          type="email"
          isRequired={true}
          registers={register('email')}
          errorMessage={errors.email?.message}
        />
        <TextForm
          label={'ユーザ名'}
          placeholder={'ユーザ名を入力'}
          name="username"
          type="text"
          isRequired={true}
          registers={register('username')}
          errorMessage={errors.username?.message}
        />
        <TextForm
          label={'パスワード'}
          placeholder={'パスワードを入力'}
          type="password"
          name="password"
          isRequired={true}
          registers={register('password')}
          errorMessage={errors.password?.message}
        />
        <TextForm
          label={'パスワード（確認用）'}
          placeholder={'上記と同じパスワードを入力'}
          type="password"
          name="password_confirm"
          isRequired={true}
          registers={register('password_confirm')}
          errorMessage={errors.password_confirm?.message}
        />

        <NormalButton
          type="submit"
          width="200px"
          text="登録"
          bg="green.300"
          color="white"
          hover={{ bg: 'green.400' }}
        />
      </VStack>
    </form>
  )
}

export { SignupForm }
