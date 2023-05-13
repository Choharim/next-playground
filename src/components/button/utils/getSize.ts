import { CSSObject } from '@emotion/react'

import { ButtonStyle } from '..'

const SIZE: Record<ButtonStyle['size'], CSSObject> = {
  small: {
    height: '30px',
    padding: '0 8px',
  },
  medium: {
    height: '40px',
    padding: '0 12px',
  },
  large: {
    height: '50px',
    padding: '0 16px',
  },
}

const getSize = (size: ButtonStyle['size']) => {
  return SIZE[size]
}

export default getSize
