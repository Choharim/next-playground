import { ComponentPropsWithoutRef, forwardRef } from 'react'
import { useResetStyle } from './useResetStyle'

type Props = ComponentPropsWithoutRef<'button'>

const BaseButton = forwardRef<HTMLButtonElement, Props>(
  ({ children, className, ...attributes }, ref) => {
    const resetStyle = useResetStyle(className)

    return (
      <button {...attributes} className={resetStyle} ref={ref}>
        {children}
      </button>
    )
  }
)

export default BaseButton

BaseButton.displayName = 'BaseButton'
