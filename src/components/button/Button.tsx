import styled from '@emotion/styled'
import React, { ButtonHTMLAttributes } from 'react'

import { VARIETY } from './constant'
import { Variety } from './type'

import RowButton from './atomic/RowButton'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variety: Variety
}
const Button = ({ children, variety, ...buttonAttributes }: Props) => {
  return (
    <Button.Box {...buttonAttributes} variety={variety}>
      {children}
    </Button.Box>
  )
}

export default Button

type StyleProps = Pick<Props, 'variety'>

Button.Box = styled(RowButton)<StyleProps>`
  border-radius: 4px;

  ${({ variety }) => VARIETY[variety]}
`
