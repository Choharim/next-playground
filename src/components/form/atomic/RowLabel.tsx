import styled from '@emotion/styled'
import React, { LabelHTMLAttributes } from 'react'

interface Props extends LabelHTMLAttributes<HTMLLabelElement> {
  children?: React.ReactNode
}
const RowLabel = ({ children, ...labelAttributes }: Props) => {
  return <Label {...labelAttributes}>{children}</Label>
}

export default RowLabel

const Label = styled.label`
  &:empty {
    display: none;
  }
`
