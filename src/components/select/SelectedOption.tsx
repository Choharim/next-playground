import styled from '@emotion/styled'
import React, { HTMLAttributes } from 'react'

import { useOptions, useSelectedOption } from './context/consumer'

type Props = Pick<HTMLAttributes<HTMLSelectElement>, 'placeholder'>

const SelectedOption = ({ placeholder }: Props) => {
  const options = useOptions()
  const seletedOption = useSelectedOption()

  return (
    <Seleted>
      {options.find((option) => option.value === seletedOption)?.text ||
        placeholder}
    </Seleted>
  )
}

export default SelectedOption

const Seleted = styled.span``
