import { CSSObject } from '@emotion/react'

import { ChipThemeProps } from '..'

const getSize = (): { [key in ChipThemeProps['size']]: CSSObject } => ({
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
