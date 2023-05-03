import { css, cx } from '@emotion/css'
import { useTheme } from '@emotion/react'

import { ClassName } from '@/shared/types/element'
import { ChipThemeProps } from '..'
import getVariety from '../utils/getVariety'
import getSize from '../utils/getSize'

const useChipTheme = (
  { variety, clickable, size }: ChipThemeProps,
  className: ClassName
) => {
  const theme = useTheme()

  return cx(
    css`
      display: flex;
      justify-content: center;
      align-items: center;

      width: fit-content;
      border-radius: 16px;
      white-space: nowrap;

      ${getSize()[size]};
      ${getVariety(theme)[variety]}

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
