import { ComponentPropsWithoutRef, forwardRef } from 'react'
import useResetStyle from './hooks/useResetStyle'

type Props = ComponentPropsWithoutRef<'button'>

const BaseButton = forwardRef<HTMLButtonElement, Props>(
  ({ children, className, ...buttonAttributes }, ref) => {
    const resetStyle = useResetStyle(className)

    return (
      <button {...buttonAttributes} className={resetStyle} ref={ref}>
        {children}
      </button>
    )
  }
)

export default BaseButton

BaseButton.displayName = 'BaseButton'
