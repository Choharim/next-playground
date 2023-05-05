import { css, cx } from '@emotion/css'
import { useTheme } from '@emotion/react'

import { ClassName } from '@/shared/types/element'
import { ChipThemeProps } from '..'
import getVariety from '../utils/getVariety'
import getSize from '../utils/getSize'

const useChipTheme = (
  { variety, size, clickable }: ChipThemeProps,
  className: ClassName
) => {
  const theme = useTheme()

  return cx(
    css`
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
    `,
    className
  )
}

export default useChipTheme
