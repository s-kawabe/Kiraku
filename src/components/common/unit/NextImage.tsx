import Image from 'next/image'
import type { VFC } from 'react'

export type NextImageProps = {
  src: string
  alt: string
  width?: number
  height?: number
}

const NextImage: VFC<NextImageProps> = (props: NextImageProps) => {
  // eslint-disable-next-line react/destructuring-assignment
  const { src, alt, width, height } = props

  // eslint-disable-next-line no-console

  return (
    <>
      {width === undefined && height === undefined ? (
        <Image
          src={props.src}
          alt={props.alt}
          layout="fill"
          objectFit="cover"
          objectPosition="50% 40%"
        />
      ) : (
        <Image src={src} alt={alt} width={width as number} height={height as number} />
      )}
    </>
  )
}

export { NextImage }
