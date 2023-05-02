import React, {
  ComponentProps,
  PropsWithChildren,
  createContext,
  useCallback,
  useMemo,
  useState,
} from 'react'
import Dropdown from '..'

export interface TriggerContextProps {
  isOpen: boolean
  onClose: () => void
  onToggle: () => void
}

export const TriggerContext = createContext<TriggerContextProps | undefined>(
  undefined
)

export const OptionContext = createContext<OptionContextProps | undefined>(
  undefined
)

export type OptionContextProps = Pick<
  ComponentProps<typeof Dropdown>,
  'options' | 'selectedValue' | 'setSelectedValue'
>

const Provider = ({
  options,
  selectedValue,
  setSelectedValue,
  children,
}: PropsWithChildren<OptionContextProps>) => {
  const [isOpen, setIsOpen] = useState(false)

  const onClose = useCallback(() => {
    setIsOpen(false)
  }, [])

  const onToggle = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  const triggerContextValue: TriggerContextProps = useMemo(
    () => ({
      isOpen,
      onClose,
      onToggle,
    }),
    [isOpen, onClose, onToggle]
  )

  const optionContextValue: OptionContextProps = useMemo(
    () => ({ options, selectedValue, setSelectedValue }),
    [options, selectedValue, setSelectedValue]
  )

  return (
    <OptionContext.Provider value={optionContextValue}>
      <TriggerContext.Provider value={triggerContextValue}>
        {children}
      </TriggerContext.Provider>
    </OptionContext.Provider>
  )
}

export default Provider
