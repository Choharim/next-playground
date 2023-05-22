import React, {
  ChangeEvent,
  ComponentProps,
  PropsWithChildren,
  isValidElement,
} from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

import Typo from '../Typo'

import { useRadioGroup } from './context/consumer'

interface InputProps extends Pick<ComponentProps<'input'>, 'disabled'> {
  value: string
}

const RadioButton = ({
  children,
  value,
  disabled,
}: PropsWithChildren<InputProps>) => {
  const { selectedValue, groupName, onChange } = useRadioGroup()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return (
    <Label htmlFor={value} disabled={disabled}>
      <RadioInput
        type="radio"
        id={value}
        value={value}
        name={groupName}
        onChange={handleChange}
        checked={selectedValue === value}
        disabled={disabled}
      />

      {isValidElement(children) ? (
        children
      ) : (
        <Typo variety="subtitle_2">{children}</Typo>
      )}
    </Label>
  )
}

export default RadioButton

const Label = styled.label<Pick<InputProps, 'disabled'>>`
  display: flex;
  align-items: center;
  gap: 8px;

  ${({ disabled }) =>
    disabled
      ? css`
          cursor: not-allowed;
          opacity: 0.5;
        `
      : css`
          cursor: pointer;
        `};
`

const RadioInput = styled.input`
  appearance: none;

  width: 24px;
  height: 24px;
  border-radius: 50%;

  border: 1px solid ${({ theme }) => theme.color.grey400};

  &:checked {
    border: 7px solid ${({ theme }) => theme.color.primary400};
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.grey100};
    cursor: pointer;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.color.grey300};
    cursor: not-allowed;
  }
`
