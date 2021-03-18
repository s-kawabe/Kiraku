import { Button } from '@chakra-ui/react'
import { css } from '@emotion/react'
import Link from 'next/link'

const items = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
]

export const Header = () => {
  return (
    <header>
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
    </header>
  )
}
