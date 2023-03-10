import React, { createContext, useContext, useMemo } from 'react'

type InputProviderValue<T = string> = {
  value?: T
}
type InputProviderAction<T = string> = {
  setValue?: (value: T) => void
  submit?: (value: T) => void
}

export type InputProviderValues = InputProviderValue & InputProviderAction

interface Props extends InputProviderValues {
  children: React.ReactNode
}

const inputValue = createContext<InputProviderValue | undefined>(undefined)
const inputAction = createContext<InputProviderAction | undefined>(undefined)

const InputProvider = ({ children, value, setValue, submit }: Props) => {
  const providerValue = useMemo(
    () => ({
      value,
    }),
    [value]
  )

  const providerAction = useMemo(
    () => ({ setValue, submit }),
    [setValue, submit]
  )
  return (
    <inputValue.Provider value={providerValue}>
      <inputAction.Provider value={providerAction}>
        {children}
      </inputAction.Provider>
    </inputValue.Provider>
  )
}

export default InputProvider

export const useValue = () => {
  const context = useContext(inputValue)

  if (context === undefined) {
    throw new Error('it must be used within a InputProvider')
  }

  return context.value
}

export const useSetValue = () => {
  const context = useContext(inputAction)

  if (context === undefined) {
    throw new Error('it must be used within a InputProvider')
  }

  return context.setValue
}

export const useSubmit = () => {
  const context = useContext(inputAction)

  if (context === undefined) {
    throw new Error('it must be used within a InputProvider')
  }

  return context.submit
}
