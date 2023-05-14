import styled from '@emotion/styled'
import { ComponentPropsWithoutRef, forwardRef } from 'react'

/**
 * @note
 * InputProvider에 value와 setValue를 넘기지 않으면 비제어컴포넌트로 동작합니다.
 */
const BaseInput = forwardRef<
  HTMLInputElement,
  ComponentPropsWithoutRef<'input'>
>(({ ...attributes }, forwardRef) => {
  return <Input {...attributes} ref={forwardRef} />
})

export default BaseInput

BaseInput.displayName = 'BaseInput'

const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  cursor: inherit;

  /* Chrome, Safari, Edge, Opera */

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`
