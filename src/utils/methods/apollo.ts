import type { Reference } from '@apollo/client'
import isEqual from 'lodash.isequal'

export const mergeFields = (existing: Reference[], incoming: Reference[]) => {
  return [...incoming, ...existing].reduce((accum: any[], current: any) => {
    const isDuplicated = accum.some((item) => {
      return isEqual(item, current)
    })
    if (isDuplicated) return accum
    return [...accum, current]
  }, [])
}
