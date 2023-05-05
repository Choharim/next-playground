import { ComponentPropsWithoutRef, forwardRef } from 'react'

import useResetStyle from './hooks/useResetStyle'

/**
 * @note
 * InputProvider에 value와 setValue를 넘기지 않으면 비제어컴포넌트로 동작합니다.
 */
const BaseInput = forwardRef<
  HTMLInputElement,
  ComponentPropsWithoutRef<'input'>
>(({ ...attributes }, forwardRef) => {
  const style = useResetStyle()

  return <input {...attributes} css={style} ref={forwardRef} />
})

export default BaseInput

BaseInput.displayName = 'BaseInput'
