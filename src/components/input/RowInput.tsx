import styled from '@emotion/styled'
import React, { ChangeEvent, forwardRef, InputHTMLAttributes } from 'react'

import { useSetValue, useValue } from './context/inputProvider'

type Props = InputHTMLAttributes<HTMLInputElement>

const RowInput = forwardRef<HTMLInputElement, Props>(
  ({ ...attributes }, ref) => {
    const value = useValue()
    const setValue = useSetValue()

    const handleValue = (e: ChangeEvent<HTMLInputElement>) => {
      attributes?.onChange?.(e)

      if (!setValue) return

      setValue(e.target.value)
    }

    return (
      <Input ref={ref} {...attributes} value={value} onChange={handleValue} />
    )
  }
)

export default RowInput

RowInput.displayName = 'RowInput'

const Input = styled.input`
  width: 100%;
  border: none;
`
