import { CSSObject } from '@emotion/react'
import { Size } from './type'

const SIZE: Record<Size, CSSObject> = {
  small: {
    height: '32px',
  },
  medium: {
    height: '48px',
  },
  large: {
    height: '60px',
  },
}
const getSize = (size: Size) => {
  return SIZE[size]
}

export default getSize
