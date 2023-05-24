import React, {
  ComponentProps,
  KeyboardEvent,
  ReactElement,
  useRef,
} from 'react'

import Input from '.'
import { KEYBOARD_KEY } from '@/shared/constants/keyboard'

interface Props extends Omit<ComponentProps<typeof Input>, 'children'> {
  onEnterSubmit?: (value: string) => void
  children?: ({ onSubmit }: { onSubmit: () => void }) => ReactElement
}

const SearchInput = ({ children, onEnterSubmit, ...restProps }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = () => {
    if (!onEnterSubmit || !inputRef.current) return

    onEnterSubmit(inputRef.current.value)
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === KEYBOARD_KEY.enter) {
      handleSubmit()
    }
  }

  return (
    <Input ref={inputRef} onKeyDown={handleKeyDown} {...restProps}>
      {children?.({ onSubmit: handleSubmit })}
    </Input>
  )
}

export default SearchInput
