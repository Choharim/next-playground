import { ComponentPropsWithoutRef, forwardRef } from 'react'

import useResetStyle from './hooks/useResetStyle'

type Props = ComponentPropsWithoutRef<'button'>

const BaseButton = forwardRef<HTMLButtonElement, Props>(
  ({ children, ...buttonAttributes }, forwardRef) => {
    const resetStyle = useResetStyle()

    return (
      <button {...buttonAttributes} css={resetStyle} ref={forwardRef}>
        {children}
      </button>
    )
  }
)

export default BaseButton

BaseButton.displayName = 'BaseButton'
