import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React, {
  useRef,
  KeyboardEvent,
  InputHTMLAttributes,
  isValidElement,
  ChangeEvent,
} from 'react'
import {
  useInputSetValue,
  useInputEnterSubmit,
  useInputValue,
} from './context/consumer'

import RowInput from './atomic/RowInput'

interface StyleProps {
  isError?: boolean
}

interface Props extends InputHTMLAttributes<HTMLInputElement>, StyleProps {
  children?: React.ReactNode
}

/**
 * @note
 * 입력 창 내부에 제출 버튼을 포함할 경우, key를 SUBMIT_BUTTON_KEY로 지정해야 합니다.
 */
export const SUBMIT_BUTTON_KEY = 'submitButton'

const Input = ({ isError, children, className, ...inputAttributes }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const enterSubmit = useInputEnterSubmit()
  const value = useInputValue()
  const setValue = useInputSetValue()

  const focusInput = () => {
    inputRef.current?.focus()
  }

  const handleSubmit = () => {
    if (!enterSubmit || !inputRef.current) return

    enterSubmit(inputRef.current.value)
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (setValue) setValue(e.target.value)
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
        value={value}
        onChange={handleChange}
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

  ${({ isError, theme }) =>
    isError
      ? css`
          border: 1px solid ${theme.color.warning};
        `
      : css`
          border: 1px solid ${theme.color.grey400};

          &:focus-within {
            border: 1px solid ${theme.color.primary400};
          }
        `}
`
