import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { useMemo } from 'react'

import { ColorKey } from '@/styles/type'
import { rotation360 } from '@/styles/utils/animation'

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

const SpinnerWrapper = styled.span<SpinnerStyle>`
  display: inline-block;
  ${({ size, color, theme }) => css`
    border: ${size / 7}px solid ${theme.color[color]};
    width: ${size}px;
    height: ${size}px;
  `}
  border-bottom-color: transparent;
  border-radius: 50%;

  animation: ${rotation360} 1s linear infinite;
`
