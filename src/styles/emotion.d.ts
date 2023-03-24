import '@emotion/react'

import { COLOR } from './theme/color'
import { FONT } from './theme/font'
import { MEDIA } from './theme/media'
import { SHADOW } from './theme/shadow'
import { Z_INDEX } from './theme/zIndex'
import { SHADOW } from './theme/shadow'
import { Z_INDEX } from './theme/zIndex'

declare module '@emotion/react' {
  export interface Theme {
    color: typeof COLOR
    font: typeof FONT
    media: typeof MEDIA
    shadow: typeof SHADOW
    zIndex: typeof Z_INDEX
  }
}
