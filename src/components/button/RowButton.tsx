import React, { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}
const RowButton = ({ children, ...buttonAttributes }: Props) => {
  return <button {...buttonAttributes}>{children}</button>
}

export default RowButton
