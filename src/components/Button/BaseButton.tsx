import { ComponentPropsWithoutRef, forwardRef } from 'react'
import styled from '@emotion/styled'

type BaseButtonProps = ComponentPropsWithoutRef<'button'>

const BaseButton = forwardRef<HTMLButtonElement, BaseButtonProps>(
  ({ children, ...buttonAttributes }, forwardRef) => {
    return (
      <Button {...buttonAttributes} ref={forwardRef}>
        {children}
      </Button>
    )
  }
)

const Button = styled.button`
  width: 100%;
  background-color: transparent;
  outline: none;
  border: none;
  white-space: nowrap;

  &:disabled {
    cursor: not-allowed;
  }
`

export default BaseButton

BaseButton.displayName = 'BaseButton'
