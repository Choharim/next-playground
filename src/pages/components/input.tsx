import { useState } from 'react'
import styled from '@emotion/styled'

import { NextPageWithLayout } from '@/shared/types/layout'
import { getLayout } from '@/components/layouts/Layout'

import Frame from '@/features/components/Frame'
import Button from '@/components/Button'
import Form from '@/components/Form'
import Label from '@/components/Form/Label'
import Input, { SUBMIT_BUTTON_KEY } from '@/components/input/Input'
import HookFormInput from '@/components/input/HookFormInput'
import { css } from '@emotion/css'

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
          <Label isRequired htmlFor={UNCONTORLL_INPUT_ID}>
            폼 입력 창
          </Label>
          <Input
            name={UNCONTORLL_INPUT_ID}
            id={UNCONTORLL_INPUT_ID}
            enterSubmit={enterSubmit}
            type="number"
          />

          <Button
            type="submit"
            variety="contain"
            className={ConfirmButtonStyle}
          >
            확인
          </Button>
        </Form>

        <SearchInput enterSubmit={enterSubmit}>
          <Button
            key={SUBMIT_BUTTON_KEY}
            variety="contain"
            className={SearchButtonStyle}
          >
            검색
          </Button>
        </SearchInput>
      </Frame>

      <Frame title="제어 컴포넌트">
        <Form onSubmitForm={submitControllForm}>
          <Label htmlFor={CONTORLL_INPUT_ID}>폼 입력 창</Label>
          <Input
            id={CONTORLL_INPUT_ID}
            name={CONTORLL_INPUT_ID}
            enterSubmit={enterSubmit}
            setValue={setValue}
            value={value}
          />

          <Button
            type="submit"
            variety="contain"
            className={ConfirmButtonStyle}
          >
            확인
          </Button>
        </Form>

        <SearchInput
          enterSubmit={enterSubmit}
          setValue={setSearchValue}
          value={searchValue}
        >
          <Button
            key={SUBMIT_BUTTON_KEY}
            variety="contain"
            className={SearchButtonStyle}
          >
            검색
          </Button>
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

const ConfirmButtonStyle = css`
  margin-top: 10px;
`

const SearchButtonStyle = css`
  padding: 5px 10px;
  width: fit-content;
  white-space: nowrap;
`

const SearchInput = styled(Input)`
  display: flex;
  align-items: center;
  width: 300px;
`
