import { css } from '@emotion/react'

import Input from '../Input'

import { useLabel } from './context/optionConsumer'
import { useTriggerValueContext } from './context/triggerConsumer'
import { BsFillTriangleFill } from 'react-icons/bs'

const Value = () => {
  const label = useLabel()
  const { inputRef, isOpen } = useTriggerValueContext()

  return (
    <Input
      ref={inputRef}
      readOnly
      value={label}
      css={css`
        cursor: pointer;
      `}
      isFocused={isOpen}
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
