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
// import { useRouter } from 'next/router'
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
  const [disableSubmit, setDisableSubmit] = useState(true)
  const [content, setContent] = useState('')
  const [textLimit, setTextLimit] = useState(0)

  const TEXT_LIMIT = 300

  // const router = useRouter()

  // const client = initializeApollo()

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value
    setDisableSubmit(text.length === 0 || text.length > TEXT_LIMIT)
    setTextLimit(text.length)
    setContent(text)
  }

  const wrapperOnClose = () => {
    if (!confirm('投稿を終了しますか？（内容は破棄されます。）')) return
    props.onClose()
  }

  // const handleSubmit = () => {
  //   router.push('/')
  // }

  return (
    <Modal isOpen={props.isOpen} onClose={wrapperOnClose} size="6xl">
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
              <Box mb="30px" position="relative">
                <Textarea
                  placeholder={`本文を入力（${TEXT_LIMIT}文字まで）`}
                  borderColor="transparent"
                  bg="white"
                  borderRadius="14px"
                  pr={['56px', '100px']}
                  w={{ base: '80vw', lg: '620px' }}
                  h="250px"
                  value={content}
                  onChange={(e) => {
                    handleTextChange(e)
                  }}
                />
                <Box position="absolute" right="4" top="2" zIndex="1">
                  <CircularProgress
                    value={textLimit}
                    ml="10px"
                    size={'35px'}
                    thickness="7px"
                    max={TEXT_LIMIT}
                    color={textLimit < TEXT_LIMIT ? 'blue.500' : 'red'}
                  >
                    {textLimit >= TEXT_LIMIT && <CircularProgressLabel>over</CircularProgressLabel>}
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
                    w={{ base: '80vw', lg: '300px' }}
                    h="120px"
                  ></Box>
                </Box>
                <Box>
                  <Text color="gray.700">ブランドを追加</Text>
                  <Box
                    bg="white"
                    borderRadius="14px"
                    w={{ base: '80vw', lg: '300px' }}
                    h="120px"
                  ></Box>
                </Box>
              </Stack>
              <Box>
                <GenderRadioButton />
              </Box>
            </VStack>
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="teal"
            mr={3}
            onClick={props.onClose}
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

gql`
  mutation InsertPostOne($user_id: String!, $content: String!, $image: String, $gender: String!) {
    insert_posts_one(
      object: { user_id: $user_id, content: $content, image: $image, gender: $gender }
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
