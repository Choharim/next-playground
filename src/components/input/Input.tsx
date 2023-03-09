import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React, { InputHTMLAttributes, useRef, KeyboardEvent } from 'react'

import { useSubmit } from './context/inputProvider'

import RowInput from './RowInput'

interface StyleProps {
  error?: boolean
}

interface Props extends InputHTMLAttributes<HTMLInputElement>, StyleProps {
  /**
   * @note
   * 제출 버튼을 넘길 경우, key를 SUBMIT_BUTTON_KEY로 지정해야 합니다.
   */
  children?: React.ReactElement
}

export const SUBMIT_BUTTON_KEY = 'submitButton'

const Input = ({ children, error, className, ...attributes }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const submit = useSubmit()

  const focusInput = () => {
    inputRef.current?.focus()
  }

  const handleSubmit = () => {
    if (!submit || !inputRef.current) return
    submit(inputRef.current?.value)
  }

  const handleKeydown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()

      handleSubmit()
    }

    attributes?.onKeyDown?.(e)
  }

  return (
    <Input.InputBox className={className} onClick={focusInput} error={error}>
      <RowInput ref={inputRef} {...attributes} onKeyDown={handleKeydown} />
      {children &&
        React.Children.map(children, (child) =>
          child?.key === SUBMIT_BUTTON_KEY
            ? React.cloneElement(child, {
                ...child.props,
                onClick: handleSubmit,
              })
            : child
        )}
    </Input.InputBox>
  )
}

export default Input

Input.InputBox = styled.div<StyleProps>`
  padding: 5px;
  border-radius: 4px;

  ${({ error }) =>
    error
      ? css`
          border: 1px solid red;
        `
      : css`
          border: 1px solid black;

          &:focus-within {
            border: 1px solid blue;
          }
        `}
`
