import React, { useRef, ChangeEvent, ComponentProps, MouseEvent } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

import BaseInput from './BaseInput'
import Flex from '../Flex'

import useCombineRefs from '@/shared/hooks/useCombineRefs'

interface InputStyle {
  isError?: boolean
}

interface ControlledInputProps {
  setValue?: React.Dispatch<React.SetStateAction<string>>
}

interface Props
  extends ComponentProps<typeof BaseInput>,
    ControlledInputProps,
    InputStyle {}

const Input = React.forwardRef<HTMLInputElement, Props>(
  (
    { isError, setValue, children, className, ...inputAttributes },
    forwardRef
  ) => {
    const { disabled } = inputAttributes
    const inputRef = useRef<HTMLInputElement>(null)

    const combinedRef = useCombineRefs<HTMLInputElement>(forwardRef, inputRef)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      inputAttributes.onChange?.(e)

      setValue?.(e.target.value)
    }

    const handleClick = (e: MouseEvent<HTMLInputElement>) => {
      inputAttributes.onClick?.(e)

      inputRef.current?.focus()
    }

    return (
      <InputWrapper
        onClick={handleClick}
        disabled={disabled}
        isError={isError}
        className={className}
      >
        <BaseInput
          {...inputAttributes}
          ref={combinedRef}
          onChange={handleChange}
        />

        {children}
      </InputWrapper>
    )
  }
)

export default Input

Input.displayName = 'Input'

type InputWrapperStyle = Pick<ComponentProps<typeof BaseInput>, 'disabled'> &
  InputStyle

const InputWrapper = styled(Flex)<InputWrapperStyle>`
  padding: 12px;
  height: 48px;
  border-radius: 4px;
  cursor: text;

  ${({ isError, theme }) =>
    isError
      ? css`
          border: 1px solid ${theme.color.warning};
        `
      : css`
          border: 1px solid ${theme.color.grey300};

          &:focus-within {
            border: 1px solid ${theme.color.primary400};
          }
        `}

  ${({ disabled, theme }) =>
    disabled &&
    css`
      background-color: ${theme.color.grey100};
      cursor: default;
    `}
`
