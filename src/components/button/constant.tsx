import { CSSObject } from '@emotion/react'

import { THEME } from '@/styles/theme'
import { Variety } from './type'

export const VARIETY: {
  [key in Variety]: CSSObject
} = {
  contain: {
    color: THEME.color.white,
    backgroundColor: THEME.color.primary500,

    ':is(:hover, :focus)': {
      backgroundColor: THEME.color.primary600,
    },
    ':active': {
      backgroundColor: THEME.color.primary700,
    },
    ':disabled': {
      color: THEME.color.grey500,
      backgroundColor: THEME.color.grey200,
    },
  },
  outline: {
    border: `1px solid ${THEME.color.primary500}`,
    color: THEME.color.primary500,

    ':is(:hover, :focus)': {
      backgroundColor: THEME.color.primary50,
    },
    ':active': {
      backgroundColor: THEME.color.primary100,
    },
    ':disabled': {
      border: `1px solid ${THEME.color.grey500}`,
      color: THEME.color.grey500,
      backgroundColor: THEME.color.grey200,
    },
  },
  text: {
    color: THEME.color.primary500,

    ':is(:hover, :focus)': {
      backgroundColor: THEME.color.primary50,
    },
    ':active': {
      backgroundColor: THEME.color.primary100,
    },
    ':disabled': {
      backgroundColor: THEME.color.grey100,
      color: THEME.color.grey500,
    },
  },
}
