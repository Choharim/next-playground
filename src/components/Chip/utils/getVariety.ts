import { Theme } from '@emotion/react'

import { ChipStyle } from '..'

const VARIETY_BY_STATUS = {
  outline: {
    default: (theme: Theme) => ({
      color: theme.color.primary400,
      border: `1px solid ${theme.color.primary400}`,
      ':hover': {
        backgroundColor: theme.color.primary50,
      },
    }),
    checked: (theme: Theme) => ({
      color: theme.color.primary400,
      backgroundColor: theme.color.primary50,
      ':hover': {
        backgroundColor: theme.color.primary50,
      },
    }),
  },
  fill: {
    default: (theme: Theme) => ({
      color: theme.color.white,
      backgroundColor: theme.color.primary400,
      ':hover': {
        backgroundColor: theme.color.primary500,
      },
    }),
    checked: (theme: Theme) => ({
      color: theme.color.white,
      backgroundColor: theme.color.primary500,
      ':hover': {
        backgroundColor: theme.color.primary500,
      },
    }),
  },
}

type Status = 'default' | 'checked'
interface GetVarietyArg extends Pick<ChipStyle, 'variety'> {
  status: Status
}
const getVariety = ({ variety, status }: GetVarietyArg, theme: Theme) => {
  return VARIETY_BY_STATUS[variety][status](theme)
}

export default getVariety
