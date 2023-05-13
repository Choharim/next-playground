import React, { ComponentProps } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

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
      <CheckInputWrapper size={size}>
        <input {...inputAttributes} type="checkbox" css={theme} />
      </CheckInputWrapper>

      {children}
    </Flex>
  )
}

export default Checkbox

const CheckInputWrapper = styled.div<Pick<CheckboxThemeProps, 'size'>>`
  position: relative;

  min-height: ${({ size }) => size};
  min-width: ${({ size }) => size};
`
