import { css, cx } from '@emotion/css'
import { useTheme } from '@emotion/react'

import { CheckChipProps } from '../CheckChip'
import { ClassName } from '@/shared/types/element'
import { getCheckedVariety } from '../utils/getVariety'

const useCheckChipTheme = (
  { variety, checked }: Pick<CheckChipProps, 'variety' | 'checked'>,
  className: ClassName
) => {
  const theme = useTheme()

  return cx(
    css`
      position: relative;

      ${checked && variety && getCheckedVariety(theme)[variety]};
    `,
    className
  )
}

export default useCheckChipTheme
