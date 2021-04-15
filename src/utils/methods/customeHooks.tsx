import { useMediaQuery } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { auth } from '@/firebase/firebaseConfig'

// 引数が無い場合画面幅が481px以上ならtrueを返す
export const useIsDesktop = (media = '480px'): boolean => {
  const [isPC] = useMediaQuery(`(min-width: ${media})`)
  return isPC
}

// Login状態でなければaboutページにリダイレクトする()
export const useRequireLogin = () => {
  const [isChecking, setIsChecking] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const user = auth.currentUser // TODO グローバルステートから持ってくる
    if (!user) {
      setIsChecking(false)
      router.push('/about')
    } else {
      setIsChecking(false)
    }
  }, [router])

  return isChecking
}

// Login状態であればルートにリダイレクトする(ログイン画面,サインアップ画面など)
export const useRequireUnLogin = () => {
  const [isChecking, setIsChecking] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const user = auth.currentUser // TODO グローバルステートから持ってくる
    if (user) {
      setIsChecking(false)
      router.push('/')
    } else {
      setIsChecking(false)
    }
  }, [router])

  return isChecking
}
