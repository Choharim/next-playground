import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'

import { TOAST_TIMEOUT, TOAST_TOP_POSITION, getVariety } from './constant'
import { Variety } from './type'

type Props = {
  children: React.ReactNode
  variety: Variety
}
const ToastBox = ({ children, variety }: Props) => {
  return (
    <Box variety={variety}>
      <Typo>{children}</Typo>
    </Box>
  )
}

export default ToastBox

const fadeIn = keyframes`
from { 
  opacity: 0;
}
`

const fadeOut = keyframes`
  to { 
    opacity: 0;
  }
`

const slideIn = keyframes`
from {
  transform: translateY(${TOAST_TOP_POSITION}px)
}
`

const ANIMATED_DURATION = 300

const Box = styled.div<Pick<Props, 'variety'>>`
  display: flex;
  justify-content: center;
  padding: 10px 12px;
  border-radius: 4px;
  min-width: 200px;
  min-height: 32px;

  ${({ variety, theme }) => variety && getVariety(theme)[variety]};

  animation: ${fadeIn} ${ANIMATED_DURATION}ms ease,
    ${slideIn} ${ANIMATED_DURATION}ms ease,
    ${fadeOut} ${ANIMATED_DURATION}ms ease
      ${TOAST_TIMEOUT - ANIMATED_DURATION}ms;
`

const Typo = styled.p`
  color: inherit;
  ${({ theme }) => theme.font.body_1};
  white-space: nowrap;
`
