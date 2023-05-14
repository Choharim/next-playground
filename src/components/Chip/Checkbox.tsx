import React, { ComponentProps } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

import Flex from '../Flex'

import { CombineType } from '@/shared/types/extendable'
import { RequiredFields } from '@/shared/types/narrow'

interface CheckboxStyle {
  size: string
  isError: boolean
}

type CheckboxProps = CombineType<
  RequiredFields<ComponentProps<'input'>, 'onChange' | 'checked' | 'id'>,
  Partial<CheckboxStyle>
>

const Checkbox = ({
  size = '24px',
  isError = false,
  children,
  ...inputAttributes
}: CheckboxProps) => {
  const { id } = inputAttributes

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
        <CheckInput {...inputAttributes} isError={isError} type="checkbox" />
      </CheckInputWrapper>

      {children}
    </Flex>
  )
}

export default Checkbox

const CheckInputWrapper = styled.div<Pick<CheckboxStyle, 'size'>>`
  position: relative;

  min-height: ${({ size }) => size};
  min-width: ${({ size }) => size};
`

const CheckInput = styled.input<Pick<CheckboxStyle, 'isError'>>`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;

  appearance: none;
  cursor: inherit;

  &::before,
  ::after {
    position: absolute;
    content: '';
    box-sizing: border-box;
    border-radius: 6px;
  }

  &::before {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    ${({ theme }) =>
      css`
        background-color: ${theme.color.white};
      `};

    ${({ isError, theme }) =>
      isError
        ? css`
            border: 2px solid ${theme.color.warning};
          `
        : css`
            border: 2px solid ${theme.color.grey300};
          `}
    transition: border-color 0.1s ease, background-color 0.1s ease;
  }

  &:checked::before {
    ${({ theme }) =>
      css`
        border-color: ${theme.color.primary300};
        background-color: ${theme.color.primary300};
      `}
  }

  &::after {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 16px;
    height: 16px;
    background-image: url('https://cdn-icons-png.flaticon.com/512/60/60731.png');
    background-repeat: no-repeat;
    background-size: cover;

    opacity: 0;
    transition: opacity 0.1s ease;
  }

  &:checked::after {
    opacity: 1;
  }
`
