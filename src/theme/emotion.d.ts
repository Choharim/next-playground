import '@emotion/react'

import { Color, Font, Media, Shadow, ZIndex } from './type'

declare module '@emotion/react' {
  export interface Theme {
    color: Color
    font: Font
    media: Media
    shadow: Shadow
    zIndex: ZIndex
  }
}
