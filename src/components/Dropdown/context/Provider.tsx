import {
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

export type OptionContextProps = Pick<
  ComponentProps<typeof Dropdown>,
  'options' | 'selectedValue' | 'setSelectedValue' | 'placeholder'
>

export const TriggerContext = createContext<TriggerContextProps | null>(null)

export const OptionContext = createContext<OptionContextProps | null>(null)

const Provider = ({
  options,
  selectedValue,
  setSelectedValue,
  children,
  placeholder,
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
    () => ({ options, selectedValue, setSelectedValue, placeholder }),
    [options, selectedValue, setSelectedValue, placeholder]
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
