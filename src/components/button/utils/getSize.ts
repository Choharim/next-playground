import { CSSObject } from '@emotion/react'

import { ButtonTheme } from '..'

const SIZE: Record<ButtonTheme['size'], CSSObject> = {
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

const getSize = (size: ButtonTheme['size']) => {
  return SIZE[size]
}

export default getSize
