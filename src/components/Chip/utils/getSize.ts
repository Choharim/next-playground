import { Size } from '../type'
import { CSSObject } from '@emotion/react'

const getSize = (): { [key in Size]: CSSObject } => ({
  small: {
    padding: '0 8px',
    height: '20px',
  },
  medium: {
    padding: '0 12px',
    height: '32px',
  },
})
export default getSize
