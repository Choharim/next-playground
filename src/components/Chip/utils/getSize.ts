import { CSSObject } from '@emotion/react'

import { ChipStyle } from '..'

const SIZE: Record<ChipStyle['size'], CSSObject> = {
  small: {
    padding: '0 8px',
    height: '20px',
  },
  medium: {
    padding: '0 12px',
    height: '32px',
  },
}

const getSize = (size: ChipStyle['size']) => {
  return SIZE[size]
}
export default getSize
