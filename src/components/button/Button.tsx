import styled from '@emotion/styled'

import { ComponentProps, forwardRef } from 'react'
import isPropValid from '@emotion/is-prop-valid'

import AtomicButton from './AtomicButton'
import { VARIETY } from './constant'
import { Variety } from './type'

interface Props extends ComponentProps<typeof AtomicButton> {
  variety: Variety
}
const Button = forwardRef<HTMLButtonElement, Props>(
  ({ children, variety, ...buttonAttributes }, forwardRef) => {
    return (
      <CustomButton {...buttonAttributes} variety={variety} ref={forwardRef}>
        {children}
      </CustomButton>
    )
  }
)

export default Button

Button.displayName = 'Button'

type StyleProps = Pick<Props, 'variety'>

const CustomButton = styled(AtomicButton, {
  shouldForwardProp: (prop) => isPropValid(prop) || prop === 'variety',
})<StyleProps>`
  border-radius: 4px;

  ${({ variety }) => VARIETY[variety]}
`
