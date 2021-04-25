//TODO 画像の処理 topics/brandsの存在チェック＋DBに無いデータの新規INSERT
import '@pathofdev/react-tag-input/build/index.css'

import { gql } from '@apollo/client'
import {
  Button,
  Center,
  CircularProgress,
  CircularProgressLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Textarea,
  Tooltip,
  VStack,
} from '@chakra-ui/react'
import { Box, Text } from '@chakra-ui/react'
import ReactTagInput from '@pathofdev/react-tag-input'
import { useRouter } from 'next/router'
import type { VFC } from 'react'
import { useEffect, useState } from 'react'

import { isShowPostModalVar } from '@/apollo/cache'
import { initializeApollo } from '@/apollo/client'
import type {
  GetAllBrandsQuery,
  GetAllBrandsQueryVariables,
  GetAllTopicsQuery,
  GetAllTopicsQueryVariables,
} from '@/apollo/graphql'
import { GetAllBrandsDocument, GetAllTopicsDocument } from '@/apollo/graphql'
import { GenderRadioButton } from '@/components/common/unit'
import { ImageArea } from '@/components/post/unit'
import type { Gender } from '@/utils/constants/Common'

type PostModalProps = {
  isNew: boolean
  isOpen: boolean
  onClose: () => void
  postData?: any // edit時にポストのデータをもらう
}
const TEXT_LIMIT = 250
const client = initializeApollo()

const PostModal: VFC<PostModalProps> = (props: PostModalProps) => {
  const router = useRouter()
  const [disableSubmit, setDisableSubmit] = useState(true)
  const [content, setContent] = useState('')
  const [registerTopics, setRegisterTopics] = useState<string[]>([])
  const [registerBrands, setRegisterBrands] = useState<string[]>([])
  const [allTopics, setAllTopics] = useState<string[]>([])
  const [allBrands, setAllBrands] = useState<string[]>([])
  const [gender, setGender] = useState<Gender>('ALL')
  const [image, setImage] = useState<File | null>(null)

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value
    setDisableSubmit(text.length === 0 || text.length > TEXT_LIMIT)
    setContent(text)
  }

  const resetState = () => {
    setContent('')
    setRegisterTopics([])
    setRegisterBrands([])
    isShowPostModalVar(false)
  }

  const wrapperOnClose = () => {
    if (!confirm('投稿を終了しますか？（内容は破棄されます。）')) return
    resetState()
    props.onClose()
  }

  const handleSubmit = () => {
    console.log({ registerTopics }, { registerBrands })
    console.log(gender)
    console.log(image)
    resetState()

    // 画像をfirebaseにアップロードする(アップロード後の画像URLを返してもらう)
    // brandとtopicの新規INSERT判定処理を行う
    // hasuraに諸々データを突っ込んで投稿の詳細ページに遷移

    props.onClose()
    router.push('/')
  }

  // TopicsとBrandsのデータを全件取得してstateに入れておく
  useEffect(() => {
    if (isShowPostModalVar()) {
      ;(async () => {
        const fetchAllTopics = await client.query<GetAllTopicsQuery, GetAllTopicsQueryVariables>({
          query: GetAllTopicsDocument,
        })
        const fetchAllBrands = await client.query<GetAllBrandsQuery, GetAllBrandsQueryVariables>({
          query: GetAllBrandsDocument,
        })

        const allTopicsData = fetchAllTopics.data.topics.map((data) => {
          return data.name
        })
        const allBrandsData = fetchAllBrands.data.brands.map((data) => {
          return data.name
        })

        setAllTopics(allTopicsData)
        setAllBrands(allBrandsData)
      })()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShowPostModalVar()])

  useEffect(() => {
    const inputElems = document.getElementsByClassName('react-tag-input__input')
    inputElems[0]?.setAttribute('type', 'text')
    inputElems[0]?.setAttribute('list', 'topics-list')
    inputElems[0]?.setAttribute('autocomplete', 'on')
    inputElems[1]?.setAttribute('type', 'text')
    inputElems[1]?.setAttribute('list', 'brands-list')
    inputElems[1]?.setAttribute('autocomplete', 'on')
  })

  return (
    <Modal isOpen={props.isOpen} onClose={wrapperOnClose} size="6xl" scrollBehavior="inside">
      <ModalOverlay bg="rgba(30, 30, 30, 0.5)" />
      <ModalContent bg="gray.100" borderRadius="20px">
        <ModalHeader fontWeight="semibold" fontSize="20px" color="gray.700" py="30px">
          <Center>ポストを投稿</Center>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody mb="20px" display="flex" justifyContent="center">
          <Stack direction={{ base: 'column', lg: 'row' }}>
            <Box mr={['', '40px']} mb={['30px', '']} ml={['20px', '']}>
              <ImageArea setImage={setImage} />
            </Box>
            <VStack>
              <Box mb="20px" position="relative">
                <Textarea
                  placeholder={`本文を入力（${TEXT_LIMIT}文字まで）`}
                  borderColor="transparent"
                  bg="white"
                  borderRadius="14px"
                  pr={['56px', '100px']}
                  w={{ base: '88vw', lg: '620px' }}
                  h="250px"
                  value={content}
                  onChange={(e) => {
                    handleTextChange(e)
                  }}
                />
                <Box position="absolute" right="4" top="2" zIndex="1">
                  <CircularProgress
                    value={content.length}
                    ml="10px"
                    size={'35px'}
                    thickness="7px"
                    max={TEXT_LIMIT}
                    color={content.length < TEXT_LIMIT ? 'blue.500' : 'red'}
                  >
                    {content.length >= TEXT_LIMIT && (
                      <CircularProgressLabel>over</CircularProgressLabel>
                    )}
                  </CircularProgress>
                </Box>
              </Box>
              <Stack
                direction={{ base: 'column', lg: 'row' }}
                spacing="30"
                justifyContent="space-between"
              >
                <Box>
                  <Tooltip label="テキストを入力後Enterで登録" bg="gray.600" fontSize="12px">
                    <Text color="gray.700">トピックを追加</Text>
                  </Tooltip>
                  <Box w={{ base: '88vw', lg: '295px' }}>
                    <ReactTagInput
                      placeholder="トピックは5つまで"
                      maxTags={5}
                      tags={registerTopics}
                      removeOnBackspace={true}
                      onChange={(newTopic: any) => {
                        return setRegisterTopics(newTopic)
                      }}
                      validator={(value) => {
                        return !registerTopics.includes(value)
                      }}
                    />
                    <datalist id="topics-list">
                      {allTopics.map((topic) => {
                        return <option key={topic} value={topic} />
                      })}
                    </datalist>
                  </Box>
                </Box>
                <Box>
                  <Tooltip label="テキストを入力後Enterで登録" bg="gray.600" fontSize="12px">
                    <Text color="gray.700">ブランドを追加</Text>
                  </Tooltip>
                  <Box w={{ base: '88vw', lg: '295px' }}>
                    <ReactTagInput
                      placeholder="ブランドは5つまで"
                      maxTags={5}
                      tags={registerBrands}
                      removeOnBackspace={true}
                      onChange={(newBrand) => {
                        return setRegisterBrands(newBrand)
                      }}
                      validator={(value) => {
                        return !registerBrands.includes(value)
                      }}
                    />
                    <datalist id="brands-list">
                      {allBrands.map((topic) => {
                        return <option key={topic} value={topic} />
                      })}
                    </datalist>
                  </Box>
                </Box>
              </Stack>
              <Box mb="30px" textAlign="left" w="100%">
                <Text color="red.300" fontSize="13px">
                  ※トピックとブランドは後から変更できません
                </Text>
              </Box>
              <Box w="100%">
                <GenderRadioButton default="ALL" setGender={setGender} />
              </Box>
            </VStack>
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="teal"
            mr={3}
            mb={3}
            onClick={handleSubmit}
            px="50px"
            isDisabled={disableSubmit}
          >
            投稿
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export { PostModal }

// 新規投稿時：brand,topicをそれぞれ一つも登録しない場合
// 編集時：brand,topicをそれぞれ一つも修正しない場合
gql`
  mutation InsertPostOne(
    $id: Int
    $user_id: String!
    $content: String!
    $image: String
    $gender: String!
  ) {
    insert_posts_one(
      object: { id: $id, user_id: $user_id, content: $content, image: $image, gender: $gender }
      on_conflict: { constraint: posts_pkey, update_columns: [content, image, gender, updated_at] }
    ) {
      id
      user_id
      content
      image
      gender
      created_at
    }
  }
`

// topicsのみを1つ以上登録する場合
gql`
  mutation InsertPostOneWithTopics(
    $user_id: String!
    $content: String!
    $image: String
    $gender: String!
    $topicsIds: [post_topics_insert_input!]!
  ) {
    insert_posts_one(
      object: {
        user_id: $user_id
        content: $content
        image: $image
        gender: $gender
        topics: { data: $topicsIds }
      }
    ) {
      id
      user_id
      content
      image
      gender
      created_at
    }
  }
`

// brandsのみを一つ以上登録する場合
gql`
  mutation InsertPostOneWithBrands(
    $user_id: String!
    $content: String!
    $image: String
    $gender: String!
    $brandsIds: [post_brands_insert_input!]!
  ) {
    insert_posts_one(
      object: {
        user_id: $user_id
        content: $content
        image: $image
        gender: $gender
        brands: { data: $brandsIds }
      }
    ) {
      id
      user_id
      content
      image
      gender
      created_at
    }
  }
`

// topicとbrands両方を一つ以上登録する場合
gql`
  mutation InsertPostOneWithTopicsAndBrands(
    $user_id: String!
    $content: String!
    $image: String
    $gender: String!
    $topicsIds: [post_topics_insert_input!]!
    $brandsIds: [post_brands_insert_input!]!
  ) {
    insert_posts_one(
      object: {
        user_id: $user_id
        content: $content
        image: $image
        gender: $gender
        topics: { data: $topicsIds }
        brands: { data: $brandsIds }
      }
    ) {
      id
      user_id
      content
      image
      gender
      created_at
    }
  }
`

// topicsのサジェスト用クエリ
gql`
  query GetAllTopics {
    topics {
      name
    }
  }
`

// brandsのサジェスト用クエリ
gql`
  query GetAllBrands {
    brands {
      name
    }
  }
`
