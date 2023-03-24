import { useState } from 'react'
import styled from '@emotion/styled'

import Select from '@/components/select/Select'
import RowLabel from '@/components/form/RowLabel'
import Frame from '@/features/components/Frame'
import { SelectBasic } from '@/components/select/shared'
import Form from '@/components/form/Form'
import Button from '@/components/button/Button'
import SelectProvider from '@/components/select/context/selectProvider'

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

type Form = {
  [ANIMAL_SELECT_ID]: { value: string }
}
const SelectPage = () => {
  const [selectedOption, setSelectedOption] = useState('')

  console.log(selectedOption)

  const submitForm = (target: Form) => {
    console.log(target[ANIMAL_SELECT_ID]?.value)
  }
  return (
    <>
      <Frame title="드롭다운">
        <Form onSubmitForm={submitForm}>
          <Label htmlFor={ANIMAL_SELECT_ID}>동물</Label>

          <SelectProvider options={ANIMAL_OPTIONS}>
            <CustomSelect
              id={ANIMAL_SELECT_ID}
              name={ANIMAL_SELECT_ID}
              placeholder="선택하세요."
            >
              <Select.ToggleIcon>
                <>{'^'}</>
              </Select.ToggleIcon>
            </CustomSelect>
          </SelectProvider>

          <Button type="submit" variety="contain">
            확인
          </Button>
        </Form>

        <SelectProvider
          options={FRUIT_OPTIONS}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        >
          <CustomSelect defaultValue={FRUIT_OPTIONS[2].value} />
        </SelectProvider>
      </Frame>
    </>
  )
}

export default SelectPage

const Label = styled(RowLabel)`
  ${({ theme }) => theme.font.header_4};
`

const CustomSelect = styled(Select)`
  width: 300px;
`
