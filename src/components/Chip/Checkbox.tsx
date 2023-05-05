import React, { ComponentProps } from 'react'
import { CombineType } from '@/shared/types/extendable'
import useCheckboxTheme from './hooks/useCheckboxTheme'
import { css } from '@emotion/css'
import { RequiredFields } from '@/shared/types/narrow'
import Flex from '../Flex'

export interface CheckboxThemeProps {
  size?: string
  isError?: boolean
}

type CheckboxProps = CombineType<
  RequiredFields<ComponentProps<'input'>, 'onChange' | 'checked' | 'id'>,
  CheckboxThemeProps
>

const Checkbox = ({
  children,
  className,
  size = '24px',
  isError,
  ...inputAttributes
}: CheckboxProps) => {
  const { id } = inputAttributes
  const theme = useCheckboxTheme({ size, isError }, className)

  return (
    <Flex
      as="label"
      htmlFor={id}
      align="center"
      gap="10px"
      className={css`
        cursor: pointer;
      `}
    >
      <div
        className={css`
          position: relative;
          min-height: ${size};
          min-width: ${size};
        `}
      >
        <input {...inputAttributes} type="checkbox" className={theme} />
      </div>

      {children}
    </Flex>
  )
}

export default Checkbox
