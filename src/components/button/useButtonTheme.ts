import { HTMLAttributes } from 'react'
import { cx, css } from '@emotion/css'
import getVariety from './getVariety'
import { useTheme } from '@emotion/react'
import { ButtonTheme } from './type'
import getSize from './getSize'

const useButtonTheme = (
  { variety, color, size = 'medium' }: Partial<ButtonTheme>,
  className: HTMLAttributes<HTMLElement>['className']
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
    `,
    css`
      color: ${!!color ? theme.color[color] : undefined};
      ${getSize(size)};
    `,
    className
  )
}

export default useButtonTheme
