/* eslint-disable react/jsx-key */
import { Box, Flex, Heading, Icon, Text } from '@chakra-ui/react'
import { AiOutlineIdcard } from 'react-icons/ai'
import { HiOutlineNewspaper } from 'react-icons/hi'

import { DarkmodeToggle } from '@/components/layout/unit'

// TODO 通知テーブルから取得して返す
export const nortificationMenuItems = (): JSX.Element[] => {
  return [
    <Text color="gray.800" fontSize="13px" my="2">
      @neko さんにフォローされました
    </Text>,
    <Text color="gray.800" fontSize="13px" my="2">
      @hogehoge さんにフォローされました
    </Text>,
    <Text color="gray.800" fontSize="13px" my="2">
      @innu さんにフォローされました
    </Text>,
  ]
}

export const userMenuItems = (): JSX.Element[] => {
  return [
    <Box>
      <Flex align="center">
        <Heading size="sm">shintaro</Heading>
        <Text ml="2" color="gray.400" fontSize="12px">
          @shin_k_2281
        </Text>
      </Flex>
      <Text color="gray.800" fontSize="12px" mt="1">
        マイページを表示
      </Text>
    </Box>,
    <Text color="gray.800" fontSize="13px">
      自分の投稿
    </Text>,
    <Text color="gray.800" fontSize="13px">
      お気に入りの投稿
    </Text>,
    <Text color="gray.800" fontSize="13px">
      アカウント設定
    </Text>,
    <Text color="gray.800" fontSize="13px">
      ログアウト
    </Text>,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    <Box>
      <Text color="gray.800" fontSize="13px" mb="1">
        カラーモードを変更
      </Text>
      <DarkmodeToggle />
    </Box>,
  ]
}

export const postMenuItems = (): JSX.Element[] => {
  return [
    <Heading display="flex" alignItems="center" size="sm" fontWeight="semibold">
      <Icon as={AiOutlineIdcard} mr="2" />
      ポスト
    </Heading>,
    <Heading display="flex" alignItems="center" size="sm">
      <Icon as={HiOutlineNewspaper} mr="2" />
      ブログ
    </Heading>,
  ]
}
