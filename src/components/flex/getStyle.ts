import { cx, css } from '@emotion/css'
import { FlexProps } from '.'
import { HTMLAttributes } from 'react'

const getStyle = (
  { direction, justify, align, gap }: FlexProps,
  className: HTMLAttributes<HTMLElement>['className']
) => {
  return cx(
    css`
      display: flex;
      flex-direction: ${direction};
      justify-content: ${justify};
      align-items: ${align};
      gap: ${gap};
    `,
    className
  )
}

export default getStyle
