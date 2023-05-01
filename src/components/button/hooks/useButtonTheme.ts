import { cx, css } from '@emotion/css'
import { useTheme } from '@emotion/react'

import getVariety from '../utils/getVariety'
import getSize from '../utils/getSize'
import { ButtonTheme } from '../type'
import { ClassName } from '@/shared/types/element'

const useButtonTheme = (
  { variety, size }: Partial<ButtonTheme>,
  className: ClassName
) => {
  const theme = useTheme()

  return cx(
    css`
      border-radius: 4px;

      ${!!variety &&
      css`
        ${getVariety(theme)[variety]}
      `}
      transition: 150ms ease;

      ${!!size &&
      css`
        ${getSize(size)}
      `};
    `,
    className
  )
}

export default useButtonTheme
