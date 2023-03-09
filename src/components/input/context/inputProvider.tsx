import React, { createContext, useContext, useMemo } from 'react'

export type InputProviderValue<T = string> = {
  value?: T
  setValue?: (value: T) => void
  submit?: (value: T) => void
}

interface Props extends InputProviderValue {
  children: React.ReactNode
}

const inputContext = createContext<InputProviderValue | undefined>(undefined)

const InputProvider = ({ children, value, setValue, submit }: Props) => {
  const providerValue = useMemo(
    () => ({ value: value, setValue, submit }),
    [value, setValue, submit]
  )

  return (
    <inputContext.Provider value={providerValue}>
      {children}
    </inputContext.Provider>
  )
}

export default InputProvider

export const useValue = () => {
  const context = useContext(inputContext)

  if (context === undefined) {
    throw new Error('it must be used within a InputProvider')
  }

  return context.value
}

export const useSetValue = () => {
  const context = useContext(inputContext)

  if (context === undefined) {
    throw new Error('it must be used within a InputProvider')
  }

  return context.setValue
}

export const useSubmit = () => {
  const context = useContext(inputContext)

  if (context === undefined) {
    throw new Error('it must be used within a InputProvider')
  }

  return context.submit
}
