import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React, { HTMLAttributes, useRef } from 'react'

import useClickOutside from '@/hooks/useClickOutside'
import { useClose, useToggleOpen } from './context/consumer'

import RowSelect from './RowSelect'
import OptionList from './OptionList'
import SelectedOption from './SelectedOption'

interface Props extends HTMLAttributes<HTMLSelectElement> {
  isError?: boolean
  children?: React.ReactNode
}

const Select = ({
  isError,
  className,
  children,
  ...selectAttributes
}: Props) => {
  const selectRef = useRef<HTMLDivElement>(null)
  const toggle = useToggleOpen()
  const close = useClose()

  useClickOutside({
    target: selectRef,
    callabck: close,
  })

  return (
    <Box
      className={className}
      ref={selectRef}
      isError={isError}
      onClick={toggle}
    >
      <SelectedOption placeholder={selectAttributes.placeholder} />
      {children}
      <OptionList defaultValue={selectAttributes.defaultValue} />

      <Select.HiddenSelect {...selectAttributes} />
    </Box>
  )
}

export default Select

Select.HiddenSelect = styled(RowSelect)``

const Box = styled.div<Pick<Props, 'isError'>>`
  ${Select.HiddenSelect} {
    display: none;
  }
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 32px;
  padding: 4px 12px;
  cursor: pointer;

  border: 1px solid grey;
  ${({ isError }) =>
    isError &&
    css`
      border: 1px solid red;
    `};
`
