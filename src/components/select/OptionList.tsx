import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React, { HTMLAttributes, useEffect } from 'react'

import {
  useOpen,
  useOptions,
  useSetSelectedOption,
} from './context/selectProvider'

type Props = Pick<HTMLAttributes<HTMLSelectElement>, 'defaultValue'>

const OptionList = ({ defaultValue }: Props) => {
  const open = useOpen()
  const options = useOptions()
  const setSelectedOption = useSetSelectedOption()

  useEffect(() => {
    setSelectedOption(String(defaultValue))
  }, [defaultValue, setSelectedOption])

  const selectOption = (value: string) => () => {
    setSelectedOption(value)
  }

  return (
    <Options open={open}>
      {options.map((option) => (
        <Option key={option.value} onClick={selectOption(option.value)}>
          {option.text}
        </Option>
      ))}
    </Options>
  )
}

export default OptionList

const Options = styled.ul<{ open: boolean }>`
  position: absolute;
  top: calc(100% + 5px);
  left: 0px;

  width: 100%;
  display: flex;
  flex-direction: column;

  border-radius: 4px;
  background-color: white;

  ${({ open }) =>
    open
      ? css`
          opacity: 1;
          visibility: visible;
        `
      : css`
          opacity: 0;
          visibility: hidden;
        `}

  transition: 0.2s ease;
`

const Option = styled.li`
  padding: 3px;
  width: 100%;

  &:hover {
    background-color: grey;
  }
`
