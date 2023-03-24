import React, { createContext, useMemo } from 'react'

type InputProviderValue<T = string> = {
  value?: T
}
type InputProviderAction<T = string> = {
  setValue?: (value: T) => void
  enterSubmit?: (value: T) => void
}

export type InputProviderValues = InputProviderValue & InputProviderAction

interface Props extends InputProviderValues {
  children: React.ReactNode
}

export const contextInputValue = createContext<InputProviderValue | undefined>(
  undefined
)
export const contextInputAction = createContext<
  InputProviderAction | undefined
>(undefined)

const InputProvider = ({ children, value, setValue, enterSubmit }: Props) => {
  const providerValue = useMemo(
    () => ({
      value,
    }),
    [value]
  )

  const providerAction = useMemo(
    () => ({ setValue, enterSubmit }),
    [setValue, enterSubmit]
  )
  return (
    <contextInputValue.Provider value={providerValue}>
      <contextInputAction.Provider value={providerAction}>
        {children}
      </contextInputAction.Provider>
    </contextInputValue.Provider>
  )
}

export default InputProvider
