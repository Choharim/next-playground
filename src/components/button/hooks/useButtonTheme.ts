import { cx, css } from '@emotion/css'
import { useTheme } from '@emotion/react'

import getVariety from '../utils/getVariety'
import getSize from '../utils/getSize'
import { ClassName } from '@/shared/types/element'
import { ButtonTheme } from '..'

const useButtonTheme = (
  { variety, size }: ButtonTheme,
  className: ClassName
) => {
  const theme = useTheme()

  return cx(
    css`
      border-radius: 4px;

      ${getVariety(theme)[variety]}
      transition: 150ms ease;

      ${getSize(size)}
    `,
    className
  )
}

export default useButtonTheme
