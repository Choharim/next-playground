import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React, { HTMLAttributes } from 'react'
import { useOpen } from './context/consumer'

interface Props extends Pick<HTMLAttributes<HTMLSpanElement>, 'className'> {
  children: React.ReactElement
}
const ToggleIcon = ({ children, className }: Props) => {
  const open = useOpen()

  return (
    <ToggleIcon.Wrapper rotate180={open} className={className}>
      {children}
    </ToggleIcon.Wrapper>
  )
}

export default ToggleIcon

type StyleProps = {
  rotate180: boolean
}
ToggleIcon.Wrapper = styled.span<StyleProps>`
  transform: rotate(0deg);

  ${({ rotate180 }) =>
    rotate180 &&
    css`
      transform: rotate(180deg);
    `}
`
