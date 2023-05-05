import { CSSObject } from '@emotion/react'
import { ButtonTheme } from '..'

const SIZE: Record<ButtonTheme['size'], CSSObject> = {
  small: {
    height: '30px',
  },
  medium: {
    height: '40px',
  },
  large: {
    height: '50px',
  },
}
const getSize = (size: ButtonTheme['size']) => {
  return SIZE[size]
}

export default getSize
