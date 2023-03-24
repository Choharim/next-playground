import React, { createContext, useMemo, useState } from 'react'

import { SelectBasic } from '../shared'

interface SelectValue {
  selectedOption: string
}
type SelectAction = {
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>
}

export const selectStaticData = createContext<
  Pick<SelectBasic, 'options'> | undefined
>(undefined)
export const selectValue = createContext<SelectValue | undefined>(undefined)
export const selectAction = createContext<SelectAction | undefined>(undefined)

interface SelectProviderProps
  extends Pick<SelectBasic, 'options'>,
    Partial<SelectAction>,
    Partial<SelectValue> {
  children: React.ReactNode
}
const SelectProvider = ({
  children,
  options,
  selectedOption,
  setSelectedOption,
}: SelectProviderProps) => {
  const [_selectedOption, _setSelectedOption] = useState('')
  const isUseStateProps =
    typeof selectedOption === 'string' && setSelectedOption

  const value = useMemo(
    () => ({
      selectedOption: isUseStateProps ? selectedOption : _selectedOption,
    }),
    [selectedOption, isUseStateProps, _selectedOption]
  )

  const action = useMemo(
    () => ({
      setSelectedOption: isUseStateProps
        ? setSelectedOption
        : _setSelectedOption,
    }),
    [isUseStateProps, _setSelectedOption, setSelectedOption]
  )

  const staticData = useMemo(
    () => ({
      options,
    }),
    [options]
  )

  return (
    <selectStaticData.Provider value={staticData}>
      <selectAction.Provider value={action}>
        <selectValue.Provider value={value}>{children}</selectValue.Provider>
      </selectAction.Provider>
    </selectStaticData.Provider>
  )
}

export default SelectProvider
