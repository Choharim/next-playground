import { useState } from 'react'
import styled from '@emotion/styled'

import { NextPageWithLayout } from '@/shared/types/layout'
import { getLayout } from '@/components/layouts/Layout'

import Select from '@/components/select/Select'
import Label from '@/components/Form/Label'
import Frame from '@/features/components/Frame'
import { SelectBasic } from '@/components/select/shared'
import Form from '@/components/Form'
import Button from '@/components/Button'
import SelectProvider from '@/components/select/context/selectProvider'
import { css } from '@emotion/css'

const ANIMAL_OPTIONS: SelectBasic['options'] = [
  { text: '오리', value: 'duck' },
  { text: '고양이', value: 'cat' },
  { text: '강아지', value: 'dog' },
]
const FRUIT_OPTIONS: SelectBasic['options'] = [
  { text: '바나나', value: 'banana' },
  { text: '복숭아', value: 'peach' },
  { text: '오렌지', value: 'orange' },
]

const ANIMAL_SELECT_ID = 'animals'
const FRUIT_SELECT_ID = 'fruits'

type Form = {
  [ANIMAL_SELECT_ID]: { value: string }
}
const SelectPage: NextPageWithLayout = () => {
  const [selectedOption, setSelectedOption] = useState('')

  console.log(selectedOption)

  const submitForm = (target: Form) => {
    console.log(target[ANIMAL_SELECT_ID]?.value)
  }
  return (
    <>
      <Frame title="드롭다운">
        <Form onSubmitForm={submitForm}>
          <Label variety="header_4" htmlFor={ANIMAL_SELECT_ID}>
            동물
          </Label>

          <SelectProvider options={ANIMAL_OPTIONS}>
            <CustomSelect
              id={ANIMAL_SELECT_ID}
              name={ANIMAL_SELECT_ID}
              defaultValue={ANIMAL_OPTIONS[2].value}
            >
              <Select.ToggleIcon>
                <>{'^'}</>
              </Select.ToggleIcon>
            </CustomSelect>
          </SelectProvider>

          <Button type="submit" variety="contain" className={CustomButtonStyle}>
            확인
          </Button>
        </Form>

        <Label htmlFor={FRUIT_SELECT_ID}>과일</Label>
        <SelectProvider
          options={FRUIT_OPTIONS}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        >
          <CustomSelect placeholder="선택하세요." id={FRUIT_SELECT_ID} />
        </SelectProvider>
      </Frame>
    </>
  )
}

export default SelectPage

SelectPage.getLayout = getLayout

const CustomSelect = styled(Select)`
  width: 300px;
`
const CustomButtonStyle = css`
  margin-top: 10px;
`
