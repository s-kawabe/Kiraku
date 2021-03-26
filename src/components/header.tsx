import { Button } from '@chakra-ui/react'
import { css } from '@emotion/react'
import Link from 'next/link'

import { BaseButton } from '@/components/commonAtoms/BaseButton'
// import styled from '@emotion/styled'

const items = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
]

// const Back = styled.div`
//   background-color: #1e2b34;
// `

export const Header = () => {
  return (
    // <Back>
    <header>
      <img src="/logo.svg" alt="logo" width="260" />
      <h1>Title</h1>
      <nav>
        {items.map(({ href, label }) => {
          return (
            <Link key={href} href={href}>
              <a style={{ display: 'inline-block', padding: 12 }}>{label}</a>
            </Link>
          )
        })}
      </nav>
      <Button
        color="teal"
        m={10}
        css={css`
          text-shadow: 1px 1px 2px #707070;
        `}
      >
        hogehoge
      </Button>
      <BaseButton color="red" text="hoge" />
      <BaseButton color="green" text="huga" />
      <BaseButton color="teal" text="piyo" />
    </header>
    // </Back>
  )
}
