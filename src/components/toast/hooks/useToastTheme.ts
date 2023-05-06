import { ComponentProps } from 'react'

import ToastBox from '../ToastBox'
import { css, keyframes, useTheme } from '@emotion/react'
import { TOAST_TIMEOUT, TOAST_TOP_POSITION, getVariety } from '../constant'

const ANIMATED_DURATION = 300

const useToastTheme = ({
  variety,
}: Pick<ComponentProps<typeof ToastBox>, 'variety'>) => {
  const theme = useTheme()

  return css`
    padding: 10px 12px;
    border-radius: 4px;
    min-width: 200px;
    min-height: 32px;

    ${getVariety(theme)[variety]};

    animation: ${FadeIn} ${ANIMATED_DURATION}ms ease,
      ${SlideIn} ${ANIMATED_DURATION}ms ease,
      ${FadeOut} ${ANIMATED_DURATION}ms ease
        ${TOAST_TIMEOUT - ANIMATED_DURATION}ms;
  `
}

export default useToastTheme

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
