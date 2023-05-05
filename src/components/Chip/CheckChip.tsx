import { css } from '@emotion/css'
import { ChangeEvent, ComponentProps, forwardRef } from 'react'

import Chip, { ChipProps } from '.'

import { CombineType } from '@/shared/types/extendable'
import useCheckChipTheme from './hooks/useCheckChipTheme'
import { RequiredFields } from '@/shared/types/narrow'

type InputProps = RequiredFields<
  Pick<ComponentProps<'input'>, 'onChange' | 'checked'>,
  'checked'
>

export type CheckChipProps = CombineType<
  RequiredFields<Omit<ChipProps<'label'>, 'as'>, 'htmlFor'>,
  InputProps
>

const CheckChip = forwardRef<HTMLLabelElement, CheckChipProps>(
  (
    {
      variety = 'outline',
      checked,
      onChange,
      className,
      children,
      ...labelAttributes
    },
    forwardRef
  ) => {
    const { htmlFor } = labelAttributes
    const theme = useCheckChipTheme({ checked, variety }, className)

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      /**
       * checked 값을 조절하기 위해서는
       * onChange 핸들러가 연결되어야 합니다.
       */
      onChange?.(e)
    }

    return (
      <Chip
        {...labelAttributes}
        ref={forwardRef}
        as="label"
        clickable
        variety={variety}
        className={theme}
      >
        {children}

        <input
          type="checkbox"
          id={htmlFor}
          onChange={handleInputChange}
          checked={checked}
          className={HiddenInputStyle}
        />
      </Chip>
    )
  }
)

export default CheckChip

CheckChip.displayName = 'CheckChip'

const HiddenInputStyle = css`
  position: absolute;
  top: 50%;
  left: 50%;
  appearance: none;
`
