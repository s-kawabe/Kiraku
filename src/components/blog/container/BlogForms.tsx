import { gql } from '@apollo/client'
import {
  Box,
  Center,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  // Textarea,
  Tooltip,
  VStack,
} from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import ReactTagInput from '@pathofdev/react-tag-input'
import { convertToRaw, EditorState } from 'draft-js'
import { useRouter } from 'next/router'
import type { VFC } from 'react'
import { useState } from 'react'

import { BlogEditor } from '@/components/blog/unit'
import { GenderRadioButton } from '@/components/common/unit'
import type { Gender } from '@/utils/constants/Common'
import { insertBlogToHasura } from '@/utils/methods/blog.ts'
import { useAllTopicsAndBrands } from '@/utils/methods/customeHooks.tsx'
import { addTagAttribute, checkExistTable } from '@/utils/methods/post.ts'
// 編集の時はblog１件分のデータがpropsに入ってくる
// type Props = {
//   blogData?: any
// }

const BlogForms: VFC = () => {
  const [allTopics, allBrands] = useAllTopicsAndBrands()

  const [isLoading, setIsLoading] = useState(false)
  const [title, setTitle] = useState('')
  const [registerTopics, setRegisterTopics] = useState<string[]>([])
  const [registerBrands, setRegisterBrands] = useState<string[]>([])
  const [gender, setGender] = useState<Gender>('ALL')
  const [editorState, setEditorState] = useState(() => {
    return EditorState.createEmpty()
  })

  const router = useRouter()

  // brandとtopicのinputにautoComplete属性を追加
  addTagAttribute()

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  // const resetState = () => {
  //   setTitle('')
  //   setRegisterTopics([])
  //   setRegisterBrands([])
  //   setEditorState(EditorState.createEmpty())
  // }

  const handleSubmit = async () => {
    setIsLoading(true)
    // ユーザが入力したbrandとtopicの中にDB未登録の物があれば登録する
    await checkExistTable({ key: 'topics', formInsert: registerTopics, allData: allTopics })
    await checkExistTable({ key: 'brands', formInsert: registerBrands, allData: allBrands })
    // textareaに入力されたデータをJSON化する
    const userInputData = convertToRaw(editorState.getCurrentContent())
    console.log(title, gender, registerTopics, registerBrands, userInputData)

    const ret = await insertBlogToHasura({
      title,
      gender,
      registerTopics,
      registerBrands,
      userInputData,
    })

    // hasuraのblogsテーブルにINSERTし、そのidを返却してもらって /blogs/[blogId].tsxページへ遷移する
    setIsLoading(false)
    const data = ret?.data?.insert_blogs_one
    if (data) {
      router.push({
        pathname: '/[userId]/blogs/[blogId]',
        query: {
          userId: data?.user_id.substring(0, 8),
          blogId: data?.id,
        },
      })
    }
  }

  return (
    <Center mt="40px" mb="80px">
      <VStack
        my={{ base: '', sm: '25px', lg: '40px' }}
        w={{ base: '90vw', sm: '85vw', xl: '65vw' }}
        // bg="gray.100"
      >
        <Heading color="gray.600" fontSize={['20px', '26px']} mb="30px">
          ブログを投稿
        </Heading>
        {/* Title area */}
        <Box mb="40px" w="100%">
          <Input
            label="タイトル"
            placeholder="タイトルを入力"
            name="title"
            type="text"
            borderColor="transparent"
            color="gray.700"
            fontSize="22px"
            w="100%"
            value={title}
            onChange={(e) => {
              handleChangeTitle(e)
            }}
          />
        </Box>
        {/* Main Text area */}
        <BlogEditor editorState={editorState} setEditorState={setEditorState} />
        <Box w={{ base: '100%', xl: '80%' }} mt="40px">
          {/* Gender radio area */}
          <Flex justify="flex-start" w="100%" mb="30px" mt="40px">
            <GenderRadioButton default={'ALL'} setGender={setGender} />
          </Flex>
          {/* Topic/Brand area */}
          <Stack
            direction={{ base: 'column', lg: 'row' }}
            spacing="30"
            justifyContent="space-between"
          >
            <datalist id="topics-list">
              {allTopics.map((topic) => {
                return <option key={topic} value={topic} />
              })}
            </datalist>
            <datalist id="brands-list">
              {allBrands.map((topic) => {
                return <option key={topic} value={topic} />
              })}
            </datalist>
            <Tooltip label="テキストを入力後Enterで登録" bg="gray.600" fontSize="12px">
              <Box>
                <Text color="gray.600">トピックを追加</Text>
                <Box w={{ base: '80vw', lg: '400px', xl: '22vw' }}>
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
                </Box>
              </Box>
            </Tooltip>
            <Tooltip label="テキストを入力後Enterで登録" bg="gray.600" fontSize="12px">
              <Box>
                <Text color="gray.600">ブランドを追加</Text>
                <Box w={{ base: '80vw', lg: '400px', xl: '22vw' }}>
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
                </Box>
              </Box>
            </Tooltip>
          </Stack>
          <Box mb="30px" w="100%">
            <Text color="red.300" fontSize="13px">
              ※トピックとブランドは後から変更できません
            </Text>
          </Box>
        </Box>
        {/* Publish Button */}
        <Button
          borderRadius="20px"
          px="7"
          colorScheme="teal"
          onClick={handleSubmit}
          position="fixed"
          bottom={['90px', '120px']}
          right={['30px', '60px']}
          isLoading={isLoading}
        >
          公開
        </Button>
      </VStack>
    </Center>
  )
}

export { BlogForms }

// brand,topicをそれぞれ一つも登録しない場合
gql`
  mutation InsertBlogOne($user_id: String!, $title: String!, $content: jsonb!, $gender: String!) {
    insert_blogs_one(
      object: { user_id: $user_id, title: $title, content: $content, gender: $gender }
    ) {
      id
      user_id
      content
      gender
      created_at
    }
  }
`

// topicsのみを1つ以上登録する場合
gql`
  mutation InsertBlogOneWithTopics(
    $user_id: String!
    $title: String!
    $content: jsonb!
    $gender: String!
    $topicsIds: [blog_topics_insert_input!]!
  ) {
    insert_blogs_one(
      object: {
        user_id: $user_id
        title: $title
        content: $content
        gender: $gender
        topics: { data: $topicsIds }
      }
    ) {
      id
      user_id
      content
      gender
      created_at
    }
  }
`

// brandsのみを一つ以上登録する場合
gql`
  mutation InsertBlogOneWithBrands(
    $user_id: String!
    $title: String!
    $content: jsonb!
    $gender: String!
    $brandsIds: [blog_brands_insert_input!]!
  ) {
    insert_blogs_one(
      object: {
        user_id: $user_id
        title: $title
        content: $content
        gender: $gender
        brands: { data: $brandsIds }
      }
    ) {
      id
      user_id
      content
      gender
      created_at
    }
  }
`

//topicとbrands両方を一つ以上登録する場合
gql`
  mutation InsertBlogOneWithTopicsAndBrands(
    $user_id: String!
    $title: String!
    $content: jsonb!
    $gender: String!
    $topicsIds: [blog_topics_insert_input!]!
    $brandsIds: [blog_brands_insert_input!]!
  ) {
    insert_blogs_one(
      object: {
        user_id: $user_id
        title: $title
        content: $content
        gender: $gender
        topics: { data: $topicsIds }
        brands: { data: $brandsIds }
      }
    ) {
      id
      user_id
      content
      gender
      created_at
    }
  }
`
