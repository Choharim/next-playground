import { useContext } from 'react'
import { OptionContext, TriggerContext } from './Provider'

export const useIsOpen = () => {
  const context = useContext(TriggerContext)

  if (context === undefined) {
    throw Error('it must be used within a TriggerContext')
  }

  return context.isOpen
}

export const useOnToggle = () => {
  const context = useContext(TriggerContext)

  if (context === undefined) {
    throw Error('it must be used within a TriggerContext')
  }

  return context.onToggle
}

export const useOnClose = () => {
  const context = useContext(TriggerContext)

  if (context === undefined) {
    throw Error('it must be used within a TriggerContext')
  }

  return context.onClose
}

export const useOptions = () => {
  const context = useContext(OptionContext)

  if (context === undefined) {
    throw Error('it must be used within a OptionContext')
  }

  return context.options
}

export const useSelectedValue = () => {
  const context = useContext(OptionContext)

  if (context === undefined) {
    throw Error('it must be used within a OptionContext')
  }

  return context.selectedValue
}

export const useSetSelectedValue = () => {
  const context = useContext(OptionContext)

  if (context === undefined) {
    throw Error('it must be used within a OptionContext')
  }

  return context.setSelectedValue
}
