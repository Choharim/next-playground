import { ComponentProps, forwardRef } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

import BaseButton from './BaseButton'

import getVariety from './utils/getVariety'
import getSize from './utils/getSize'
import { CombineType } from '@/shared/types/extendable'

type Variety = 'outline' | 'contain' | 'text'
type Size = 'small' | 'medium' | 'large'

export interface ButtonStyle {
  variety: Variety
  size: Size
}

type ButtonProps = CombineType<
  ComponentProps<typeof BaseButton>,
  Partial<ButtonStyle>
>

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variety = 'contain', size = 'medium', children, ...buttonAttributes },
    forwardRef
  ) => {
    return (
      <ThemeButton
        {...buttonAttributes}
        variety={variety}
        size={size}
        ref={forwardRef}
      >
        {children}
      </ThemeButton>
    )
  }
)

export default Button

Button.displayName = 'Button'

const ThemeButton = styled(BaseButton)<ButtonStyle>`
  border-radius: 4px;

  ${({ theme, variety, size }) => css`
    ${getVariety(variety, theme)};
    ${getSize(size)};
  `};
  transition: 150ms ease;
`
