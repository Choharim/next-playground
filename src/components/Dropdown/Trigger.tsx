import { ReactElement, useRef } from 'react'

import { useIsOpen, useOnClose, useOnToggle } from './context/consumer'
import useClickOutside from '@/hooks/useClickOutside'
import { TriggerContextProps } from './context/Provider'

interface Props {
  render: (args: Pick<TriggerContextProps, 'isOpen'>) => ReactElement
}

const Trigger = ({ render }: Props) => {
  const ref = useRef<HTMLDivElement>(null)
  const isOpen = useIsOpen()
  const onToggle = useOnToggle()
  const onClose = useOnClose()

  useClickOutside({ target: ref, callabck: onClose })

  return (
    <div ref={ref} onClick={onToggle}>
      {render({ isOpen })}
    </div>
  )
}

export default Trigger
