import { CSSObject } from '@emotion/react'
import { Size } from '../type'

const SIZE: Record<Size, CSSObject> = {
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
const getSize = (size: Size) => {
  return SIZE[size]
}

export default getSize
