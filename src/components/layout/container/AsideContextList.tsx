import { Text, VStack } from '@chakra-ui/react'
import type { VFC } from 'react'

import { IconHeading } from '@/components/common/unit'

export type AsideContextListProps = {
  topics: string[]
  brands: string[]
}

const AsideContextList: VFC<AsideContextListProps> = (props: AsideContextListProps) => {
  return (
    <VStack align="left" spacing={1} p="3">
      <IconHeading type="topic" text="トピック" color="#8C5A30" size="md" />
      {props.topics.map((topic) => {
        return (
          <div key={topic}>
            <Text color="gray.600" fontWeight="normal">
              {topic}
            </Text>
          </div>
        )
      })}
      <br />
      <IconHeading type="brand" text="ブランド" color="#8C5A30" size="md" />
      {props.brands.map((brand) => {
        return (
          <div key={brand}>
            <Text color="gray.600" size="lg" fontWeight="normal">
              {brand}
            </Text>
          </div>
        )
      })}
    </VStack>
  )
}

export { AsideContextList }
