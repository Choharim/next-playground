import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React, {
  Children,
  ComponentPropsWithoutRef,
  isValidElement,
  MouseEvent,
  ReactNode,
  useCallback,
  useRef,
} from 'react'

import useClickOutside from '@/hooks/useClickOutside'
import { useIsOpenState } from './shared'

import ToggleIcon from './ToggleIcon'
import SelectedOption from './SelectedOption'
import OptionList from './OptionList'

const ToggleIconType = (<ToggleIcon />).type
function getToggleIcon(children: ReactNode) {
  return Children.toArray(children).find(
    (child) => isValidElement(child) && child.type === ToggleIconType
  )
}

interface Props extends ComponentPropsWithoutRef<'select'> {
  isError?: boolean
}

const Select = ({
  isError,
  className,
  children,
  ...selectAttributes
}: Props) => {
  const selectRef = useRef<HTMLDivElement>(null)
  const { isOpen, setIsOpen } = useIsOpenState()

  const close = useCallback(() => {
    setIsOpen(false)
  }, [setIsOpen])

  const toggle = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    setIsOpen((prev) => !prev)
  }

  useClickOutside({
    target: selectRef,
    callabck: close,
  })

  const toggleIcon = getToggleIcon(children)

  return (
    <Box
      className={className}
      ref={selectRef}
      isError={isError}
      onClick={toggle}
    >
      <SelectedOption placeholder={selectAttributes.placeholder} />

      {isValidElement(toggleIcon) &&
        React.cloneElement(toggleIcon, { ...toggleIcon.props, isOpen })}

      <OptionList {...selectAttributes} isOpen={isOpen} />
    </Box>
  )
}

export default Select

Select.ToggleIcon = ToggleIcon

const Box = styled('div')<Pick<Props, 'isError'>>`
  position: relative;
  width: 100%;
  height: 32px;
  padding: 4px 12px;
  border-radius: 4px;
  cursor: pointer;

  ${({ isError, theme }) =>
    isError
      ? css`
          border: 1px solid red;
        `
      : css`
          border: 1px solid ${theme.color.grey400};
        `};
`
