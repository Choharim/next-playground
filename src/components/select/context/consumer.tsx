import { useContext } from 'react'
import { selectAction, selectValue } from './selectProvider'

export const useOpen = () => {
  const context = useContext(selectValue)

  if (context === undefined) {
    throw new Error('it must be used within a SelectProvider')
  }

  return context.open
}

export const useSelectedOption = () => {
  const context = useContext(selectValue)

  if (context === undefined) {
    throw new Error('it must be used within a SelectProvider')
  }

  return context.selectedOption
}
export const useOptions = () => {
  const context = useContext(selectValue)

  if (context === undefined) {
    throw new Error('it must be used within a SelectProvider')
  }

  return context.options
}

export const useToggleOpen = () => {
  const context = useContext(selectAction)

  if (context === undefined) {
    throw new Error('it must be used within a SelectProvider')
  }

  return context.toggleOpen
}

export const useClose = () => {
  const context = useContext(selectAction)

  if (context === undefined) {
    throw new Error('it must be used within a SelectProvider')
  }

  return context.close
}

export const useSetSelectedOption = () => {
  const context = useContext(selectAction)

  if (context === undefined) {
    throw new Error('it must be used within a SelectProvider')
  }

  return context.setSelectedOption
}
