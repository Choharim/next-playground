import { ComponentPropsWithoutRef, forwardRef } from 'react'

import useResetStyle from './hooks/useResetStyle'

type Props = ComponentPropsWithoutRef<'button'>

const BaseButton = forwardRef<HTMLButtonElement, Props>(
  ({ children, className, ...buttonAttributes }, forwardRef) => {
    const resetStyle = useResetStyle(className)

    return (
      <button {...buttonAttributes} className={resetStyle} ref={forwardRef}>
        {children}
      </button>
    )
  }
)

export default BaseButton

BaseButton.displayName = 'BaseButton'
