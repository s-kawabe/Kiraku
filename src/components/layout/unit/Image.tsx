import Image from 'next/image'
import type { VFC } from 'react'

export type LogoProps = {
  src: string
  alt: string
  width: number
  height: number
}

const Logo: VFC<LogoProps> = (props: LogoProps) => {
  return <Image src={props.src} alt={props.alt} width={props.width} height={props.height} />
}

export { Logo }
