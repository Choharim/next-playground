import styled from '@emotion/styled'
import React, { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}
const RowButton = ({ children, ...buttonAttributes }: Props) => {
  return <Button {...buttonAttributes}>{children}</Button>
}

export default RowButton

const Button = styled.button`
  width: 100%;
  background-color: inherit;
  color: inherit;
  border-radius: inherit;
  border: none;

  &:disabled {
    cursor: default;
    pointer-events: none;
  }
`
