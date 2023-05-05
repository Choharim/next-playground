import { css } from '@emotion/react'

import { TypoThemeProps } from '.'
import { COLOR } from '@/theme/color'
import { FONT } from '@/theme/font'

const getTypoTheme = ({ variety, color }: TypoThemeProps) => {
  return css`
    ${FONT[variety]}
    color: ${color === 'inherit' ? 'inherit' : COLOR[color]};
  `
}

export default getTypoTheme
