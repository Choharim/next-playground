import { css, cx } from '@emotion/css'
import { useTheme } from '@emotion/react'

import { LabelThemeProps } from './Label'
import { ClassName } from '@/shared/types/element'

const useLabelTheme = (
  { isRequired }: LabelThemeProps,
  className: ClassName
) => {
  const theme = useTheme()

  return cx(
    css`
      margin-bottom: 4px;
      &:empty {
        display: none;
      }

      ${isRequired &&
      css`
        &::after {
          content: '*';
          color: ${theme.color.warning};
        }
      `}
    `,
    className
  )
}

export default useLabelTheme
