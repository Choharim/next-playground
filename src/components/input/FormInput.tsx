import styled from '@emotion/styled'
import React, { InputHTMLAttributes } from 'react'
import InputProvider, { InputProviderValue } from './context/inputProvider'

import Input from './Input'
import RowLabel from './RowLabel'

interface Props
  extends InputProviderValue,
    Omit<InputHTMLAttributes<HTMLInputElement>, 'value'> {
  children?: React.ReactNode
  label?: React.ReactNode
  errorMessage?: React.ReactNode
  error?: boolean
}
/**
 * @note
 * value,setValue를 넘기지 않으면 비제어컴포넌트로 작동합니다.
 * 실시간으로 상태값 확인하기 위해 value,setValue를 넘길 때는 제어컴포넌트로 작동합니다.
 */
const FormInput = ({
  className,
  children,
  label,
  id,
  error,
  errorMessage,
  value,
  setValue,
  submit,
  ...inputAttributes
}: Props) => {
  return (
    <InputProvider value={value} setValue={setValue} submit={submit}>
      <Wrapper className={className}>
        {!!label && <FormInput.Label htmlFor={id}>{label}</FormInput.Label>}
        <Input error={error} {...inputAttributes} />
        {children}
        {error && !!errorMessage && (
          <FormInput.ErrorMessage>{errorMessage}</FormInput.ErrorMessage>
        )}
      </Wrapper>
    </InputProvider>
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

FormInput.ErrorMessage = styled.span``
