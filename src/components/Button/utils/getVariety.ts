import { CSSObject, Theme } from '@emotion/react'

import { ButtonStyle } from '..'

const VARIETY: Record<ButtonStyle['variety'], (theme: Theme) => CSSObject> = {
  contain: (theme) => ({
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
  }),
  outline: (theme) => ({
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
  }),
  text: (theme) => ({
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
  }),
}

const getVariety = (variety: ButtonStyle['variety'], theme: Theme) => {
  return VARIETY[variety](theme)
}

export default getVariety
