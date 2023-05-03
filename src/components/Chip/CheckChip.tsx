import Chip, { ChipProps } from '.'
import { css } from '@emotion/css'
import { CombineType } from '@/shared/types/extendable'
import useCheckChipTheme from './hooks/useCheckChipTheme'
import { MouseEvent, forwardRef } from 'react'

interface CheckChipThemeProps {
  checked: boolean
}

export type CheckChipProps = CombineType<
  Omit<ChipProps<'label'>, 'as'>,
  CheckChipThemeProps
>

const CheckChip = forwardRef<HTMLLabelElement, CheckChipProps>(
  (
    { children, checked, variety = 'outline', className, ...labelAttributes },
    ref
  ) => {
    const { htmlFor } = labelAttributes
    const theme = useCheckChipTheme({ checked, variety }, className)

    const handleChecked = () => {
      /**
       * checked 값을 조절하기 위해서는
       * onChange 핸들러가 연결되어야 합니다.
       */
    }

    const handleClick = (e: MouseEvent<HTMLInputElement>) => {
      e.stopPropagation()
    }

    return (
      <Chip
        {...labelAttributes}
        ref={ref}
        as="label"
        clickable
        variety={variety}
        className={theme}
      >
        {children}

        <input
          type="checkbox"
          id={htmlFor}
          onChange={handleChecked}
          onClick={handleClick}
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
  visibility: hidden;
`
