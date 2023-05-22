import { css } from '@emotion/react'

import { PixelSize } from '@/shared/types/narrow'

export type Size = 'small' | 'medium' | 'large'

const SIZE: Readonly<Record<Size, PixelSize>> = {
  small: '22px',
  medium: '28px',
  large: '32px',
}

const getSize = (size: Size) => {
  return css`
    border-width: calc(${SIZE[size]} / 7);
    width: ${SIZE[size]};
    height: ${SIZE[size]};
  `
}

export default getSize
