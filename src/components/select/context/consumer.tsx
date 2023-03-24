import { useContext } from 'react'
import { selectAction, selectStaticData, selectValue } from './selectProvider'

export const useSelectedOption = () => {
  const context = useContext(selectValue)

  if (context === undefined) {
    throw new Error('it must be used within a SelectProvider')
  }

  return context.selectedOption
}
export const useOptions = () => {
  const context = useContext(selectStaticData)

  if (context === undefined) {
    throw new Error('it must be used within a SelectProvider')
  }

  return context.options
}

export const useSetSelectedOption = () => {
  const context = useContext(selectAction)

  if (context === undefined) {
    throw new Error('it must be used within a SelectProvider')
  }

  return context.setSelectedOption
}
