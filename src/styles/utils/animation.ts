import { keyframes } from '@emotion/react'

export const rotation360 = keyframes`
   0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`
export const fadeIn = keyframes`
from {
      opacity: 0;
  }
  to {
      opacity: 1;
  }
`
