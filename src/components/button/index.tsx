import React, { ComponentProps, forwardRef } from 'react'

import BaseButton from './BaseButton'

import { CombineType } from '@/shared/types/extendable'
import useButtonTheme from './hooks/useButtonTheme'
import { ButtonTheme } from './type'

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
      ...attributes
    },
    ref
  ) => {
    const theme = useButtonTheme({ variety, size }, className)

    return (
      <BaseButton {...attributes} className={theme} ref={ref}>
        {children}
      </BaseButton>
    )
  }
)

export default Button

Button.displayName = 'Button'
