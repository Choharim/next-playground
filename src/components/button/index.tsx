import React, { ComponentPropsWithoutRef, forwardRef } from 'react'
import useButtonStyle from './useButtonStyle'
import { Variety } from './type'

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variety: Variety
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variety, children, className, ...buttonAttributes }, forwardRef) => {
    const style = useButtonStyle({ variety }, className)

    return (
      <button {...buttonAttributes} className={style} ref={forwardRef}>
        {children}
      </button>
    )
  }
)

export default Button

Button.displayName = 'Button'
