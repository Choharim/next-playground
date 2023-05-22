import { PropsWithChildren, createContext, useMemo } from 'react'

export interface RadioGroupProps {
  groupName: string
  selectedValue: string
  onChange: (value: string) => void
}

export const RadioGroupContext = createContext<RadioGroupProps | null>(null)

const RadioGroupProvider = ({
  children,
  groupName,
  selectedValue,
  onChange,
}: PropsWithChildren<RadioGroupProps>) => {
  const values = useMemo(
    () => ({ groupName, selectedValue, onChange }),
    [groupName, selectedValue, onChange]
  )

  return (
    <RadioGroupContext.Provider value={values}>
      {children}
    </RadioGroupContext.Provider>
  )
}

export default RadioGroupProvider
