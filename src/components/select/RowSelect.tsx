import React, { ChangeEvent, SelectHTMLAttributes } from 'react'

import { useOptions, useSelectedOption } from './context/selectProvider'

type Props = SelectHTMLAttributes<HTMLSelectElement>
const RowSelect = ({ ...selectAttributes }: Props) => {
  const options = useOptions()
  const selectedOption = useSelectedOption()

  /**
   * @note
   * select에 value 속성을 부여하기 위해서는 onChange 함수가 존재해야 합니다.
   */
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    selectAttributes.onChange?.(e)
  }
  return (
    <select
      {...selectAttributes}
      onChange={handleChange}
      value={selectedOption}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  )
}

export default RowSelect
