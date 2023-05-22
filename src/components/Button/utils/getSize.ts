import { CSSObject } from '@emotion/react'

import { ButtonStyle } from '..'

const SIZE: Record<ButtonStyle['size'], CSSObject> = {
  small: {
    height: '36px',
    padding: '0 14px',
  },
  medium: {
    height: '40px',
    padding: '0 16px',
  },
  large: {
    height: '48px',
    padding: '0 20px',
  },
}

const getSize = (size: ButtonStyle['size']) => {
  return SIZE[size]
}

export default getSize
