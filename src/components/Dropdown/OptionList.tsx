import { KeyboardEvent, MouseEvent, ReactElement } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

import Flex from '../Flex'

import { Z_INDEX } from '@/styles/constants/zIndex'
import { SHADOW } from '@/styles/constants/shadow'
import { OptionContextValueProps } from './context/OptionProvider'
import {
  useOptionActionContext,
  useOptionValueContext,
} from './context/optionConsumer'
import useKeyboardNavigation from './useKeyboardNavigation'
import { KEYBOARD_KEY } from '@/shared/constants/keyboard'
import { TriggerValueContextProps } from './context/TriggerProvider'
import { useTriggerValueContext } from './context/triggerConsumer'

type OptionListStyle = Pick<TriggerValueContextProps, 'isOpen'>

type ChildrenArgs = Pick<OptionContextValueProps, 'options' | 'selectedValue'>

type Props = {
  children: (args: ChildrenArgs) => ReactElement[]
}
const OptionList = ({ children }: Props) => {
  const { isOpen, inputRef } = useTriggerValueContext()
  const { options, selectedValue } = useOptionValueContext()
  const { setSelectedValue } = useOptionActionContext()

  useKeyboardNavigation()

  const getDatasetValue = (target: EventTarget) => {
    if (!(target instanceof HTMLLIElement)) return

    return target.dataset.value
  }

  const handleClick = (e: MouseEvent<HTMLUListElement>) => {
    const target = e.target
    const value = getDatasetValue(target)

    if (!!value) {
      setSelectedValue(value)
      inputRef.current?.focus()
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLUListElement>) => {
    const key = e.key

    if (key === KEYBOARD_KEY.enter) {
      const target = e.target
      const value = getDatasetValue(target)

      if (!!value) {
        setSelectedValue(value)
        inputRef.current?.focus()
      }
    }
  }

  return (
    <OptionContainer
      direction="column"
      as="ul"
      role="listbox"
      isOpen={isOpen}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      {children({ selectedValue, options })}
    </OptionContainer>
  )
}

export default OptionList

const OptionContainer = styled(Flex)<OptionListStyle>`
  position: absolute;
  top: calc(100% + 5px);
  left: 0px;

  width: 100%;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.white};
  ${SHADOW.dropBox};
  ${Z_INDEX.dropBox};

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
