import React, { useState } from 'react'

import Frame from '../Frame'
import Dropdown from '@/components/Dropdown'

const OPTIONS = [
  { value: 'dog', label: '강아지' },
  { value: 'cat', label: '고양이' },
  { value: 'monkey', label: '원숭이' },
]

const WithoutForm = () => {
  const [selectedValue, setSelectedValue] = useState('')

  console.log('selectedValue', selectedValue)

  return (
    <Frame title="form 없이">
      <Dropdown
        options={OPTIONS}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
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

export default WithoutForm
