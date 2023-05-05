import { css, keyframes, useTheme } from '@emotion/react'

import { SpinerTheme } from '.'

export const useSpinerTheme = ({
  spinerColor: color,
  spinerSize: size,
}: SpinerTheme) => {
  const theme = useTheme()

  return css`
    display: inline-block;
    border: ${size / 7}px solid ${theme.color[color]};
    border-bottom-color: transparent;
    border-radius: 50%;

    width: ${size}px;
    height: ${size}px;

    animation: ${rotation} 1s linear infinite;
  `
}

const rotation = keyframes`
   0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`
