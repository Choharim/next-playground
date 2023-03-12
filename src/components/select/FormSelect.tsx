import styled from '@emotion/styled'
import React, { SelectHTMLAttributes } from 'react'

import Select from './Select'
import RowLabel from '../RowLabel'

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: React.ReactNode
  isError?: boolean
  children?: React.ReactNode
}
const FormSelect = ({
  children,
  label,
  isError,
  className,
  ...selectAttributes
}: Props) => {
  return (
    <Wrapper className={className}>
      <FormSelect.Label htmlFor={selectAttributes.id}>{label}</FormSelect.Label>
      <Select isError={isError} {...selectAttributes}>
        {children}
      </Select>
    </Wrapper>
  )
}

export default FormSelect

FormSelect.Label = styled(RowLabel)`
  margin-bottom: 4px;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
