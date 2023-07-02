import { createContext, useContext } from 'react'
import { DialogAnswer } from '.'

const initialValue = null

type Value = {
  clickAnswer: (answer: DialogAnswer) => () => void
}

const Context = createContext<Value | typeof initialValue>(initialValue)

export const DialogProvider = Context.Provider

export const useDialogContext = () => {
  const context = useContext(Context)

  if (context === initialValue) {
    throw Error('it should be in DialogProvider')
  }

  return context
}
