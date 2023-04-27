import { HTMLAttributes } from 'react'
import { cx, css } from '@emotion/css'

import { FlexStyleProps } from '.'

const getStyle = (
  { direction, justify, align, gap }: FlexStyleProps,
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
