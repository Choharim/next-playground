import styled from '@emotion/styled'

import { VARIETY } from './constant'
import { Variety } from './type'

import RowButton, { RowButtonProps } from './atomic/RowButton'

interface Props extends RowButtonProps {
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
