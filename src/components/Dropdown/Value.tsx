import React, { KeyboardEvent } from 'react'
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

  const handleKeydown = (e: KeyboardEvent<HTMLInputElement>) => {
    const key = e.key

    if (key === KEYBOARD_KEY.enter) {
      onToggle()
    }
  }
  return (
    <Input
      ref={inputRef}
      readOnly
      value={label}
      css={css`
        cursor: pointer;
      `}
      onKeyDown={handleKeydown}
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
