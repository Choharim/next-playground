import {
  PropsWithChildren,
  RefObject,
  createContext,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react'

export interface TriggerValueContextProps {
  isOpen: boolean

  inputRef: RefObject<HTMLInputElement>
}

export interface TriggerActionContextProps {
  onClose: () => void
  onToggle: () => void
  onOpen: () => void
}

export const TriggerValueContext =
  createContext<TriggerValueContextProps | null>(null)
export const TriggerActionContext =
  createContext<TriggerActionContextProps | null>(null)

const TriggerProvider = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const onClose = useCallback(() => {
    setIsOpen(false)
  }, [])

  const onOpen = useCallback(() => {
    setIsOpen(true)
  }, [])

  const onToggle = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  const values: TriggerValueContextProps = useMemo(
    () => ({
      isOpen,

      inputRef,
    }),
    [isOpen, inputRef]
  )

  const actions: TriggerActionContextProps = useMemo(
    () => ({
      onClose,
      onOpen,
      onToggle,
    }),
    [onClose, onToggle, onOpen]
  )

  return (
    <TriggerActionContext.Provider value={actions}>
      <TriggerValueContext.Provider value={values}>
        {children}
      </TriggerValueContext.Provider>
    </TriggerActionContext.Provider>
  )
}

export default TriggerProvider
