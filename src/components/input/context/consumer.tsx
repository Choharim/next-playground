import { useContext } from 'react'
import { contextInputAction, contextInputValue } from './inputProvider'

export const useInputValue = () => {
  const context = useContext(contextInputValue)

  if (context === undefined) {
    throw new Error('it must be used within a InputProvider')
  }

  return context.value
}

export const useInputSetValue = () => {
  const context = useContext(contextInputAction)

  if (context === undefined) {
    throw new Error('it must be used within a InputProvider')
  }

  return context.setValue
}

export const useInputEnterSubmit = () => {
  const context = useContext(contextInputAction)

  if (context === undefined) {
    throw new Error('it must be used within a InputProvider')
  }

  return context.enterSubmit
}
