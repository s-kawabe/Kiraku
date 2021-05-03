import { Center, Icon, Input, Text } from '@chakra-ui/react'
import type { VFC } from 'react'
import type { Dispatch, SetStateAction } from 'react'
import { useState } from 'react'
import { RiUploadCloudFill } from 'react-icons/ri'

type ImageAreaProps = {
  setImage: Dispatch<SetStateAction<File | string | null>>
  image?: string
}

const ImageArea: VFC<ImageAreaProps> = (props: ImageAreaProps) => {
  const [preview, setPreview] = useState(props.image ?? 'none')
  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      setPreview(window.URL.createObjectURL(files[0]))
      props.setImage(files[0])
    }
  }

  return (
    <>
      <label htmlFor="photo">
        <Input
          type="file"
          display="none"
          id="photo"
          onChange={(e) => {
            handleChangeFile(e)
          }}
        />
        {preview === 'none' ? (
          <Center
            w={{ base: '330px', lg: '20vw' }}
            h={{ base: '470px', lg: '29vw' }}
            bg="gray.200"
            mt="20px"
            transition="all 0.9s"
            _hover={{ opacity: 0.8 }}
          >
            <Text fontWeight="bold" fontSize="16px" color="gray.600">
              画像を選択
              <Icon as={RiUploadCloudFill} w="7" h="7" ml="2" />
            </Text>
          </Center>
        ) : (
          <Center w={{ base: '330px', lg: '20vw' }} h={{ base: '470px', lg: '29vw' }}>
            <img src={preview} alt="preview" />
          </Center>
        )}
      </label>
    </>
  )
}

export { ImageArea }
