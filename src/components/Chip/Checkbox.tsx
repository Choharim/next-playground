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
  size = '24px',
  isError,
  children,
  className,
  ...inputAttributes
}: CheckboxProps) => {
  const { id } = inputAttributes
  const theme = useCheckboxTheme({ isError }, className)

  return (
    <Flex
      align="center"
      gap="10px"
      as="label"
      htmlFor={id}
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
