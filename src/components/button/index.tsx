import { ComponentProps, forwardRef } from 'react'

import BaseButton from './BaseButton'

import { CombineType } from '@/shared/types/extendable'
import useButtonTheme from './hooks/useButtonTheme'

type Variety = 'outline' | 'contain' | 'text'
type Size = 'small' | 'medium' | 'large'

export interface ButtonTheme {
  variety: Variety
  size: Size
}

type Props = CombineType<
  ComponentProps<typeof BaseButton>,
  Partial<ButtonTheme>
>

const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      variety = 'contain',
      size = 'medium',
      className,
      children,
      ...buttonAttributes
    },
    ref
  ) => {
    const theme = useButtonTheme({ variety, size }, className)

    return (
      <BaseButton {...buttonAttributes} className={theme} ref={ref}>
        {children}
      </BaseButton>
    )
  }
)

export default Button

Button.displayName = 'Button'
