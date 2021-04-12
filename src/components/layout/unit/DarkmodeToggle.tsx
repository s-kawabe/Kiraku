import { Switch } from '@chakra-ui/react'
import { css } from '@emotion/react'
import type { VFC } from 'react'
import { useEffect, useState } from 'react'

// eslint-disable-next-line react/display-name
const DarkmodeToggle: VFC = () => {
  const [isDark, setIsDark] = useState(false)

  const handleChange = (isDark: boolean) => {
    setIsDark(!isDark)
  }

  useEffect(() => {
    setIsDark(false) // TODO userが最後に設定したcolorModeを設定
  }, [])

  const toggle = css`
    & .chakra-switch__thumb {
      ${isDark ? `background: #2A303C;` : ``}
    }
  `

  return (
    <span>
      <Switch
        size="lg"
        colorScheme="gray"
        onChange={() => {
          handleChange(isDark)
        }}
        isChecked={isDark}
        css={toggle}
      />
    </span>
  )
}

export { DarkmodeToggle }
