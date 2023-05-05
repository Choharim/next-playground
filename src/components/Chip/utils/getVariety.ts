import { CSSObject, Theme } from '@emotion/react'

import { ChipThemeProps } from '..'

type Status = 'default' | 'checked'

const getVariety = (
  theme: Theme
): {
  [key in ChipThemeProps['variety']]: { [key in Status]: CSSObject }
} => ({
  outline: {
    default: {
      color: theme.color.primary400,
      border: `1px solid ${theme.color.primary400}`,
      ':hover': {
        backgroundColor: theme.color.primary50,
      },
    },
    checked: {
      color: theme.color.primary400,
      backgroundColor: theme.color.primary50,
      ':hover': {
        backgroundColor: theme.color.primary50,
      },
    },
  },
  fill: {
    default: {
      color: theme.color.white,
      backgroundColor: theme.color.primary400,
      ':hover': {
        backgroundColor: theme.color.primary500,
      },
    },
    checked: {
      color: theme.color.white,
      backgroundColor: theme.color.primary500,
      ':hover': {
        backgroundColor: theme.color.primary500,
      },
    },
  },
})
export default getVariety
