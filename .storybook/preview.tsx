import React from 'react'
import { StoryContext } from '@storybook/react'
import { ChakraWrapper } from '../src/chakra/ChakraWrapper'
import './__mocks/NextImage'

import { css, Global } from '@emotion/react'
import reset from 'emotion-reset'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}

const base = css`
  body {
    font-family: 'Helvetica Neue', Arial, 'Hiragino Kaku Gothic ProN', 'Hiragino Sans',
      'BIZ UDPGothic', Meiryo, sans-serif !important;
  }
`

/**
 * Add global context for RTL-LTR switching
 */
export const globalTypes = {
  direction: {
    name: 'Direction',
    description: 'Direction for layout',
    defaultValue: 'LTR',
    toolbar: {
      icon: 'globe',
      items: ['LTR', 'RTL'],
    },
  },
}

const withChakra = (StoryFn: Function, context: StoryContext) => {
  const { direction } = context.globals
  const dir = direction.toLowerCase()
  return (
    <>
      <Global
        styles={css`
          ${reset}
          ${base}
        `}
      />
      <ChakraWrapper addTheme={{ direction: dir }}>
        <div dir={dir} id="story-wrapper" style={{ minHeight: '100vh' }}>
          <StoryFn />
        </div>
      </ChakraWrapper>
    </>
  )
}

export const decorators = [withChakra]
