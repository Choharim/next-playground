import { css } from '@emotion/css'
import { useState } from 'react'
import { BsFillTriangleFill } from 'react-icons/bs'

import Dropdown from '@/components/Dropdown'
import Input from '@/components/Input'

import { getLayout } from '@/components/layouts/Layout'
import { NextPageWithLayout } from '@/shared/types/layout'
import Frame from '@/features/components/Frame'
import Form, { FormData } from '@/components/Form'
import Label from '@/components/Form/Label'
import Button from '@/components/Button'

const ANIMAL_SELECT_ID = 'animals'

const FORM_FIELDS_NAMES = [ANIMAL_SELECT_ID] as const

const OPTIONS = [
  { value: 'dog', label: '강아지' },
  { value: 'cat', label: '고양이' },
  { value: 'monkey', label: '원숭이' },
]

const DropdownPage: NextPageWithLayout = () => {
  const [selectedValue, setSelectedValue] = useState('')

  const submitForm = (formData: FormData<typeof FORM_FIELDS_NAMES>) => {
    console.log('formData', formData)
    console.log('selectedValue', selectedValue)
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
          className={css`
            width: 300px;
          `}
        >
          <Dropdown.Trigger
            render={({ isOpen, label }) => (
              <Input
                readOnly
                value={label}
                className={css`
                  cursor: pointer;
                `}
              >
                <BsFillTriangleFill
                  className={
                    isOpen
                      ? css`
                          transform: rotate(180deg);
                        `
                      : undefined
                  }
                />
              </Input>
            )}
          />
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

        <Button type="submit" variety="contain">
          확인
        </Button>
      </Form>
    </Frame>
  )
}

export default DropdownPage

DropdownPage.getLayout = getLayout
