import { Theme } from '@emotion/react'

export const COLOR = {
  white: '#ffffff',
  black: '#000000',
} as const

export const FONT = {} as const

export const MEDIA = {
  mobile: `@media screen and (max-width: 767px)`,
  tablet: `@media screen and (max-width: 1279px)`,
} as const

export const THEME: Theme = {
  color: COLOR,
  font: FONT,
  media: MEDIA,
}
