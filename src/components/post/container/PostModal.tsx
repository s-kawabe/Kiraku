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
  VStack,
} from '@chakra-ui/react'
import { Box, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import type { VFC } from 'react'
import { useState } from 'react'

// import { initializeApollo } from '@/apollo/client'
import { GenderRadioButton } from '@/components/common/unit'
import { NormalButton } from '@/components/common/unit'

type PostModalProps = {
  isNew: boolean
  isOpen: boolean
  onClose: () => void
  postData?: any // edit時にポストのデータをもらう
}

const PostModal: VFC<PostModalProps> = (props: PostModalProps) => {
  const router = useRouter()
  const [disableSubmit, setDisableSubmit] = useState(true)
  const [content, setContent] = useState('')
  const [textCount, setTextCount] = useState(0)
  // const [registerTopics, setRegisterTopics] = useState<string[]>([])
  // const [registerBrands, setRegisterBrands] = useState<string[]>([])

  const TEXT_LIMIT = 300

  // const client = initializeApollo()

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value
    setDisableSubmit(text.length === 0 || text.length > TEXT_LIMIT)
    setTextCount(text.length)
    setContent(text)
  }

  const wrapperOnClose = () => {
    if (!confirm('投稿を終了しますか？（内容は破棄されます。）')) return
    setContent('')
    setTextCount(0)
    props.onClose()
  }

  const handleSubmit = () => {
    setContent('')
    setTextCount(0)
    props.onClose()
    router.push('/')
  }

  return (
    <Modal isOpen={props.isOpen} onClose={wrapperOnClose} size="6xl" scrollBehavior="outside">
      <ModalOverlay bg="rgba(30, 30, 30, 0.5)" />
      <ModalContent bg="gray.100" borderRadius="20px">
        <ModalHeader fontWeight="semibold" fontSize="20px" color="gray.700" py="30px">
          <Center>ポストを投稿</Center>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody mb="20px" display="flex" justifyContent="center">
          <Stack direction={{ base: 'column', lg: 'row' }}>
            <Box mr={['', '40px']} mb={['30px', '']}>
              <NormalButton
                text="画像を選択"
                bg="gray.500"
                color="white"
                borderRadius="20px"
                width="150px"
                fontWeight="normal"
                hover={{ bg: 'gray.600' }}
              />
              <Box
                w={{ base: '330px', lg: '20vw' }}
                h={{ base: '450px', lg: '28vw' }}
                bg="gray.200"
                mt="20px"
              ></Box>
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
                    value={textCount}
                    ml="10px"
                    size={'35px'}
                    thickness="7px"
                    max={TEXT_LIMIT}
                    color={textCount < TEXT_LIMIT ? 'blue.500' : 'red'}
                  >
                    {textCount >= TEXT_LIMIT && <CircularProgressLabel>over</CircularProgressLabel>}
                  </CircularProgress>
                </Box>
              </Box>
              <Stack
                mb="30px"
                direction={{ base: 'column', lg: 'row' }}
                spacing="30"
                justifyContent="space-between"
              >
                <Box>
                  <Text color="gray.700">トピックを追加</Text>
                  <Box
                    bg="white"
                    borderRadius="14px"
                    w={{ base: '88vw', lg: '300px' }}
                    h="120px"
                  ></Box>
                </Box>
                <Box>
                  <Text color="gray.700">ブランドを追加</Text>
                  <Box
                    bg="white"
                    borderRadius="14px"
                    w={{ base: '88vw', lg: '300px' }}
                    h="120px"
                  ></Box>
                </Box>
              </Stack>
              <Box w="100%">
                <GenderRadioButton />
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

// 更新時の場合を想定してmutationはon_confrictを設定するべきだと思う

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

// ###
gql`
  mutation InsertPostOneWithTopicsAndBrands(
    $id: Int
    $user_id: String!
    $content: String!
    $image: String
    $gender: String!
    $topicsIds: [post_topics_insert_input!]!
    $brandsIds: [post_brands_insert_input!]!
  ) {
    insert_posts_one(
      object: {
        id: $id
        user_id: $user_id
        content: $content
        image: $image
        gender: $gender
        topics: {
          data: $topicsIds
          on_conflict: { constraint: post_topics_pkey, update_columns: [id, topic_id, topic_id] }
        }
        brands: {
          data: $brandsIds
          on_conflict: { constraint: post_brands_pkey, update_columns: [id, post_id, brand_id] }
        }
      }
      on_conflict: { constraint: posts_pkey, update_columns: [content, image, gender, updated_at] }
    ) {
      id
      user_id
      content
      image
      gender
      created_at
      updated_at
    }
  }
`
