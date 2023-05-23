import {
  ComponentProps,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useMemo,
  useState,
} from 'react'

import Dropdown from '..'

import { CombineType } from '@/shared/types/extendable'

export interface OptionContextValueProps
  extends Pick<
    ComponentProps<typeof Dropdown>,
    'options' | 'selectedValue' | 'placeholder'
  > {
  focusIndex: number
}

export interface OptionContextActionProps
  extends Pick<ComponentProps<typeof Dropdown>, 'setSelectedValue'> {
  setFocusIndex: Dispatch<SetStateAction<number>>
}

export const OptionValueContext = createContext<OptionContextValueProps | null>(
  null
)
export const OptionActionContext =
  createContext<OptionContextActionProps | null>(null)

type Props = CombineType<
  Omit<OptionContextActionProps, 'setFocusIndex'>,
  Omit<OptionContextValueProps, 'focusIndex'>
>
const OptionProvider = ({
  children,

  options,
  placeholder,
  selectedValue,
  setSelectedValue,
}: PropsWithChildren<Props>) => {
  const [focusIndex, setFocusIndex] = useState<number>(-1)

  const values: OptionContextValueProps = useMemo(
    () => ({
      selectedValue,
      focusIndex,
      options,
      placeholder,
    }),
    [selectedValue, focusIndex, options, placeholder]
  )

  const actions: OptionContextActionProps = useMemo(
    () => ({
      setSelectedValue,
      setFocusIndex,
    }),
    [setSelectedValue, setFocusIndex]
  )

  return (
    <OptionActionContext.Provider value={actions}>
      <OptionValueContext.Provider value={values}>
        {children}
      </OptionValueContext.Provider>
    </OptionActionContext.Provider>
  )
}

export default OptionProvider
