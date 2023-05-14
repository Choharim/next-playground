import React, { useState } from 'react'
import styled from '@emotion/styled'

import Form, { FormData } from '@/components/Form'
import Label from '@/components/Label'
import Input from '@/components/Input'
import Button from '@/components/Button'
import Typo from '@/components/Typo'
import SearchInput from '@/components/Input/SearchInput'

const CONTORLL_INPUT_ID = 'controllInput'

const FORM_FIELD_NAMES = [CONTORLL_INPUT_ID] as const

const ControlledInput = () => {
  const [value, setValue] = useState('')
  const [searchValue, setSearchValue] = useState('')

  const submitControllForm = (target: FormData<typeof FORM_FIELD_NAMES>) => {
    console.log(target)
  }

  const enterSubmit = (target: string) => {
    console.log(target)
  }

  return (
    <>
      <Form onSubmit={submitControllForm} fieldNames={FORM_FIELD_NAMES}>
        <Label htmlFor={CONTORLL_INPUT_ID}>폼 입력 창</Label>
        <Input
          id={CONTORLL_INPUT_ID}
          name={CONTORLL_INPUT_ID}
          setValue={setValue}
          value={value}
        />

        <ConfirmButton type="submit" variety="contain">
          확인
        </ConfirmButton>
      </Form>

      <SearchInput
        onEnterSubmit={enterSubmit}
        setValue={setSearchValue}
        value={searchValue}
      >
        {({ onSubmit }) => (
          <SearchButton variety="contain" onClick={onSubmit}>
            <Typo color="inherit" variety="body_4">
              검색
            </Typo>
          </SearchButton>
        )}
      </SearchInput>
    </>
  )
}

export default ControlledInput

const ConfirmButton = styled(Button)`
  margin-top: 10px;
`

const SearchButton = styled(Button)`
  padding: 0 10px;
  width: fit-content;
  height: 100%;
`
