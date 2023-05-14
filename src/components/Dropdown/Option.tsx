import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { ComponentProps } from 'react'

import { CombineType } from '@/shared/types/extendable'
import { OptionData } from '.'
import { useSelectedValue, useSetSelectedValue } from './context/consumer'

type OptionStyle = {
  isSelected: boolean
}
type Props = CombineType<ComponentProps<'li'>, Pick<OptionData, 'value'>>

const Option = ({ value, children, ...attributes }: Props) => {
  const setSelectedValue = useSetSelectedValue()
  const selectedValue = useSelectedValue()
  const isSelected = selectedValue === value

  const clickOption = () => {
    setSelectedValue(value)
  }

  return (
    <OptionWrapper
      {...attributes}
      onClick={clickOption}
      role="option"
      aria-selected={isSelected}
      isSelected={isSelected}
    >
      {children}
    </OptionWrapper>
  )
}

export default Option

const OptionWrapper = styled.li<OptionStyle>`
  cursor: pointer;
  padding: 6px 8px;
  border-radius: inherit;

  ${({ isSelected, theme }) =>
    isSelected
      ? css`
          background-color: ${theme.color.primary100};
        `
      : css`
          &:hover {
            background-color: ${theme.color.grey200};
          }
        `}
`
