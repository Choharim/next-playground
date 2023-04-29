import { HTMLAttributes } from 'react'
import { cx, css } from '@emotion/css'
import { getVariety } from './getVariety'
import { useTheme } from '@emotion/react'
import { ButtonProps } from '.'

const useButtonStyle = (
  { variety }: Pick<ButtonProps, 'variety'>,
  className: HTMLAttributes<HTMLElement>['className']
) => {
  const theme = useTheme()

  return cx(
    css`
      width: 100%;
      border-radius: 4px;

      ${getVariety(theme)[variety]}

      &:disabled {
        cursor: default;
        pointer-events: none;
      }
    `,
    className
  )
}

export default useButtonStyle
