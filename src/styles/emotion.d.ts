import '@emotion/react'

import { COLOR, FONT, MEDIA } from './theme'

declare module '@emotion/react' {
  export interface Theme {
    color: typeof COLOR
    font: typeof FONT
    media: typeof MEDIA
  }
}
