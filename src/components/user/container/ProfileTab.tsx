import { gql } from '@apollo/client'
import { Box, Center, Flex, Spinner, Tab, TabList, Tabs } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import type { VFC } from 'react'
import { useEffect, useState } from 'react'

import { useGetUserInfomationQuery } from '@/apollo/graphql'

type UserInfo = {
  post: number
  blog: number
  likePost: number
  likeBlog: number
  follow: number
  follower: number
}

type Props = {
  default: 0 | 1 | 2 | 3 | 4 | 5
  userDisplayId: string
}

const initialUserInfo = {
  post: 0,
  blog: 0,
  likePost: 0,
  likeBlog: 0,
  follow: 0,
  follower: 0,
}

const ProfileTab: VFC<Props> = (props: Props) => {
  const [userInfo, setUserInfo] = useState<UserInfo>(initialUserInfo)
  const router = useRouter()

  const query = { userId: props.userDisplayId }
  const transitions = {
    toPost: () => {
      router.push({ pathname: '/[userId]', query })
    },
    toBlog: () => {
      router.push({ pathname: '/[userId]/blogs', query })
    },
    toLikePost: () => {
      router.push({ pathname: '/[userId]/likes/posts', query })
    },
    toLikeBlog: () => {
      router.push({ pathname: '/[userId]/likes/blogs', query })
    },
    toFollow: () => {
      router.push({ pathname: '/[userId]/followings', query })
    },
    toFollower: () => {
      router.push({ pathname: '/[userId]/followers', query })
    },
  }

  // pathのユーザのdisplay_idを元にタブに表示する数字をクライアントfetch
  const { data, loading } = useGetUserInfomationQuery({
    variables: {
      display_id: props.userDisplayId,
    },
  })

  useEffect(() => {
    if (!loading) {
      console.log(data)
      const user = data?.users[0]
      if (user) {
        setUserInfo({
          post: user.posts_aggregate.aggregate?.count ?? 0,
          blog: user.blogs_aggregate.aggregate?.count ?? 0,
          likePost: user.post_likes_aggregate.aggregate?.count ?? 0,
          likeBlog: user.blog_likes_aggregate.aggregate?.count ?? 0,
          follow: user.relation_user_from_aggregate.aggregate?.count ?? 0,
          follower: user.relation_user_to_aggregate.aggregate?.count ?? 0,
        })
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading])

  return (
    <Center w="100%" h="80px" bg="gray.50" borderY="1px" borderColor="gray.200">
      {loading ? (
        <Spinner />
      ) : (
        <Tabs variant="soft-rounded" colorScheme="green" defaultIndex={props.default} size="sm">
          <TabList>
            <Box>
              <Center fontSize="14px" mb="3px" color="gray.600">
                投稿
              </Center>
              <Center>
                <Tab onClick={transitions.toPost}>ポスト {userInfo.post}</Tab>
                <Tab onClick={transitions.toBlog}>ブログ {userInfo.blog}</Tab>
              </Center>
            </Box>
            <Box ml="40px">
              <Center fontSize="14px" mb="3px" color="gray.600">
                お気に入り
              </Center>
              <Center>
                <Tab onClick={transitions.toLikePost}>ポスト {userInfo.likePost}</Tab>
                <Tab onClick={transitions.toLikeBlog}>ブログ {userInfo.likeBlog}</Tab>
              </Center>
            </Box>
            <Flex alignItems="center">
              <Tab ml="40px" onClick={transitions.toFollow}>
                フォロー {userInfo.follow}
              </Tab>
            </Flex>
            <Flex alignItems="center">
              <Tab onClick={transitions.toFollower}>フォロワー {userInfo.follower}</Tab>
            </Flex>
          </TabList>
        </Tabs>
      )}
    </Center>
  )
}
export { ProfileTab }

// ユーザ自身の投稿/ユーザがお気に入りにした投稿/ユーザのfollow,follower の各集計値を返す
gql`
  query GetUserInfomation($display_id: String!) {
    users(where: { display_id: { _eq: $display_id } }) {
      posts_aggregate {
        aggregate {
          count(columns: id)
        }
      }
      blogs_aggregate {
        aggregate {
          count(columns: id)
        }
      }
      post_likes_aggregate {
        aggregate {
          count(columns: id)
        }
      }
      blog_likes_aggregate {
        aggregate {
          count(columns: id)
        }
      }
      relation_user_from_aggregate {
        aggregate {
          count(columns: id)
        }
      }
      relation_user_to_aggregate {
        aggregate {
          count(columns: id)
        }
      }
    }
  }
`
