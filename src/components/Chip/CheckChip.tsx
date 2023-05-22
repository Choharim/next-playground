import { ChangeEvent, forwardRef, useMemo } from 'react'
import { css, useTheme } from '@emotion/react'

import Chip, { ChipProps } from '.'

import { CombineType } from '@/shared/types/extendable'
import { RequiredFields } from '@/shared/types/narrow'
import getVariety from './utils/getVariety'
import { hiddenElement } from '@/styles/utils/accessibility'

type InputProps = {
  onChange?: (checked: boolean) => void
  checked: boolean
}

type CheckChipProps = CombineType<
  RequiredFields<Omit<ChipProps<'label'>, 'as'>, 'id'>,
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
      id,
      ...labelAttributes
    },
    forwardRef
  ) => {
    const theme = useTheme()

    const styles = useMemo(
      () => ({ variety, typoVariety, size }),
      [variety, typoVariety, size]
    )

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      /**
       * checked 값을 조절하기 위해서는
       * onChange 핸들러가 연결되어야 합니다.
       */
      onChange?.(e.currentTarget.checked)
    }

    return (
      <Chip
        {...labelAttributes}
        {...styles}
        as="label"
        ref={forwardRef}
        htmlFor={id}
        clickable
        css={css`
          position: relative;

          ${getVariety(
            { variety, status: checked ? 'checked' : 'default' },
            theme
          )};
        `}
      >
        {children}

        <input
          type="checkbox"
          id={id}
          onChange={handleChange}
          checked={checked}
          css={hiddenElement}
        />
      </Chip>
    )
  }
)

export default CheckChip

CheckChip.displayName = 'CheckChip'
