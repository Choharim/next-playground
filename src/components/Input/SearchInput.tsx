import React, {
  ComponentProps,
  KeyboardEvent,
  ReactElement,
  useRef,
} from 'react'

import Input from '.'

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

  const handleKeydown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  return (
    <Input ref={inputRef} onKeyDown={handleKeydown} {...restProps}>
      {children?.({ onSubmit: handleSubmit })}
    </Input>
  )
}

export default SearchInput
