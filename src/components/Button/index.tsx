import { ComponentProps, forwardRef, useMemo } from 'react'
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
  shape: 'box' | 'capsule'
}

type ButtonProps = CombineType<
  ComponentProps<typeof BaseButton>,
  Partial<ButtonStyle>
>

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variety = 'contain',
      size = 'medium',
      shape = 'box',
      children,
      ...buttonAttributes
    },
    forwardRef
  ) => {
    const styles = useMemo(
      () => ({ variety, size, shape }),
      [variety, size, shape]
    )

    return (
      <ThemeButton {...buttonAttributes} {...styles} ref={forwardRef}>
        {children}
      </ThemeButton>
    )
  }
)

export default Button

Button.displayName = 'Button'

const ThemeButton = styled(BaseButton)<ButtonStyle>`
  ${({ shape }) =>
    shape === 'box'
      ? css`
          border-radius: 4px;
        `
      : css`
          border-radius: 9999px;
          width: fit-content;
        `}

  ${({ theme, variety }) => css`
    ${getVariety(variety, theme)};
  `};

  ${({ size }) => css`
    ${getSize(size)};
  `};

  transition: 150ms ease;
`
