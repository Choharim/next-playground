import styled from '@emotion/styled'
import React, { LabelHTMLAttributes } from 'react'

interface Props
  extends Pick<LabelHTMLAttributes<HTMLLabelElement>, 'htmlFor' | 'className'> {
  children: React.ReactNode
}
const RowLabel = ({ children, className, htmlFor }: Props) => {
  return (
    <Label className={className} htmlFor={htmlFor}>
      {children}
    </Label>
  )
}

export default React.memo(RowLabel)

const Label = styled.label`
  width: fit-content;
`