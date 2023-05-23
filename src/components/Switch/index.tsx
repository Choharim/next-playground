import React, { ChangeEvent, ComponentProps, useMemo } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { CombineType } from '@/shared/types/extendable'
import { ColorKey } from '@/styles/type'
import { hiddenElement } from '@/styles/utils/accessibility'
import getSize from './getSize'
import { RequiredFields } from '@/shared/types/narrow'

interface InputProps
  extends RequiredFields<
    Pick<ComponentProps<'input'>, 'checked' | 'id' | 'disabled'>,
    'checked' | 'id'
  > {
  onChange: (checked: boolean) => void
}

type Size = 'small' | 'medium' | 'large'

export interface SwitchStyle {
  color: ColorKey
  size: Size
}

type SwitchProps = CombineType<InputProps, Partial<SwitchStyle>>

const Switch = ({
  color = 'primary400',
  size = 'medium',

  onChange,
  checked,
  id,
  disabled,
}: SwitchProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    /**
     * checked 값을 조절하기 위해서는
     * onChange 핸들러가 연결되어야 합니다.
     */
    onChange?.(e.currentTarget.checked)
  }

  const styles = useMemo(
    () => ({ color, size, checked, disabled }),
    [color, size, checked, disabled]
  )

  return (
    <SwitchBox htmlFor={id} {...styles}>
      <SwitchBall />

      <input
        type="checkbox"
        id={id}
        onChange={handleChange}
        checked={checked}
        disabled={disabled}
        css={hiddenElement}
      />
    </SwitchBox>
  )
}

export default Switch

const SwitchBall = styled.div`
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.white};
  transition: transform 0.2s ease-out;
  box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.15);
`

type SwitchBoxStyle = CombineType<
  Pick<InputProps, 'checked' | 'disabled'>,
  SwitchStyle
>
const PADDING = '2px'
const BALL_MOVING_DISTANCE = 0.9

const SwitchBox = styled.label<SwitchBoxStyle>`
  display: block;
  cursor: pointer;

  padding: ${PADDING};

  ${({ size }) => css`
    width: calc(
      (1 + ${BALL_MOVING_DISTANCE}) * ${getSize(size)} + ${PADDING} * 2
    );
    height: calc(${getSize(size)} + ${PADDING} * 2);
    border-radius: calc(${getSize(size)} / 2 + ${PADDING});

    ${SwitchBall} {
      width: ${getSize(size)};
      height: ${getSize(size)};
    }
  `}

  ${({ checked, color, size, theme }) =>
    checked
      ? css`
          background-color: ${theme.color[color]};

          ${SwitchBall} {
            transform: translateX(
              calc(${BALL_MOVING_DISTANCE} * ${getSize(size)})
            );
          }
        `
      : css`
          background-color: ${theme.color.grey400};
        `}

  ${({ disabled, theme }) =>
    disabled &&
    css`
      background-color: ${theme.color.grey200};
      cursor: not-allowed;
    `}
`
