import { useContext } from 'react'
import { RadioGroupContext } from './Provider'

export const useRadioGroup = () => {
  const context = useContext(RadioGroupContext)

  if (context === null) {
    throw Error('it must be used within a RadioGroupContext')
  }

  return context
}
