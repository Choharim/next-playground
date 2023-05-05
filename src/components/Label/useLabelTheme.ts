import { css, useTheme } from '@emotion/react'

import { LabelThemeProps } from '.'

const useLabelTheme = ({ isRequired }: LabelThemeProps) => {
  const theme = useTheme()

  return css`
    margin-bottom: 4px;
    &:empty {
      display: none;
    }

    ${isRequired &&
    css`
      &::after {
        content: '*';
        color: ${theme.color.warning};
      }
    `}
  `
}

export default useLabelTheme
