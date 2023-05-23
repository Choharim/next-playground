import { useContext } from 'react'

import { TriggerActionContext, TriggerValueContext } from './TriggerProvider'

export const useTriggerValueContext = () => {
  const context = useContext(TriggerValueContext)

  if (context === null) {
    throw Error('it must be used within a OptionProvider')
  }

  const { isOpen, inputRef } = context

  return { isOpen, inputRef }
}

export const useTriggerActionContext = () => {
  const context = useContext(TriggerActionContext)

  if (context === null) {
    throw Error('it must be used within a OptionProvider')
  }

  const { onClose, onToggle } = context

  return { onClose, onToggle }
}
