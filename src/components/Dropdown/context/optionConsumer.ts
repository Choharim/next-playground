import { useContext } from 'react'
import { OptionActionContext, OptionValueContext } from './OptionProvider'

export const useOptionValueContext = () => {
  const context = useContext(OptionValueContext)

  if (context === null) {
    throw Error('it must be used within a OptionProvider')
  }

  const { options, selectedValue, placeholder, focusIndex } = context

  return { options, selectedValue, placeholder, focusIndex }
}

export const useOptionActionContext = () => {
  const context = useContext(OptionActionContext)

  if (context === null) {
    throw Error('it must be used within a OptionProvider')
  }

  const { setFocusIndex, setSelectedValue } = context

  return { setFocusIndex, setSelectedValue }
}

export const useOptionIndex = (optionValue: string) => {
  const { options } = useOptionValueContext()

  return options.findIndex((option) => option.value === optionValue)
}

export const useLabel = () => {
  const { options, selectedValue, placeholder } = useOptionValueContext()

  const label = options.find((option) => option.value === selectedValue)?.label

  return (label || placeholder) ?? ''
}
