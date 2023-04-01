import { useState } from 'react'
import styled from '@emotion/styled'

import { NextPageWithLayout } from '@/types/app'
import { getLayout } from '@/components/layouts/Layout'

import Frame from '@/features/components/Frame'
import Button from '@/components/button/Button'
import Form from '@/components/form/Form'
import RowLabel from '@/components/form/atomic/RowLabel'
import Input, { SUBMIT_BUTTON_KEY } from '@/components/input/Input'
import HookFormInput from '@/components/input/HookFormInput'

const UNCONTORLL_INPUT_ID = 'uncontrollInput'
const CONTORLL_INPUT_ID = 'controllInput'

type Form = {
  [UNCONTORLL_INPUT_ID]: { value: string }
  [CONTORLL_INPUT_ID]: { value: string }
}

const InputPage: NextPageWithLayout = () => {
  const [value, setValue] = useState('')
  const [searchValue, setSearchValue] = useState('')

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
          <Input
            name={UNCONTORLL_INPUT_ID}
            id={UNCONTORLL_INPUT_ID}
            enterSubmit={enterSubmit}
            type="number"
          />

          <ConfirmButton type="submit" variety="contain">
            확인
          </ConfirmButton>
        </Form>

        <SearchInput enterSubmit={enterSubmit}>
          <SearchButton key={SUBMIT_BUTTON_KEY} variety="contain">
            검색
          </SearchButton>
        </SearchInput>
      </Frame>

      <Frame title="제어 컴포넌트">
        <Form onSubmitForm={submitControllForm}>
          <CustomLabel htmlFor={CONTORLL_INPUT_ID}>폼 입력 창</CustomLabel>
          <Input
            id={CONTORLL_INPUT_ID}
            name={CONTORLL_INPUT_ID}
            enterSubmit={enterSubmit}
            setValue={setValue}
            value={value}
          />

          <ConfirmButton type="submit" variety="contain">
            확인
          </ConfirmButton>
        </Form>

        <SearchInput
          enterSubmit={enterSubmit}
          setValue={setSearchValue}
          value={searchValue}
        >
          <SearchButton key={SUBMIT_BUTTON_KEY} variety="contain">
            검색
          </SearchButton>
        </SearchInput>
      </Frame>

      <Frame title="react-hook-form 사용">
        <HookFormInput />
      </Frame>
    </>
  )
}

export default InputPage

InputPage.getLayout = getLayout

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
