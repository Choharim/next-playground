import { css, cx } from '@emotion/css'
import { useTheme } from '@emotion/react'

import { CheckChipProps } from '../CheckChip'
import { ClassName } from '@/shared/types/element'
import getVariety from '../utils/getVariety'

const useCheckChipTheme = (
  { variety, checked }: Required<Pick<CheckChipProps, 'variety' | 'checked'>>,
  className: ClassName
) => {
  const theme = useTheme()

  return cx(
    css`
      position: relative;

      ${checked && getVariety(theme)[variety]['checked']};
    `,
    className
  )
}

export default useCheckChipTheme
