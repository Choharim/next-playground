import { ReactElement, useRef } from 'react'

import {
  useIsOpen,
  useLabel,
  useOnClose,
  useOnToggle,
} from './context/consumer'
import useClickOutside from '@/hooks/useClickOutside'
import { TriggerContextProps } from './context/Provider'

interface Args extends Pick<TriggerContextProps, 'isOpen'> {
  label: string
}
interface Props {
  render: (args: Args) => ReactElement
}

const Trigger = ({ render }: Props) => {
  const ref = useRef<HTMLDivElement>(null)
  const isOpen = useIsOpen()
  const onToggle = useOnToggle()
  const onClose = useOnClose()
  const label = useLabel()

  useClickOutside({ target: ref, callabck: onClose })

  return (
    <div ref={ref} onClick={onToggle}>
      {render({ isOpen, label })}
    </div>
  )
}

export default Trigger
