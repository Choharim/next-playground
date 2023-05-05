import { css, useTheme } from '@emotion/react'

import getVariety from '../utils/getVariety'
import getSize from '../utils/getSize'
import { ButtonTheme } from '..'

const useButtonTheme = ({ variety, size }: ButtonTheme) => {
  const theme = useTheme()

  return css`
    border-radius: 4px;

    ${getVariety(theme)[variety]}
    transition: 150ms ease;

    ${getSize(size)}
  `
}

export default useButtonTheme
