import React, { ChangeEvent, forwardRef, InputHTMLAttributes } from 'react'

import { useSetValue, useValue } from './context/inputProvider'

type Props = InputHTMLAttributes<HTMLInputElement>

/**
 * @note
 * InputProvider에 value와 setValue를 넘기지 않으면 비제어컴포넌트로 작동합니다.
 */
const RowInput = forwardRef<HTMLInputElement, Props>(
  ({ ...attributes }, ref) => {
    const value = useValue()
    const setValue = useSetValue()

    const handleValue = (e: ChangeEvent<HTMLInputElement>) => {
      attributes?.onChange?.(e)

      if (setValue) setValue(e.target.value)
    }

    return (
      <input {...attributes} ref={ref} value={value} onChange={handleValue} />
    )
  }
)

export default RowInput

RowInput.displayName = 'RowInput'
