import { CSSObject, Theme } from '@emotion/react'

import { ChipStyle } from '..'

const VARIETY_BY_STATUS: Record<
  ChipStyle['variety'],
  { [key in Status]: (theme: Theme) => CSSObject }
> = {
  outline: {
    default: () => ({
      ':hover': { backgroundColor: 'initial' },
    }),
    checked: (theme: Theme) => ({
      backgroundColor: theme.color.primary50,
    }),
  },
  fill: {
    default: (theme: Theme) => ({
      ':hover': { backgroundColor: theme.color.primary400 },
    }),
    checked: (theme: Theme) => ({
      backgroundColor: theme.color.primary500,
    }),
  },
}

const VARIETY: Record<ChipStyle['variety'], (theme: Theme) => CSSObject> = {
  outline: (theme: Theme) => ({
    color: theme.color.primary400,
    border: `1px solid ${theme.color.primary400}`,

    ':hover': {
      backgroundColor: theme.color.primary50,
    },
  }),

  fill: (theme: Theme) => ({
    color: theme.color.white,
    backgroundColor: theme.color.primary400,

    ':hover': {
      backgroundColor: theme.color.primary500,
    },
  }),
}

type Status = 'default' | 'checked'

interface GetVarietyArg extends Pick<ChipStyle, 'variety'> {
  status?: Status
}

const getVariety = ({ variety, status }: GetVarietyArg, theme: Theme) => {
  if (!!status) {
    return VARIETY_BY_STATUS[variety][status](theme)
  } else {
    return VARIETY[variety](theme)
  }
}

export default getVariety
