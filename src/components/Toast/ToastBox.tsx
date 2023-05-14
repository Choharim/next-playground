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

const FadeIn = keyframes`
from { 
  opacity: 0;
}
`

const FadeOut = keyframes`
  to { 
    opacity: 0;
  }
`

const SlideIn = keyframes`
from {
  transform: translateY(${TOAST_TOP_POSITION}px)
}`

const ToastWrapper = styled(Flex)<ToastBoxStyle>`
  padding: 10px 12px;
  min-width: 200px;
  min-height: 32px;
  border-radius: 4px;
  ${({ theme, variety }) => getVariety(variety, theme)};
  animation: ${FadeIn} ${ANIMATED_DURATION}ms ease,
    ${SlideIn} ${ANIMATED_DURATION}ms ease,
    ${FadeOut} ${ANIMATED_DURATION}ms ease
      ${TOAST_TIMEOUT - ANIMATED_DURATION}ms;
`
