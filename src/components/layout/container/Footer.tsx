import type { VFC } from 'react'

const Footer: VFC = () => {
  return (
    <div>
      <small>&copy; {THIS_YEAR} shintaro_k All Rights Reserved.</small>
    </div>
  )
}

const THIS_YEAR = new Date().getFullYear()

export { Footer }
