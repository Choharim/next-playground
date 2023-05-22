import React from 'react'
import styled from '@emotion/styled'

import Typo from '../Typo'
import Flex from '../Flex'

import { Variety } from './type'
import { keyframes } from '@emotion/react'
import { TOAST_TIMEOUT, TOAST_TOP_POSITION } from './constant'
import getVariety from './getVariety'

export interface ToastBoxStyle {
  variety: Variety
}

interface ToastBoxProps extends ToastBoxStyle {
  children: React.ReactNode
}
const ToastBox = ({ children, variety }: ToastBoxProps) => {
  return (
    <ToastWrapper justify="center" variety={variety}>
      <Typo color="inherit">{children}</Typo>
    </ToastWrapper>
  )
}

export default ToastBox

const ANIMATED_DURATION = 300

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
}`

const ToastWrapper = styled(Flex)<ToastBoxStyle>`
  padding: 10px 12px;
  min-width: 200px;
  min-height: 32px;
  border-radius: 4px;
  ${({ theme, variety }) => getVariety(variety, theme)};
  animation: ${fadeIn} ${ANIMATED_DURATION}ms ease,
    ${slideIn} ${ANIMATED_DURATION}ms ease,
    ${fadeOut} ${ANIMATED_DURATION}ms ease
      ${TOAST_TIMEOUT - ANIMATED_DURATION}ms;
`
