import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React, { HTMLAttributes } from 'react'

import { SelectBasic } from './shared'

interface Props
  extends Pick<Partial<SelectBasic>, 'isOpen'>,
    Pick<HTMLAttributes<HTMLSpanElement>, 'className'> {
  children?: React.ReactElement
}
const ToggleIcon = ({ children, className, isOpen }: Props) => {
  return (
    <ToggleIcon.Wrapper isHalfRotation={isOpen} className={className}>
      {children}
    </ToggleIcon.Wrapper>
  )
}

export default ToggleIcon

type StyleProps = {
  isHalfRotation: Props['isOpen']
}
ToggleIcon.Wrapper = styled.span<StyleProps>`
  transform: rotate(0deg);

  ${({ isHalfRotation }) =>
    isHalfRotation &&
    css`
      transform: rotate(180deg);
    `}
`
