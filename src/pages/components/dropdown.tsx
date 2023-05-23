import { useState } from 'react'

import Dropdown from '@/components/Dropdown'
import Frame from '@/features/components/Frame'
import Label from '@/components/Label'

import { NextPageWithLayout } from '@/shared/types/layout'

const ANIMAL_SELECT_ID = 'animals'

const OPTIONS = [
  { value: 'dog', label: '강아지' },
  { value: 'cat', label: '고양이' },
  { value: 'monkey', label: '원숭이' },
]

const DropdownPage: NextPageWithLayout = () => {
  const [selectedValue, setSelectedValue] = useState('')

  console.log('selectedValue', selectedValue)

  return (
    <Frame title="form">
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
    </Frame>
  )
}

export default DropdownPage
