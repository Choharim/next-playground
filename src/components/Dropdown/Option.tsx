import { css, cx } from '@emotion/css'
import { Theme, useTheme } from '@emotion/react'
import { ComponentProps } from 'react'

import { CombineType } from '@/shared/types/extendable'
import { OptionData } from '.'
import { useSelectedValue, useSetSelectedValue } from './context/consumer'

type Props = CombineType<ComponentProps<'li'>, Pick<OptionData, 'value'>>

const Option = ({ value, children, className, ...attributes }: Props) => {
  const theme = useTheme()
  const setSelectedValue = useSetSelectedValue()
  const selectedValue = useSelectedValue()
  const isSelected = selectedValue === value

  const clickOption = () => {
    setSelectedValue(value)
  }

  return (
    <li
      {...attributes}
      onClick={clickOption}
      className={cx(getStyle({ theme, isSelected }), className)}
      role="option"
      aria-selected={isSelected}
    >
      {children}
    </li>
  )
}

export default Option

const getStyle = ({
  theme,
  isSelected,
}: {
  theme: Theme
  isSelected: boolean
}) => css`
  cursor: pointer;
  padding: 6px 8px;
  border-radius: inherit;

  ${isSelected
    ? css`
        background-color: ${theme.color.primary100};
      `
    : css`
        &:hover {
          background-color: ${theme.color.grey200};
        }
      `}
`
