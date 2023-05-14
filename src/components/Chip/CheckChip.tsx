import { ChangeEvent, ComponentProps, forwardRef, useMemo } from 'react'
import { css } from '@emotion/react'

import Chip, { ChipProps, ChipStyle } from '.'

import { CombineType } from '@/shared/types/extendable'
import { RequiredFields } from '@/shared/types/narrow'
import styled from '@emotion/styled'
import getVariety from './utils/getVariety'

interface CheckChipStyle
  extends Omit<ChipStyle, 'clickable'>,
    Pick<InputProps, 'checked'> {}

type InputProps = RequiredFields<
  Pick<ComponentProps<'input'>, 'onChange' | 'checked'>,
  'checked'
>

type CheckChipProps = CombineType<
  RequiredFields<Omit<ChipProps<'label'>, 'as'>, 'htmlFor'>,
  InputProps
>

const CheckChip = forwardRef<HTMLLabelElement, CheckChipProps>(
  (
    {
      variety = 'outline',
      size = 'medium',
      typoVariety = 'body_1',

      checked,
      onChange,
      children,
      ...labelAttributes
    },
    forwardRef
  ) => {
    const { htmlFor } = labelAttributes

    const styles = useMemo(
      () => ({ variety, typoVariety, size }),
      [variety, typoVariety, size]
    )

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      /**
       * checked 값을 조절하기 위해서는
       * onChange 핸들러가 연결되어야 합니다.
       */
      onChange?.(e)
    }

    return (
      <CheckChipWrapper
        {...labelAttributes}
        {...styles}
        checked={checked}
        as="label"
        ref={forwardRef}
        clickable
      >
        {children}

        <input
          type="checkbox"
          id={htmlFor}
          onChange={handleInputChange}
          checked={checked}
          css={hiddenInputStyle}
        />
      </CheckChipWrapper>
    )
  }
)

export default CheckChip

CheckChip.displayName = 'CheckChip'

const CheckChipWrapper = styled(Chip)<CheckChipStyle>`
  position: relative;

  ${({ checked, variety, theme }) =>
    checked && getVariety({ status: 'checked', variety }, theme)};
`
const hiddenInputStyle = css`
  position: absolute;
  top: 50%;
  left: 50%;
  appearance: none;
`
