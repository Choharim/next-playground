import { css, SerializedStyles } from '@emotion/react'
import styled from '@emotion/styled'
import React, { ButtonHTMLAttributes } from 'react'

import RowButton from './RowButton'

type Variety = 'outline' | 'contain' | 'text'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variety: Variety
}
const Button = ({ children, variety, ...buttonAttributes }: Props) => {
  return (
    <Button.ButtonBox variety={variety}>
      <Button.Row {...buttonAttributes}>{children}</Button.Row>
    </Button.ButtonBox>
  )
}

export default Button

type StyleProps = Pick<Props, 'variety'>

Button.Row = styled(RowButton)`
  width: 100%;
  background-color: transparent;
  border: none;

  cursor: pointer;
  &:disabled {
    cursor: default;
  }
`

const VARIETY: { [key in Variety]: SerializedStyles } = {
  outline: css`
    border: 1px solid blue;
    &:is(:hover, :focus) {
      background-color: blue;
    }
    &:active {
      background-color: blue;
    }
  `,
  contain: css`
    background-color: blue;
    &:is(:hover, :focus) {
      background-color: blue;
    }
    &:active {
      background-color: blue;
    }
  `,
  text: css`
    &:is(:hover, :focus) {
      background-color: grey;
    }
    &:active {
      background-color: gray;
    }
  `,
}

Button.ButtonBox = styled.div<StyleProps>`
  border-radius: 4px;

  ${({ variety }) => VARIETY[variety]}
`
