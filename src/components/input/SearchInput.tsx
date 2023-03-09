import styled from '@emotion/styled'
import React, { FormEvent, InputHTMLAttributes } from 'react'

import InputProvider, { InputProviderValue } from './context/inputProvider'
import Input, { SUBMIT_BUTTON_KEY } from './Input'

interface Props
  extends InputProviderValue,
    Omit<InputHTMLAttributes<HTMLInputElement>, 'value'> {}
/**
 * @note
 * 검색 인풋의 경우, 실시간으로 상태값을 동기화할 필요가 없기 때문에 비제어컴포넌트로 사용합니다.
 */
const SearchInput = ({
  submit,
  value,
  setValue,
  ...inputAttributes
}: Props) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <InputProvider submit={submit} value={value} setValue={setValue}>
      <form onSubmit={handleSubmit}>
        <SearchInput.Input {...inputAttributes}>
          <SearchInput.SubmitButton key={SUBMIT_BUTTON_KEY}>
            제출
          </SearchInput.SubmitButton>
        </SearchInput.Input>
      </form>
    </InputProvider>
  )
}

export default React.memo(SearchInput)

SearchInput.Input = styled(Input)`
  display: flex;
`

SearchInput.SubmitButton = styled.button`
  padding: 4px;
`
