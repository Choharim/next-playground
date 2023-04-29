import { HTMLAttributes } from 'react'
import { cx, css } from '@emotion/css'

const getBasicStyle = (className: HTMLAttributes<HTMLElement>['className']) => {
  return cx(
    css`
      width: 100%;
      color: inherit;
      border-radius: inherit;
      border: none;

      &:disabled {
        cursor: default;
        pointer-events: none;
      }
    `,
    className
  )
}

export default getBasicStyle
