import { css, cx } from '@emotion/css'

import { TypoThemeProps } from '.'
import { COLOR } from '@/theme/color'
import { FONT } from '@/theme/font'
import { ClassName } from '@/shared/types/element'

const getTypoTheme = (
  { variety, color }: TypoThemeProps,
  className: ClassName
) => {
  return cx(
    css`
      ${FONT[variety]}
      color: ${color === 'inherit' ? 'inherit' : COLOR[color]};
    `,
    className
  )
}

export default getTypoTheme
