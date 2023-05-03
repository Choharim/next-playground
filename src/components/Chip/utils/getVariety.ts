import { CSSObject, Theme } from '@emotion/react'

import { Variety } from '../type'

const getVariety = (
  theme: Theme
): {
  [key in Variety]: CSSObject
} => ({
  outline: {
    color: theme.color.primary400,
    border: `1px solid ${theme.color.primary400}`,
    ':hover': {
      backgroundColor: theme.color.primary50,
    },
  },
  fill: {
    color: theme.color.white,
    backgroundColor: theme.color.primary400,
    ':hover': {
      backgroundColor: theme.color.primary500,
    },
  },
})
export default getVariety
