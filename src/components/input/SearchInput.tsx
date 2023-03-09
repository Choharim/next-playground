import styled from '@emotion/styled'
import React from 'react'

import InputProvider, { InputProviderValue } from './context/inputProvider'
import Input, { SUBMIT_BUTTON_KEY } from './Input'

interface Props extends InputProviderValue {
  id: string
}
/**
 * @note
 * 검색 인풋의 경우, 실시간으로 상태값을 동기화할 필요가 없기 때문에 비제어컴포넌트로 사용합니다.
 */
const SearchInput = ({ id, submit }: Props) => {
  return (
    <InputProvider submit={submit}>
      <SearchInput.Input id={id}>
        <SearchInput.SubmitButton key={SUBMIT_BUTTON_KEY}>
          제출
        </SearchInput.SubmitButton>
      </SearchInput.Input>
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
