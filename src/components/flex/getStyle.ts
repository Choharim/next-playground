import { css } from '@emotion/react'
import { FlexStyleProps } from '.'

const getStyle = ({ direction, justify, align, gap }: FlexStyleProps) => {
  return css`
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
    gap: ${gap};
  `
}

export default getStyle
