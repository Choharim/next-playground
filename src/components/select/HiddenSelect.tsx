import { ChangeEvent, ComponentProps } from 'react'
import styled from '@emotion/styled'

import { useOptions, useSelectedOption } from './context/consumer'

const HiddenSelect = ({
  defaultValue,
  ...selectAttributes
}: ComponentProps<'select'>) => {
  const selectedOption = useSelectedOption()
  const options = useOptions()

  /**
   * @note
   * select에 value 속성을 부여하기 위해서는 onChange 함수가 존재해야 합니다.
   */
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    selectAttributes.onChange?.(e)
  }

  return (
    <Wrapper>
      <select
        {...selectAttributes}
        onChange={handleChange}
        value={selectedOption || defaultValue}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </Wrapper>
  )
}

export default HiddenSelect

const Wrapper = styled.div`
  display: none;
`
