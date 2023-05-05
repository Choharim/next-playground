import { useContext } from 'react'
import { OptionContext, TriggerContext } from './Provider'

export const useIsOpen = () => {
  const context = useContext(TriggerContext)

  if (context === null) {
    throw Error('it must be used within a TriggerContext')
  }

  return context.isOpen
}

export const useTriggerActions = () => {
  const context = useContext(TriggerContext)

  if (context === null) {
    throw Error('it must be used within a TriggerContext')
  }

  return { onToggle: context.onToggle, onClose: context.onClose }
}

export const useOptions = () => {
  const context = useContext(OptionContext)

  if (context === null) {
    throw Error('it must be used within a OptionContext')
  }

  return context.options
}

export const useSelectedValue = () => {
  const context = useContext(OptionContext)

  if (context === null) {
    throw Error('it must be used within a OptionContext')
  }

  return context.selectedValue
}

export const useSetSelectedValue = () => {
  const context = useContext(OptionContext)

  if (context === null) {
    throw Error('it must be used within a OptionContext')
  }

  return context.setSelectedValue
}

export const useLabel = () => {
  const context = useContext(OptionContext)

  if (context === null) {
    throw Error('it must be used within a OptionContext')
  }

  const { options, selectedValue, placeholder } = context
  const label = options.find((option) => option.value === selectedValue)?.label

  return (label || placeholder) ?? ''
}
