import { css, useTheme } from '@emotion/react'

import { CheckChipProps } from '../CheckChip'
import getVariety from '../utils/getVariety'

const useCheckChipTheme = ({
  variety,
  checked,
}: Required<Pick<CheckChipProps, 'variety' | 'checked'>>) => {
  const theme = useTheme()

  return css`
    position: relative;

    ${checked && getVariety({ status: 'checked', variety }, theme)};
  `
}

export default useCheckChipTheme
