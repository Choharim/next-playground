import styled from '@emotion/styled'
import React, { LabelHTMLAttributes } from 'react'

interface Props extends LabelHTMLAttributes<HTMLLabelElement> {
  children?: React.ReactNode
}
const RowLabel = ({ children, ...labelAttributes }: Props) => {
  return <RowLabel.Text {...labelAttributes}>{children}</RowLabel.Text>
}

export default RowLabel

RowLabel.Text = styled.label`
  width: fit-content;

  &:empty {
    display: none;
  }
`
