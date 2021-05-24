import { Center, Heading, VStack } from '@chakra-ui/react'

import { ProfileCangeForm } from '@/components/forms/container'
import { LayoutWithHead } from '@/components/layout/container'

const UserProfileEditPage = () => {
  return (
    <LayoutWithHead title="プロフィール変更">
      <>
        <Center h={['800px', 'calc(100vh - 150px)']} bg="#EDEDED">
          <VStack>
            <Heading color="gray.700" size="md" mb="30px">
              アカウント設定
            </Heading>
            <ProfileCangeForm />
          </VStack>
        </Center>
      </>
    </LayoutWithHead>
  )
}

// eslint-disable-next-line import/no-default-export
export default UserProfileEditPage
