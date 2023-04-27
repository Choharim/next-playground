import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { ComponentPropsWithoutRef, MouseEvent, useEffect } from 'react'

import { useOptions, useSetSelectedOption } from './context/consumer'
import HiddenSelect from './HiddenSelect'
import { SelectBasic } from './shared'

interface Props
  extends Pick<SelectBasic, 'isOpen'>,
    ComponentPropsWithoutRef<'select'> {}

const OptionList = ({ isOpen, ...selectAttributes }: Props) => {
  const { defaultValue } = selectAttributes
  const options = useOptions()
  const setSelectedOption = useSetSelectedOption()

  useEffect(() => {
    setSelectedOption(String(defaultValue ?? ''))
  }, [defaultValue, setSelectedOption])

  const selectOption = (e: MouseEvent<HTMLUListElement>) => {
    const value = (e.target as HTMLLIElement)?.id ?? ''
    setSelectedOption(value)
  }

  return (
    <>
      <Options isOpen={isOpen} onClick={selectOption}>
        {options.map((option) => (
          <Option key={option.value} id={option.value}>
            {option.text}
          </Option>
        ))}
      </Options>

      <HiddenSelect {...selectAttributes} />
    </>
  )
}

export default OptionList

const Options = styled.ul<Pick<SelectBasic, 'isOpen'>>`
  position: absolute;
  top: calc(100% + 5px);
  left: 0px;

  width: 100%;
  display: flex;
  flex-direction: column;

  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.shadow.dropBox};
  ${({ theme }) => theme.zIndex.dropBox};

  ${({ isOpen }) =>
    isOpen
      ? css`
          opacity: 1;
          visibility: visible;
        `
      : css`
          opacity: 0;
          visibility: hidden;
        `}

  transition: 0.2s ease;
`

const Option = styled.li`
  width: 100%;
  padding: 6px 8px;

  &:not(:last-of-type) {
    border-bottom: 1px solid ${({ theme }) => theme.color.grey200};
  }

  &:is(:hover) {
    background-color: ${({ theme }) => theme.color.grey200};
  }
`
