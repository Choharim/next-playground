import React, { useState } from 'react'

import Frame from '../Frame'
import Label from '@/components/Label'
import Dropdown from '@/components/Dropdown'
import Form, { FormData } from '@/components/Form'
import Button from '@/components/Button'
import { css } from '@emotion/react'

const ANIMAL_SELECT_ID = 'animals'

const OPTIONS = [
  { value: 'dog', label: '강아지' },
  { value: 'cat', label: '고양이' },
  { value: 'monkey', label: '원숭이' },
]
const FORM_FIELDS_NAMES = [ANIMAL_SELECT_ID] as const
const WithForm = () => {
  const [selectedValue, setSelectedValue] = useState('')

  const submitForm = (formData: FormData<typeof FORM_FIELDS_NAMES>) => {
    console.log('formData', formData)
  }

  return (
    <Frame title="form">
      <Form onSubmit={submitForm} fieldNames={FORM_FIELDS_NAMES}>
        <Label variety="header_4" htmlFor={ANIMAL_SELECT_ID}>
          동물
        </Label>

        <Dropdown
          options={OPTIONS}
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
          name={ANIMAL_SELECT_ID}
          placeholder="선택하세요."
          // defaultValue={OPTIONS[2].value}
        >
          <Dropdown.OptionList>
            {({ selectedValue, options }) =>
              options.map((option) => (
                <Dropdown.Option key={`${option.value}`} value={option.value}>
                  {selectedValue === option.value && '*'} {option.label}
                </Dropdown.Option>
              ))
            }
          </Dropdown.OptionList>
        </Dropdown>

        <Button
          css={css`
            margin-top: 10px;
          `}
        >
          확인
        </Button>
      </Form>
    </Frame>
  )
}

export default WithForm
