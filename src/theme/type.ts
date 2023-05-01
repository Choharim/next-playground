import { COLOR } from './color'
import { FONT } from './font'
import { MEDIA } from './media'
import { SHADOW } from './shadow'
import { Z_INDEX } from './zIndex'

export type Color = typeof COLOR
export type ColorKey = keyof Color

export type Font = typeof FONT
export type FontKey = keyof Font

export type Media = typeof MEDIA

export type Shadow = typeof SHADOW

export type ZIndex = typeof Z_INDEX
