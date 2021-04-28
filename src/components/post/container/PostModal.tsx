import '@pathofdev/react-tag-input/build/index.css'

import { gql } from '@apollo/client'
import {
  Button,
  Center,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
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
import { checkExistTable, insertPostToHasura, uploadPostImage } from '@/utils/methods/Post'

type PostModalProps = {
  isNew: boolean
  isOpen: boolean
  onClose: () => void
  postData?: any // edit時にポストのデータをもらう
  // edit時、firebase storageの画像のrefが分からない可能性がある
  // URLからrefを割り出せれば良いが。
}
const TEXT_LIMIT = 250
const client = initializeApollo()

const PostModal: VFC<PostModalProps> = (props: PostModalProps) => {
  const router = useRouter()
  const [allTopics, setAllTopics] = useState<string[]>([])
  const [allBrands, setAllBrands] = useState<string[]>([])

  const [disableSubmit, setDisableSubmit] = useState(true)
  const [content, setContent] = useState('')
  const [registerTopics, setRegisterTopics] = useState<string[]>([])
  const [registerBrands, setRegisterBrands] = useState<string[]>([])
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
    setDisableSubmit(true)
    setImage(null)
  }

  const wrapperOnClose = () => {
    if (!confirm('投稿を終了しますか？（内容は破棄されます。）')) return
    resetState()
    props.onClose()
  }

  const handleSubmit = async () => {
    // 画像をfirebaseにアップロードする(アップロード後の画像URLを返してもらう)
    let imageInfo: {
      image: string | null
      imageId: string | null
    } = {
      image: null,
      imageId: null,
    }
    if (image) {
      imageInfo = await uploadPostImage(image)
    }
    // ユーザが入力したbrandとtopicの中にDB未登録の物があれば登録する
    await checkExistTable({ key: 'topics', formInsert: registerTopics, allData: allTopics })
    await checkExistTable({ key: 'brands', formInsert: registerBrands, allData: allBrands })
    // hasuraのpostsに色々INSERTし、そのpostsのidを返して、その/posts/[postId].tsxページに遷移する
    const ret = await insertPostToHasura({
      content,
      registerTopics,
      registerBrands,
      gender,
      image: imageInfo.image,
      imageId: imageInfo.imageId,
    })

    resetState()
    props.onClose()

    const data = ret?.data?.insert_posts_one
    data &&
      router.push({
        pathname: '/[userId]/posts/[postId]',
        query: {
          userId: data.user_id.substring(0, 8),
          postId: data.id,
        },
      }) // todo
  }

  // TopicsとBrandsのデータを全件取得してstateに入れておく
  useEffect(() => {
    if (isShowPostModalVar()) {
      ;(async () => {
        const fetchAllTopics = await client.query<GetAllTopicsQuery, GetAllTopicsQueryVariables>({
          query: GetAllTopicsDocument,
          fetchPolicy: 'network-only',
        })
        const fetchAllBrands = await client.query<GetAllBrandsQuery, GetAllBrandsQueryVariables>({
          query: GetAllBrandsDocument,
          fetchPolicy: 'network-only',
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
    if (!props.postData) {
      const inputElems = document.getElementsByClassName('react-tag-input__input')
      inputElems[0]?.setAttribute('type', 'text')
      inputElems[0]?.setAttribute('list', 'topics-list')
      inputElems[0]?.setAttribute('autocomplete', 'on')
      inputElems[1]?.setAttribute('type', 'text')
      inputElems[1]?.setAttribute('list', 'brands-list')
      inputElems[1]?.setAttribute('autocomplete', 'on')
    }
  })

  return (
    <Modal isOpen={props.isOpen} onClose={wrapperOnClose} size="6xl" scrollBehavior="outside">
      <ModalOverlay bg="rgba(30, 30, 30, 0.5)" />
      <ModalContent bg="gray.100" borderRadius="20px">
        <ModalHeader fontWeight="semibold" fontSize="20px" color="gray.700" py="30px">
          <Center>ポストを投稿</Center>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody mb="20px" display="flex" justifyContent="center">
          <Stack direction={{ base: 'column', lg: 'row' }} spacing="10">
            <Box mx={'auto'}>
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
                <Tooltip label="テキストを入力後Enterで登録" bg="gray.600" fontSize="12px">
                  <Box>
                    <Text color="gray.700">トピックを追加</Text>
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
                </Tooltip>
                <Tooltip label="テキストを入力後Enterで登録" bg="gray.600" fontSize="12px">
                  <Box>
                    <Text color="gray.700">ブランドを追加</Text>

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
                </Tooltip>
              </Stack>
              <Box mb="30px" w="100%">
                <Text color="red.300" fontSize="13px">
                  ※トピックとブランドは後から変更できません
                </Text>
              </Box>
              <Box w="100%">
                <GenderRadioButton default="ALL" setGender={setGender} />
              </Box>
              <Flex w="100%" justify="flex-end">
                <Button
                  colorScheme="teal"
                  mb={3}
                  mt={3}
                  onClick={handleSubmit}
                  px="50px"
                  isDisabled={disableSubmit}
                >
                  投稿
                </Button>
              </Flex>
            </VStack>
          </Stack>
        </ModalBody>
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
    $image_id: String
    $gender: String!
  ) {
    insert_posts_one(
      object: {
        id: $id
        user_id: $user_id
        content: $content
        image: $image
        image_id: $image_id
        gender: $gender
      }
      on_conflict: {
        constraint: posts_pkey
        update_columns: [content, image, image_id, gender, updated_at]
      }
    ) {
      id
      user_id
      content
      image
      image_id
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
    $image_id: String
    $gender: String!
    $topicsIds: [post_topics_insert_input!]!
  ) {
    insert_posts_one(
      object: {
        user_id: $user_id
        content: $content
        image: $image
        image_id: $image_id
        gender: $gender
        topics: { data: $topicsIds }
      }
    ) {
      id
      user_id
      content
      image
      image_id
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
    $image_id: String
    $gender: String!
    $brandsIds: [post_brands_insert_input!]!
  ) {
    insert_posts_one(
      object: {
        user_id: $user_id
        content: $content
        image: $image
        image_id: $image_id
        gender: $gender
        brands: { data: $brandsIds }
      }
    ) {
      id
      user_id
      content
      image
      image_id
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
    $image_id: String
    $gender: String!
    $topicsIds: [post_topics_insert_input!]!
    $brandsIds: [post_brands_insert_input!]!
  ) {
    insert_posts_one(
      object: {
        user_id: $user_id
        content: $content
        image: $image
        image_id: $image_id
        gender: $gender
        topics: { data: $topicsIds }
        brands: { data: $brandsIds }
      }
    ) {
      id
      user_id
      content
      image
      image_id
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

// 新規topics登録用
gql`
  mutation InsertTopics($newItems: [topics_insert_input!]!) {
    insert_topics(objects: $newItems) {
      affected_rows
    }
  }
`

// 新規brands登録用
gql`
  mutation InsertBrands($newItems: [brands_insert_input!]!) {
    insert_brands(objects: $newItems) {
      affected_rows
    }
  }
`

gql`
  query MappingTopicsToId($topics: [String!]!) {
    topics(where: { name: { _in: $topics } }) {
      topic_id: id
    }
  }
`

gql`
  query MappingBrandsToId($brands: [String!]!) {
    brands(where: { name: { _in: $brands } }) {
      brand_id: id
    }
  }
`
