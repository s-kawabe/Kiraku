import { css } from '@emotion/react'

import type { Top10TopicAndBrandQuery } from '@/apollo/graphql'

export type SideMenu = Top10TopicAndBrandQuery | null

export type Gender = 'ALL' | 'MEN' | 'WOMEN'

export const headingReset = css`
  h1 {
    font-size: 2em;
    font-weight: bold;
  }

  h2 {
    font-size: 1.5em;
    font-weight: bold;
  }

  h3 {
    font-size: 1.2em;
    font-weight: bold;
  }

  h4,
  h5 {
    font-size: 1em;
  }
`
