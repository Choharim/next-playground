import { ChangeEvent, forwardRef, useMemo } from 'react'
import { Theme, css, useTheme } from '@emotion/react'

import Chip, { ChipProps, ChipStyle } from '../Chip'

import { CombineType } from '@/shared/types/extendable'
import getVariety from '../Chip/utils/getVariety'
import { hiddenElement } from '@/styles/utils/accessibility'
import { useRadioGroup } from './context/consumer'

type InputProps = {
  value: string
}

type RadioChipProps = CombineType<Omit<ChipProps<'label'>, 'as'>, InputProps>

const RadioChip = forwardRef<HTMLLabelElement, RadioChipProps>(
  (
    {
      variety = 'outline',
      size = 'medium',
      typoVariety = 'body_1',

      value,
      children,
      ...labelAttributes
    },
    forwardRef
  ) => {
    const theme = useTheme()
    const { selectedValue, groupName, onChange } = useRadioGroup()

    const styles = useMemo(
      () => ({ variety, typoVariety, size }),
      [variety, typoVariety, size]
    )

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value)
    }

    return (
      <Chip
        {...labelAttributes}
        {...styles}
        clickable
        as="label"
        ref={forwardRef}
        htmlFor={value}
        css={radioChipStyle(
          { checked: selectedValue === value, variety },
          theme
        )}
      >
        {children}

        <input
          type="radio"
          id={value}
          value={value}
          name={groupName}
          onChange={handleChange}
          checked={selectedValue === value}
          css={hiddenElement}
        />
      </Chip>
    )
  }
)

export default RadioChip

RadioChip.displayName = 'RadioChip'

interface radioChipStyle extends Pick<ChipStyle, 'variety'> {
  checked: boolean
}

const radioChipStyle = (
  { checked, variety }: radioChipStyle,
  theme: Theme
) => css`
  position: relative;

  ${getVariety({ variety, status: checked ? 'checked' : 'default' }, theme)};
`
