import { Box, Text, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import type { VFC } from 'react'

import { IconHeading } from '@/components/common/unit'

export type AsideContextListProps = {
  topics: {
    name: string
    id: number
  }[]
  brands: {
    name: string
    id: number
  }[]
}

const AsideContextList: VFC<AsideContextListProps> = (props: AsideContextListProps) => {
  return (
    <VStack
      align="left"
      spacing={1}
      py="8"
      pl="6"
      maxH="100vh"
      w="190px"
      overflow="auto"
      justifyContent="center"
    >
      <IconHeading type="topic" text="トピック" color="gray.600" size="md" />
      {props.topics.map((topic) => {
        return (
          <Box
            key={topic.name}
            px="2"
            borderRadius="10px"
            transition="all 0.1s"
            _hover={{ bg: 'gray.100' }}
          >
            <Link href="/topics/[topicId]" as={`/topics/${topic.id}`}>
              <a>
                <Text color="gray.500" fontWeight="normal" fontSize="13px" mt="2px">
                  {topic.name}
                </Text>
              </a>
            </Link>
          </Box>
        )
      })}
      <br />
      <IconHeading type="brand" text="ブランド" color="gray.600" size="md" />
      {props.brands.map((brand) => {
        return (
          <Box
            key={brand.name}
            px="2"
            borderRadius="10px"
            transition="all 0.1s"
            _hover={{ bg: 'gray.100' }}
          >
            <Link href="/brands/[brandId]" as={`/brands/${brand.id}`}>
              <a>
                <Text color="gray.500" size="lg" fontWeight="normal" fontSize="13px" mt="2px">
                  {brand.name}
                </Text>
              </a>
            </Link>
          </Box>
        )
      })}
    </VStack>
  )
}

export { AsideContextList }
