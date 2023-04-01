import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React, {
  useRef,
  KeyboardEvent,
  InputHTMLAttributes,
  isValidElement,
  ChangeEvent,
} from 'react'

import RowInput from './atomic/RowInput'

interface StyleProps {
  isError?: boolean
}

interface Props extends InputHTMLAttributes<HTMLInputElement>, StyleProps {
  children?: React.ReactNode
  setValue?: React.Dispatch<React.SetStateAction<string>>
  enterSubmit?: (value: string) => void
}

/**
 * @note
 * 입력 창 내부에 제출 버튼을 포함할 경우, key를 SUBMIT_BUTTON_KEY로 지정해야 합니다.
 */
export const SUBMIT_BUTTON_KEY = 'submitButton'

const Input = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      isError,
      children,
      className,
      value,
      setValue,
      enterSubmit,
      ...inputAttributes
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null)

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
      setValue?.(e.target.value)
    }
    return (
      <InputBox onClick={focusInput} isError={isError} className={className}>
        <CustomRowInput
          {...inputAttributes}
          ref={ref ?? inputRef}
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
      </InputBox>
    )
  }
)

export default Input

Input.displayName = 'Input'

const CustomRowInput = styled(RowInput)`
  width: 100%;
  border: none;

  /* Chrome, Safari, Edge, Opera */

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

const InputBox = styled.div<StyleProps>`
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
