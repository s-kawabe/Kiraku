import 'react-image-crop/dist/ReactCrop.css'

import {
  Button,
  Center,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react'
import { css } from '@emotion/react'
import type { Dispatch, SetStateAction, VFC } from 'react'
import { useEffect, useState } from 'react'
import ReactCrop from 'react-image-crop'

type Props = {
  isOpen: boolean
  onClose: () => void
  setImage: Dispatch<SetStateAction<string | null>>
  setBlobImage: Dispatch<SetStateAction<Blob | null>>
}

const initialCrop: ReactCrop.Crop = {
  unit: '%',
  width: 100,
  aspect: 1 / 1,
}

const ImageTrimmingModal: VFC<Props> = (props: Props) => {
  const [src, setSrc] = useState<string | null>(null)
  const [image, setImage] = useState<HTMLImageElement | null>(null)
  const [crop, setCrop] = useState(initialCrop)
  const [croppedImageUrl, setCroppedImageUrl] = useState('')
  const [blobedImage, setBlobedImage] = useState<Blob | null>(null)

  const resetState = () => {
    setSrc(null)
    setImage(null)
    setCrop(initialCrop)
  }

  const wrapperOnClose = () => {
    resetState()
    props.onClose()
  }

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader()
      reader.addEventListener('load', () => {
        if (typeof reader.result === 'string') setSrc(reader.result)
      })
      reader.readAsDataURL(e.target.files[0])
    }
  }

  const onImageLoaded = (image: HTMLImageElement) => {
    setImage(image)
  }

  const onCropChange = (crop: ReactCrop.Crop) => {
    setCrop(crop)
  }

  const makeClientCrop = async () => {
    const ret = await getCroppedImg()
    if (ret) {
      setCroppedImageUrl(ret.fileUrl)
      setBlobedImage(ret.blob)
    }
  }

  const getCroppedImg = (): Promise<{ fileUrl: string; blob: Blob }> | undefined => {
    if (
      crop.height !== undefined &&
      crop.width !== undefined &&
      crop.x !== undefined &&
      crop.y !== undefined
    ) {
      if (image) {
        const canvas = document.createElement('canvas')
        const scaleX = image.naturalWidth / image.width
        const scaleY = image.naturalHeight / image.height
        canvas.width = crop.width
        canvas.height = crop.height
        const ctx = canvas.getContext('2d')

        if (ctx) {
          ctx.drawImage(
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width,
            crop.height
          )
        }

        return new Promise((resolve, _) => {
          canvas.toBlob((blob) => {
            if (!blob) {
              //reject(new Error('Canvas is empty'));
              console.error('Canvas is empty')
              return
            }
            const fileUrl = window.URL.createObjectURL(blob)
            resolve({ fileUrl, blob })
          }, 'image/jpeg')
        })
      }
    }
  }

  const onDone = () => {
    // croppedUrlをsetImageしてモーダルを閉じる
    props.setImage(croppedImageUrl)
    props.setBlobImage(blobedImage)
    wrapperOnClose()
  }

  useEffect(() => {
    ;(async () => {
      await makeClientCrop()
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [image])

  return (
    <>
      <Modal isOpen={props.isOpen} onClose={wrapperOnClose}>
        <ModalOverlay bg="rgba(30, 30, 30, 0.3)" />
        <ModalContent
          bg="gray.100"
          borderRadius="20px"
          boxShadow="0 25px 50px -12px rgba(0,0,0,0.4)"
          minH="500px"
        >
          <ModalHeader>
            <Text fontSize="18px">プロフィール画像を選択</Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            css={css`
              & .ReactCrop__crop-selection {
                border-radius: 50%;
              }
            `}
          >
            {src ? (
              <ReactCrop
                src={src}
                crop={crop}
                ruleOfThirds
                onImageLoaded={onImageLoaded}
                onComplete={makeClientCrop}
                onChange={onCropChange}
              />
            ) : (
              <label htmlFor="profile_image">
                <Center _hover={{ bg: 'gray.200' }} h="400px" borderRadius="10px">
                  <Input
                    type="file"
                    accept="image/*"
                    display="none"
                    id="profile_image"
                    onChange={onSelectFile}
                  />
                  <Text color="gray.600" fontSize="15px" fontWeight="bold">
                    画像を選択
                  </Text>
                </Center>
              </label>
            )}
          </ModalBody>

          <ModalFooter>
            <Button size="sm" mr={3} onClick={wrapperOnClose}>
              閉じる
            </Button>
            <Button size="sm" colorScheme="teal" onClick={onDone}>
              確定
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export { ImageTrimmingModal }
