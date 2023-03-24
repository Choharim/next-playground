import styled from '@emotion/styled'
import { HTMLAttributes } from 'react'

import { useOptions, useSelectedOption } from './context/consumer'

type Props = Pick<
  HTMLAttributes<HTMLSelectElement>,
  'placeholder' | 'className'
>

const SelectedOption = ({ placeholder, className }: Props) => {
  const options = useOptions()
  const seletedOption = useSelectedOption()

  return (
    <Seleted className={className}>
      {options.find((option) => option.value === seletedOption)?.text ||
        placeholder}
    </Seleted>
  )
}

export default SelectedOption

const Seleted = styled.span``
