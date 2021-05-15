import { gql } from '@apollo/client'
import { Box, Center, Flex, Heading, HStack, SimpleGrid, Text } from '@chakra-ui/react'
import Link from 'next/link'

import { addApolloState, initializeApollo } from '@/apollo/client'
import type { Top10TopicAndBrandQuery, Top10TopicAndBrandQueryVariables } from '@/apollo/graphql'
import { Top10TopicAndBrandDocument } from '@/apollo/graphql'
// import { BlogCard } from '@/components/blog/container/BlogCard'
import { LayoutWithHead } from '@/components/layout/container'
// import { PostCard } from '@/components/post/container'

const Home = () => {
  return (
    <LayoutWithHead sideMenu>
      <Center bg="orange.50" borderRadius="100px" mt="20px" pt="3px" mx="20px">
        <Box py={['10px', '20px']} px={['10px', '40px']} flexDir="column">
          <HStack spacing="7" color="gray.600" mb="10px">
            <Link href="/">
              <a>
                <Heading size="md" color="#8C5A30" pb="5px" borderBottom="2px">
                  おすすめ
                </Heading>
              </a>
            </Link>
            <Link href="/feed">
              <a>
                <Heading size="md" pb="5px">
                  タイムライン
                </Heading>
              </a>
            </Link>
            <Link href="/posts">
              <a>
                <Heading size="md" pb="5px">
                  ポスト
                </Heading>
              </a>
            </Link>
            <Link href="/blogs">
              <a>
                <Heading size="md" pb="5px">
                  ブログ
                </Heading>
              </a>
            </Link>
          </HStack>
        </Box>
      </Center>
      <Center bg="white" pt="10px">
        <Box py="10px" px={['10px', '40px']} flexDir="column">
          {/* main */}
          <Box>
            <Box mb="100px">
              <Text fontSize="26px" color="gray.800" fontWeight="bold" textAlign="left" mb="25px">
                人気のトピック
              </Text>
              <Text
                fontSize="18px"
                color="gray.800"
                fontWeight="bold"
                textAlign="left"
                mb="25px"
                py="8px"
                px="18px"
                borderRadius="18px"
                bg="orange.100"
                display="inline"
              >
                #夏コーデ
              </Text>
              <Flex mt="25px">
                <SimpleGrid columns={[1, 1, 1, 1, 2]} spacingX={6} spacingY={6}>
                  <Box bg="gray.400" w="500px" h="250px" borderRadius="15px" />
                  <Box bg="gray.400" w="500px" h="250px" borderRadius="15px" />
                  <Box bg="gray.400" w="500px" h="250px" borderRadius="15px" />
                  <Box bg="gray.400" w="500px" h="250px" borderRadius="15px" />
                </SimpleGrid>
              </Flex>
            </Box>
            <Box mb="100px">
              <Text
                fontSize="18px"
                color="gray.800"
                fontWeight="bold"
                textAlign="left"
                mb="25px"
                py="8px"
                px="18px"
                borderRadius="18px"
                bg="orange.100"
                display="inline"
              >
                #冬コーデ
              </Text>
              <Flex mt="25px">
                <SimpleGrid columns={[1, 1, 1, 1, 2]} spacingX={6} spacingY={6}>
                  <Box bg="gray.400" w="500px" h="250px" borderRadius="15px" />
                  <Box bg="gray.400" w="500px" h="250px" borderRadius="15px" />
                  <Box bg="gray.400" w="500px" h="250px" borderRadius="15px" />
                  <Box bg="gray.400" w="500px" h="250px" borderRadius="15px" />
                </SimpleGrid>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Center>
      <Center bg="gray.50" pt="80px">
        <Box py="10px" px={['10px', '40px']} flexDir="column">
          <Box mb="100px">
            <Text fontSize="28px" color="gray.800" fontWeight="bold" textAlign="left" mb="25px">
              人気のポスト
            </Text>
            <Flex>
              <SimpleGrid columns={[1, 1, 1, 1, 2]} spacingX={6} spacingY={6}>
                <Box bg="gray.400" w="500px" h="250px" borderRadius="15px" />
                <Box bg="gray.400" w="500px" h="250px" borderRadius="15px" />
                <Box bg="gray.400" w="500px" h="250px" borderRadius="15px" />
                <Box bg="gray.400" w="500px" h="250px" borderRadius="15px" />
                <Box bg="gray.400" w="500px" h="250px" borderRadius="15px" />
                <Box bg="gray.400" w="500px" h="250px" borderRadius="15px" />
                <Box bg="gray.400" w="500px" h="250px" borderRadius="15px" />
                <Box bg="gray.400" w="500px" h="250px" borderRadius="15px" />
                <Box bg="gray.400" w="500px" h="250px" borderRadius="15px" />
                <Box bg="gray.400" w="500px" h="250px" borderRadius="15px" />
                <Box bg="gray.400" w="500px" h="250px" borderRadius="15px" />
              </SimpleGrid>
            </Flex>
          </Box>
          <Box mb="100px">
            <Text fontSize="28px" color="gray.800" fontWeight="bold" textAlign="left" mb="25px">
              人気のブログ
            </Text>
            <Flex>
              <SimpleGrid columns={[1, 1, 2, 2, 3]} spacingX={8} spacingY={8}>
                <Box bg="gray.400" w="350px" h="250px" borderRadius="15px" />
                <Box bg="gray.400" w="350px" h="250px" borderRadius="15px" />
                <Box bg="gray.400" w="350px" h="250px" borderRadius="15px" />
                <Box bg="gray.400" w="350px" h="250px" borderRadius="15px" />
                <Box bg="gray.400" w="350px" h="250px" borderRadius="15px" />
                <Box bg="gray.400" w="350px" h="250px" borderRadius="15px" />
                <Box bg="gray.400" w="350px" h="250px" borderRadius="15px" />
                <Box bg="gray.400" w="350px" h="250px" borderRadius="15px" />
                <Box bg="gray.400" w="350px" h="250px" borderRadius="15px" />
              </SimpleGrid>
            </Flex>
          </Box>
        </Box>
      </Center>
    </LayoutWithHead>
  )
}

export const getStaticProps = async () => {
  const client = initializeApollo()
  await client.query<Top10TopicAndBrandQuery, Top10TopicAndBrandQueryVariables>({
    query: Top10TopicAndBrandDocument,
  })
  return addApolloState(client, { props: {}, revalidate: 300 })
}

// eslint-disable-next-line import/no-default-export
export default Home

gql`
  query Top10TopicAndBrand {
    topics(limit: 20, order_by: { post_topics_aggregate: { count: desc } }) {
      name
      id
    }
    brands(limit: 20, order_by: { post_brands_aggregate: { count: desc } }) {
      name
      id
    }
  }
`

// 直近でよく使われているトピックが付けられているポストとブログ

// 直近でよく使われているブランドが付けられているポストとブログ

// 直近でいいねが多い順のポストとブログ
