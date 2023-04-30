import { css, cx } from '@emotion/css'
import { HTMLAttributes } from 'react'

export const useResetStyle = (
  className: HTMLAttributes<HTMLElement>['className']
) => {
  return cx(
    css`
      width: 100%;
      font-family: inherit;
      background-color: inherit;
      outline: none;
      border: none;

      &:disabled {
        cursor: not-allowed;
      }
    `,
    className
  )
}
