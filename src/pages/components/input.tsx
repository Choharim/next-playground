import { useState } from 'react'
import styled from '@emotion/styled'

import Frame from '@/features/components/Frame'
import Button from '@/components/button/Button'
import Form from '@/components/form/Form'
import RowLabel from '@/components/form/atomic/RowLabel'
import InputProvider from '@/components/input/context/inputProvider'
import Input, { SUBMIT_BUTTON_KEY } from '@/components/input/Input'

const UNCONTORLL_INPUT_ID = 'uncontrollInput'
const CONTORLL_INPUT_ID = 'controllInput'

type Form = {
  [UNCONTORLL_INPUT_ID]: { value: string }
  [CONTORLL_INPUT_ID]: { value: string }
}

const InputPage = () => {
  const [value, setValue] = useState('')
  const [searchValue, setSearchValue] = useState('')

  console.log(value)
  console.log(searchValue)

  const submitUncontrollForm = (target: Form) => {
    console.log(target[UNCONTORLL_INPUT_ID]?.value)
  }

  const submitControllForm = (target: Form) => {
    console.log(target[CONTORLL_INPUT_ID]?.value)
  }

  const enterSubmit = (target: string) => {
    console.log(target)
  }
  return (
    <>
      <Frame title="비제어 컴포넌트">
        <Form onSubmitForm={submitUncontrollForm}>
          <CustomLabel htmlFor={UNCONTORLL_INPUT_ID}>폼 입력 창</CustomLabel>
          <InputProvider enterSubmit={enterSubmit}>
            <Input name={UNCONTORLL_INPUT_ID} id={UNCONTORLL_INPUT_ID} />
          </InputProvider>

          <ConfirmButton type="submit" variety="contain">
            확인
          </ConfirmButton>
        </Form>

        <InputProvider enterSubmit={enterSubmit}>
          <SearchInput>
            <SearchButton key={SUBMIT_BUTTON_KEY} variety="contain">
              검색
            </SearchButton>
          </SearchInput>
        </InputProvider>
      </Frame>

      <Frame title="제어 컴포넌트">
        <Form onSubmitForm={submitControllForm}>
          <CustomLabel htmlFor={CONTORLL_INPUT_ID}>폼 입력 창</CustomLabel>
          <InputProvider setValue={setValue} value={value}>
            <Input id={CONTORLL_INPUT_ID} name={CONTORLL_INPUT_ID} />
          </InputProvider>

          <ConfirmButton type="submit" variety="contain">
            확인
          </ConfirmButton>
        </Form>

        <InputProvider
          enterSubmit={enterSubmit}
          setValue={setSearchValue}
          value={searchValue}
        >
          <SearchInput>
            <SearchButton key={SUBMIT_BUTTON_KEY} variety="contain">
              검색
            </SearchButton>
          </SearchInput>
        </InputProvider>
      </Frame>
    </>
  )
}

export default InputPage

const CustomLabel = styled(RowLabel)`
  margin-bottom: 4px;
`
const ConfirmButton = styled(Button)`
  padding: 10px;
  margin-top: 10px;
`

const SearchButton = styled(Button)`
  padding: 5px 10px;
  width: fit-content;
  white-space: nowrap;
`

const SearchInput = styled(Input)`
  display: flex;
  align-items: center;
  width: 300px;
`
