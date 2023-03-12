import styled from '@emotion/styled'
import React, { InputHTMLAttributes } from 'react'

import Input from './Input'
import RowLabel from '../RowLabel'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode
  label?: React.ReactNode
  isError?: boolean
}

const FormInput = ({
  className,
  children,
  label,
  id,
  isError,
  ...inputAttributes
}: Props) => {
  return (
    <Wrapper className={className}>
      <FormInput.Label htmlFor={id}>{label}</FormInput.Label>
      <Input isError={isError} {...inputAttributes} />
      {children}
    </Wrapper>
  )
}

export default FormInput

FormInput.Label = styled(RowLabel)`
  margin-bottom: 4px;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
