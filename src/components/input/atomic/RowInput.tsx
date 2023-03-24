import React, { ChangeEvent, forwardRef, InputHTMLAttributes } from 'react'

type Props = InputHTMLAttributes<HTMLInputElement>

/**
 * @note
 * InputProvider에 value와 setValue를 넘기지 않으면 비제어컴포넌트로 작동합니다.
 */
const RowInput = forwardRef<HTMLInputElement, Props>(
  ({ ...attributes }, ref) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      attributes?.onChange?.(e)
    }

    return <input {...attributes} ref={ref} onChange={handleChange} />
  }
)

export default RowInput

RowInput.displayName = 'RowInput'
