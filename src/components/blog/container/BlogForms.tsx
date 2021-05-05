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
import type { VFC } from 'react'
import { useState } from 'react'

import { BlogEditor } from '@/components/blog/unit'
import { GenderRadioButton } from '@/components/common/unit'
import type { Gender } from '@/utils/constants/Common'

const BlogForms: VFC = () => {
  // const [allTopics, setAllTopics] = useState<string[]>([])
  // const [allBrands, setAllBrands] = useState<string[]>([])

  const [registerTopics, setRegisterTopics] = useState<string[]>([])
  const [registerBrands, setRegisterBrands] = useState<string[]>([])
  const [gender, setGender] = useState<Gender>('ALL')

  const handleSubmit = () => {
    console.log(gender, registerTopics, registerBrands)
  }

  return (
    <Center mt="40px" mb="80px">
      <VStack
        my={{ base: '', sm: '25px', lg: '40px' }}
        w={{ base: '90vw', sm: '85vw', xl: '65vw' }}
        // bg="gray.100"
      >
        <Heading color="gray.600" fontSize={['20px', '26px']} mb="20px">
          ブログを投稿
        </Heading>
        {/* Title area */}
        <Box mb="20px" w="100%">
          <Input
            label="タイトル"
            placeholder="タイトルを入力"
            name="title"
            type="text"
            borderColor="transparent"
            color="gray.700"
            fontSize="22px"
            w="100%"
          />
        </Box>
        <Box w={{ base: '100%', xl: '80%' }} px="30px">
          {/* Gender radio area */}
          <Flex justify="flex-start" w="100%" mb="20px">
            <GenderRadioButton default={'ALL'} setGender={setGender} />
          </Flex>
          {/* Topic/Brand area */}
          <Stack
            direction={{ base: 'column', lg: 'row' }}
            spacing="30"
            justifyContent="space-between"
          >
            <Tooltip label="テキストを入力後Enterで登録" bg="gray.600" fontSize="12px">
              <Box>
                <Text color="gray.700">トピックを追加</Text>
                <Box w={{ base: '80vw', lg: '400px' }}>
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
                <Text color="gray.700">ブランドを追加</Text>
                <Box w={{ base: '80vw', lg: '400px' }}>
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
        {/* Main Text area */}
        <BlogEditor />
        {/* Publish Button */}
        <Button
          borderRadius="20px"
          px="7"
          colorScheme="teal"
          onClick={handleSubmit}
          position="fixed"
          bottom={['90px', '120px']}
          right={['30px', '60px']}
        >
          公開
        </Button>
      </VStack>
    </Center>
  )
}

export { BlogForms }
