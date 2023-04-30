import { CSSObject, Theme } from '@emotion/react'

import { Variety } from './type'

export const getVariety = (theme: Theme): { [key in Variety]: CSSObject } => ({
  confirm: {
    backgroundColor: theme.color.primary200,
    color: theme.color.white,
  },
  error: {
    backgroundColor: theme.color.warning,
    color: theme.color.white,
  },
  normal: {
    backgroundColor: theme.color.primary200,
    color: theme.color.white,
  },
})

export const DESC: { [key in Variety]: string } = {
  confirm: '✅ 확인되었습니다.',
  error: '❗ 오류가 발생했습니다.',
  normal: '',
}

export const TOAST_TOP_POSITION = 24

export const TOAST_TIMEOUT = 3000
