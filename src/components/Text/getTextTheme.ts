import { css, cx } from '@emotion/css'

import { TextThemeProps } from '.'
import { COLOR } from '@/theme/color'
import { FONT } from '@/theme/font'
import { ClassName } from '@/shared/types/element'

const getTextTheme = (
  { variety, color }: TextThemeProps,
  className: ClassName
) => {
  return cx(
    css`
      ${FONT[variety]}
      color: ${COLOR[color]};
    `,
    className
  )
}

export default getTextTheme
