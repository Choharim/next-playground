import { cx, css } from '@emotion/css'

import { FlexStyleProps } from '.'
import { ClassName } from '@/shared/types/element'

const getStyle = (
  { direction, justify, align, gap }: FlexStyleProps,
  className: ClassName
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
