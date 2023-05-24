import React, { KeyboardEvent, useEffect } from 'react'
import { css } from '@emotion/react'

import Input from '../Input'

import { useLabel } from './context/optionConsumer'
import {
  useTriggerActionContext,
  useTriggerValueContext,
} from './context/triggerConsumer'
import { KEYBOARD_KEY } from '@/shared/constants/keyboard'
import { BsFillTriangleFill } from 'react-icons/bs'

const Value = () => {
  const label = useLabel()
  const { inputRef, isOpen } = useTriggerValueContext()
  const { onToggle } = useTriggerActionContext()

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const key = e.key

    if (key === KEYBOARD_KEY.enter) {
      onToggle()
    }
  }

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus()
    }
  }, [isOpen, inputRef])

  return (
    <Input
      ref={inputRef}
      readOnly
      value={label}
      css={css`
        cursor: pointer;
      `}
      isFocused={isOpen}
      onKeyDown={handleKeyDown}
    >
      <div
        css={
          isOpen
            ? css`
                transform: rotate(180deg);
              `
            : undefined
        }
      >
        <BsFillTriangleFill />
      </div>
    </Input>
  )
}

export default Value
