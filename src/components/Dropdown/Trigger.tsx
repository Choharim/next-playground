import { KeyboardEvent, PropsWithChildren, useRef } from 'react'

import useClickOutside from '@/hooks/useClickOutside'
import { useTriggerActionContext } from './context/triggerConsumer'

const Trigger = ({ children }: PropsWithChildren) => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const { onClose, onToggle } = useTriggerActionContext()

  useClickOutside({ target: wrapperRef, callabck: onClose })

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    e.preventDefault()
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
