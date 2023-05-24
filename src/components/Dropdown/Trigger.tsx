import { KeyboardEvent, PropsWithChildren, useRef } from 'react'

import useClickOutside from '@/hooks/useClickOutside'
import {
  useTriggerActionContext,
  useTriggerValueContext,
} from './context/triggerConsumer'
import { KEYBOARD_KEY } from '@/shared/constants/keyboard'

const Trigger = ({ children }: PropsWithChildren) => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const { onClose, onToggle, onOpen } = useTriggerActionContext()
  const { isOpen } = useTriggerValueContext()

  useClickOutside({ target: wrapperRef, callabck: onClose })

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const key = e.key

    if (key === KEYBOARD_KEY.enter) {
      onToggle()
    } else if (key === KEYBOARD_KEY.arrowDown) {
      if (!isOpen) {
        /**
         * @description
         * useKeyboardNavigation에서 window keydown 이벤트 발생 시 focusIndex를 변경하는 상황.
         * focusIndex 변경을 막기 위해 이벤트 전파 방지.
         */
        e.stopPropagation()

        onOpen()
      }
    }
  }

  return (
    <div
      ref={wrapperRef}
      onClick={onToggle}
      onKeyDown={handleKeyDown}
      role="button"
    >
      {children}
    </div>
  )
}

export default Trigger
