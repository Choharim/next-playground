import { useEffect } from 'react'

import { KEYBOARD_KEY } from '@/shared/constants/keyboard'
import {
  useOptionActionContext,
  useOptionValueContext,
} from './context/optionConsumer'
import { useTriggerValueContext } from './context/triggerConsumer'

const useKeyboardNavigation = () => {
  const { isOpen } = useTriggerValueContext()
  const { options, focusIndex, selectedValue } = useOptionValueContext()
  const { setFocusIndex } = useOptionActionContext()

  useEffect(() => {
    const index = options.findIndex((option) => option.value === selectedValue)
    setFocusIndex(index)
  }, [selectedValue, options, setFocusIndex])

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key

      if (key === KEYBOARD_KEY.arrowDown) {
        if (focusIndex === options.length - 1) {
          setFocusIndex(0)
        } else {
          setFocusIndex((prev) => prev + 1)
        }
      } else if (key === KEYBOARD_KEY.arrowUp) {
        if (focusIndex === 0) {
          setFocusIndex(options.length - 1)
        } else {
          setFocusIndex((prev) => prev - 1)
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, options.length, focusIndex, setFocusIndex])
}

export default useKeyboardNavigation
