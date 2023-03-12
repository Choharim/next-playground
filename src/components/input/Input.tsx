import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React, {
  useRef,
  KeyboardEvent,
  InputHTMLAttributes,
  isValidElement,
} from 'react'

import { useSubmit } from './context/inputProvider'

import RowInput from './RowInput'

interface StyleProps {
  isError?: boolean
}

interface Props extends InputHTMLAttributes<HTMLInputElement>, StyleProps {
  /**
   * @note
   * 제출 버튼을 넘길 경우, key를 SUBMIT_BUTTON_KEY로 지정해야 합니다.
   */
  children?: React.ReactNode
}

export const SUBMIT_BUTTON_KEY = 'submitButton'

const Input = ({ isError, children, className, ...inputAttributes }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const submit = useSubmit()

  const focusInput = () => {
    inputRef.current?.focus()
  }

  const handleSubmit = () => {
    if (!submit || !inputRef.current) return

    submit(inputRef.current.value)
  }

  const handleKeydown = (e: KeyboardEvent<HTMLInputElement>) => {
    inputAttributes.onKeyDown?.(e)

    if (e.key === 'Enter') {
      e.preventDefault()

      handleSubmit()
    }
  }

  const isSubmitButton = (child: React.ReactElement) => {
    return child.key === SUBMIT_BUTTON_KEY || child.type === 'button'
  }

  return (
    <Input.InputBox
      onClick={focusInput}
      isError={isError}
      className={className}
    >
      <Input.Row
        ref={inputRef}
        {...inputAttributes}
        onKeyDown={handleKeydown}
      />

      {isValidElement(children) &&
        React.Children.map(children, (child) =>
          isSubmitButton(child)
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

Input.Row = styled(RowInput)`
  width: 100%;
  border: none;
`

Input.InputBox = styled.div<StyleProps>`
  padding: 6px 12px;
  border-radius: 4px;
  cursor: default;

  ${({ isError }) =>
    isError
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
