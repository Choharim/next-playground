import { ComponentPropsWithoutRef, forwardRef } from 'react'

import useResetStyle from './hooks/useResetStyle'

/**
 * @note
 * InputProvider에 value와 setValue를 넘기지 않으면 비제어컴포넌트로 동작합니다.
 */
const BaseInput = forwardRef<
  HTMLInputElement,
  ComponentPropsWithoutRef<'input'>
>(({ className, ...attributes }, ref) => {
  const style = useResetStyle(className)

  return <input {...attributes} className={style} ref={ref} />
})

export default BaseInput

BaseInput.displayName = 'BaseInput'
