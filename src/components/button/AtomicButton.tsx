import React, { ComponentPropsWithoutRef, forwardRef } from 'react'
import getBasicStyle from './getBasicStyle'

export type AtomicButtonProps = ComponentPropsWithoutRef<'button'>

const AtomicButton = forwardRef<HTMLButtonElement, AtomicButtonProps>(
  ({ children, className, ...buttonAttributes }, forwardRef) => {
    const style = getBasicStyle(className)

    return (
      <button {...buttonAttributes} className={style} ref={forwardRef}>
        {children}
      </button>
    )
  }
)

export default AtomicButton

AtomicButton.displayName = 'AtomicButton'
