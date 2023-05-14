import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { useMemo } from 'react'

import { ColorKey } from '@/styles/type'

interface SpinnerStyle {
  color: ColorKey
  size: number
}

const Spinner = ({
  color = 'primary400',
  size = 22,
}: Partial<SpinnerStyle>) => {
  const styles = useMemo(
    () => ({
      color,
      size,
    }),
    [color, size]
  )

  return <SpinnerWrapper {...styles} role="status" />
}

export default Spinner

const rotation = keyframes`
   0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

const SpinnerWrapper = styled.span<SpinnerStyle>`
  display: inline-block;
  ${({ size, color, theme }) => css`
    border: ${size / 7}px solid ${theme.color[color]};
    width: ${size}px;
    height: ${size}px;
  `}
  border-bottom-color: transparent;
  border-radius: 50%;

  animation: ${rotation} 1s linear infinite;
`
