import { css, useTheme } from '@emotion/react'

import { ChipThemeProps } from '..'
import getVariety from '../utils/getVariety'
import getSize from '../utils/getSize'

const useChipTheme = ({ variety, size, clickable }: ChipThemeProps) => {
  const theme = useTheme()

  return css`
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 16px;
    width: fit-content;
    white-space: nowrap;

    ${getSize()[size]};
    ${getVariety(theme)[variety]['default']}

    ${clickable
      ? css`
          cursor: pointer;
        `
      : css`
          cursor: default;
          pointer-events: none;
        `}
  `
}

export default useChipTheme
