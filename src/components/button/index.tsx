import React, { ComponentProps, forwardRef } from 'react'

import BaseButton from './BaseButton'

import { CombineType } from '@/shared/types/extendable'
import useButtonTheme from './useButtonTheme'
import { ButtonTheme } from './type'

type Props = CombineType<
  ComponentProps<typeof BaseButton>,
  Partial<ButtonTheme>
>

const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      variety = 'contain',
      color,
      size,
      className,
      children,
      ...buttonAttributes
    },
    ref
  ) => {
    const theme = useButtonTheme({ variety, color, size }, className)

    return (
      <BaseButton {...buttonAttributes} className={theme} ref={ref}>
        {children}
      </BaseButton>
    )
  }
)

export default Button

Button.displayName = 'Button'
