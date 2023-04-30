import { CSSObject, Theme } from '@emotion/react'

import { Variety } from './type'

const getVariety = (
  theme: Theme
): {
  [key in Variety]: CSSObject
} => ({
  contain: {
    color: theme.color.white,
    backgroundColor: theme.color.primary500,

    ':hover': {
      backgroundColor: theme.color.primary600,
    },
    ':active': {
      backgroundColor: theme.color.primary700,
    },
    ':disabled': {
      color: theme.color.grey500,
      backgroundColor: theme.color.grey200,
    },
  },
  outline: {
    border: `1px solid ${theme.color.primary500}`,
    color: theme.color.primary500,

    ':hover': {
      backgroundColor: theme.color.primary50,
    },
    ':active': {
      backgroundColor: theme.color.primary100,
    },
    ':disabled': {
      border: `1px solid ${theme.color.grey500}`,
      color: theme.color.grey500,
      backgroundColor: theme.color.grey200,
    },
  },
  text: {
    color: theme.color.primary500,

    ':hover': {
      backgroundColor: theme.color.grey200,
    },
    ':active': {
      backgroundColor: theme.color.grey300,
    },
    ':disabled': {
      backgroundColor: theme.color.grey100,
      color: theme.color.grey500,
    },
  },
})

export default getVariety
