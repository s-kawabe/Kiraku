import { useMediaQuery } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { auth } from '@/firebase/firebaseConfig'

// 引数が無い場合画面幅が481px以上ならtrueを返す
export const useIsDesktop = (media = '480px'): boolean => {
  const [isPC] = useMediaQuery(`(min-width: ${media})`)
  return isPC
}

// Login状態でなければaboutページにリダイレクトする
export const useRedirectWhenUnLogin = () => {
  const router = useRouter()

  useEffect(() => {
    ;(async () => {
      const user = await auth.currentUser // TODO グローバルステートから持ってくる
      if (!user) {
        router.replace('/about')
      }
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

// Login状態であればルートにリダイレクトする(ログイン画面,サインアップ画面など)
export const useRedirectWhenLogin = () => {
  // const [isChecking, setIsChecking] = useState(true)
  const router = useRouter()

  useEffect(() => {
    ;(async () => {
      const user = await auth.currentUser // TODO グローバルステートから持ってくる
      if (user) {
        router.replace('/')
      }
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
