import Image from 'next/image'
import type { VFC } from 'react'

export type NextImageProps = {
  src: string
  alt: string
  width: number
  height: number
}

const NextImage: VFC<NextImageProps> = (props: NextImageProps) => {
  return <Image src={props.src} alt={props.alt} width={props.width} height={props.height} />
}

export { NextImage }
