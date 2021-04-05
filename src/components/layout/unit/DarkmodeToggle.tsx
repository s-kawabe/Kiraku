import { Switch, Tooltip } from '@chakra-ui/react'
import { css } from '@emotion/react'
import type { VFC } from 'react'
import { useEffect, useState } from 'react'

import { useIsDesktop } from '@/utils/methods/customeHooks'

// eslint-disable-next-line react/display-name
const DarkmodeToggle: VFC = () => {
  const [isDark, setIsDark] = useState(false)
  const [isDesktop] = useIsDesktop()

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
    <Tooltip label="カラーモードを変更" bg="gray.400" size="sm">
      <span>
        <Switch
          size={isDesktop ? 'lg' : 'md'}
          colorScheme="gray"
          onChange={() => {
            handleChange(isDark)
          }}
          isChecked={isDark}
          css={toggle}
        />
      </span>
    </Tooltip>
  )
}

export { DarkmodeToggle }
