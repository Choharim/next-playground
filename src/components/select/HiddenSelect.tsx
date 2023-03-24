import { SelectHTMLAttributes } from 'react'
import styled from '@emotion/styled'

import { useOptions, useSelectedOption } from './context/consumer'

import RowOption from './atomic/RowOption'
import RowSelect from './atomic/RowSelect'

type Props = SelectHTMLAttributes<HTMLSelectElement>

const HiddenSelect = ({ ...selectAttributes }: Props) => {
  const selectedOption = useSelectedOption()
  const options = useOptions()

  return (
    <Wrapper>
      <RowSelect {...selectAttributes} value={selectedOption}>
        {options.map((option) => (
          <RowOption key={option.value} value={option.value}>
            {option.text}
          </RowOption>
        ))}
      </RowSelect>
    </Wrapper>
  )
}

export default HiddenSelect

const Wrapper = styled.div`
  display: none;
`
