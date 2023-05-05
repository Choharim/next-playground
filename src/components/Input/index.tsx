import React, { useRef, ChangeEvent, ComponentProps, MouseEvent } from 'react'

import BaseInput from './BaseInput'
import Flex from '../Flex'

import useInputTheme from './hooks/useInputTheme'
import useCombineRefs from '@/shared/hooks/useCombineRefs'

interface InputThemeProps {
  isError?: boolean
}

interface ControlledInputProps {
  setValue?: React.Dispatch<React.SetStateAction<string>>
}

interface Props
  extends ComponentProps<typeof BaseInput>,
    ControlledInputProps,
    InputThemeProps {}

const Input = React.forwardRef<HTMLInputElement, Props>(
  (
    { isError, setValue, children, className, ...inputAttributes },
    forwardRef
  ) => {
    const { disabled } = inputAttributes
    const theme = useInputTheme({ isError, disabled }, className)
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
      <Flex onClick={handleClick} className={theme}>
        <BaseInput
          {...inputAttributes}
          ref={combinedRef}
          onChange={handleChange}
        />

        {children}
      </Flex>
    )
  }
)

export default Input

Input.displayName = 'Input'
