import React, { ComponentProps } from 'react'
import { css } from '@emotion/react'

import Flex from '../Flex'

import { CombineType } from '@/shared/types/extendable'
import useCheckboxTheme from './hooks/useCheckboxTheme'
import { RequiredFields } from '@/shared/types/narrow'

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
  ...inputAttributes
}: CheckboxProps) => {
  const { id } = inputAttributes
  const theme = useCheckboxTheme({ isError })

  return (
    <Flex
      align="center"
      gap="10px"
      as="label"
      htmlFor={id}
      css={css`
        cursor: pointer;
      `}
    >
      <div
        css={css`
          position: relative;
          min-height: ${size};
          min-width: ${size};
        `}
      >
        <input {...inputAttributes} type="checkbox" css={theme} />
      </div>

      {children}
    </Flex>
  )
}

export default Checkbox
