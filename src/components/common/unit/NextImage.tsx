import Image from 'next/image'
import type { VFC } from 'react'

export type NextImageProps = {
  src: string
  alt: string
  width?: number
  height?: number
  imageType?: 'hero' | 'card'
}

const NextImage: VFC<NextImageProps> = (props: NextImageProps) => {
  // eslint-disable-next-line react/destructuring-assignment
  const { src, alt, width, height, imageType } = props

  // eslint-disable-next-line no-console

  return (
    <>
      {imageType ? (
        imageType === 'hero' ? (
          <Image
            src={src}
            alt={alt}
            width={1920}
            height={600}
            priority={true}
            objectFit="cover"
            objectPosition="55% 38%"
          />
        ) : (
          <Image src={src} alt={alt} objectFit="contain" width={200} height={200} />
        )
      ) : (
        <Image src={src} alt={alt} width={width as number} height={height as number} />
      )}
    </>
  )
}

export { NextImage }
