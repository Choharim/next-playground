import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { ComponentProps, useEffect, useRef } from 'react'

import { CombineType } from '@/shared/types/extendable'
import { OptionData } from '.'
import {
  useOptionIndex,
  useOptionValueContext,
  useOptionActionContext,
} from './context/optionConsumer'

type Props = CombineType<ComponentProps<'li'>, Pick<OptionData, 'value'>>

const Option = ({ value, children, ...attributes }: Props) => {
  const optionRef = useRef<HTMLLIElement>(null)

  const { setFocusIndex } = useOptionActionContext()
  const index = useOptionIndex(value)
  const { focusIndex, selectedValue } = useOptionValueContext()
  const isSelected = selectedValue === value

  useEffect(() => {
    if (!optionRef.current) return

    if (index === focusIndex) {
      optionRef.current.focus()
    }
  }, [focusIndex, index])

  const handleFocus = () => {
    setFocusIndex(index)
  }

  return (
    <OptionWrapper
      {...attributes}
      role="option"
      ref={optionRef}
      aria-selected={isSelected}
      isSelected={isSelected}
      tabIndex={0}
      data-value={value}
      onMouseOver={handleFocus}
    >
      {children}
    </OptionWrapper>
  )
}

export default Option

type OptionStyle = {
  isSelected: boolean
}
const OptionWrapper = styled.li<OptionStyle>`
  cursor: pointer;
  padding: 6px 8px;
  border-radius: inherit;

  ${({ theme }) =>
    css`
      &:focus {
        background-color: ${theme.color.grey200};
        outline: none;
      }
    `}

  ${({ isSelected, theme }) =>
    isSelected &&
    css`
      background-color: ${theme.color.primary100};
    `}
`
