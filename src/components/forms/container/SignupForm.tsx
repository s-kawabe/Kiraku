import { VStack } from '@chakra-ui/react'
import { css } from '@emotion/react'
import { yupResolver } from '@hookform/resolvers/yup'
import type { VFC } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { NormalButton } from '@/components/common/unit'
import { TextForm } from '@/components/forms/unit'

const REQUIRE_MSG = '必須入力項目です'
const VIOLATION_EMAIL = '正しい形式で入力してください'
const VIOLATION_NAME_COUNT = '名前は16文字以下で入力してください'
const VIOLATION_PASSWORD_COUNT = 'パスワードは16文字以下で入力してください'
const VIOLATION_PASSWORD_CONFIRM = '入力したパスワードが一致しません'

const SignupSchema = yup.object().shape({
  email: yup.string().required(REQUIRE_MSG).email(VIOLATION_EMAIL),
  username: yup.string().required(REQUIRE_MSG).max(16, VIOLATION_NAME_COUNT),
  password: yup.string().required(REQUIRE_MSG).max(16, VIOLATION_PASSWORD_COUNT),
  password_confirm: yup
    .string()
    .required(REQUIRE_MSG)
    .oneOf([yup.ref('password'), null], VIOLATION_PASSWORD_CONFIRM),
})

const SignupForm: VFC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  })

  const onSubmit = (data: any) => {
    // eslint-disable-next-line no-console
    console.log(data)
  }

  return (
    <form name="SignupForm" onSubmit={handleSubmit(onSubmit)} noValidate>
      <VStack py="30px" bg="gray.100" w="650px" spacing="8" borderRadius="20px">
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
          css={css`
            margin-top: 600px !important;
          `}
        />
      </VStack>
    </form>
  )
}

export { SignupForm }
