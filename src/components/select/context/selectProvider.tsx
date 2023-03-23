import React, { createContext, useCallback, useMemo, useState } from 'react'

type SelectValue = {
  open: boolean
  selectedOption: string
  options: Option[]
}
type SelectAction = {
  toggleOpen: () => void
  close: () => void
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>
}

export const selectValue = createContext<SelectValue | undefined>(undefined)
export const selectAction = createContext<SelectAction | undefined>(undefined)

export type Option = {
  text: string
  value: string
}

type Props = {
  children: React.ReactNode
  options: Option[]
}
const SelectProvider = ({ children, options }: Props) => {
  const [open, setOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState('')

  const value = useMemo(
    () => ({
      open,
      selectedOption,
      options,
    }),
    [open, selectedOption, options]
  )

  const toggleOpen = useCallback(() => {
    setOpen((prev) => !prev)
  }, [])

  const close = useCallback(() => {
    setOpen(false)
  }, [])

  const action = useMemo(
    () => ({
      toggleOpen,
      close,
      setSelectedOption,
    }),
    [toggleOpen, close]
  )

  return (
    <selectValue.Provider value={value}>
      <selectAction.Provider value={action}>{children}</selectAction.Provider>
    </selectValue.Provider>
  )
}

export default SelectProvider
