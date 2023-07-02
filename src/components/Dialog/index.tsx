import useCombineRefs from '@/hooks/useCombineRefs'
import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { KeyboardEvent, PropsWithChildren, forwardRef, useRef } from 'react'
import Button from '../Button'
import { getSameKeyValueObject } from '@/shared/utils/object'

const ANSWER_LIST = ['cancel', 'confirm', ''] as const
const ANSWER = getSameKeyValueObject(ANSWER_LIST)

export type DialogAnswer = (typeof ANSWER_LIST)[number]

export interface DialogProps {
  onClose?: (status: DialogAnswer) => void

  cancelText?: string
  confirmText?: string
  isDarkPattern?: boolean
  hasOnlyOneButton?: boolean
}

const isDialogAnswer = (answer: string): answer is DialogAnswer => {
  return ANSWER_LIST.includes(answer as DialogAnswer)
}

const Dialog = forwardRef<HTMLDialogElement, PropsWithChildren<DialogProps>>(
  (
    {
      onClose,

      isDarkPattern = false,
      hasOnlyOneButton = false,
      cancelText = '취소',
      confirmText = '확인',
      children,
    },
    forwardRef
  ) => {
    const ref = useRef<HTMLDialogElement>(null)
    const combinedRef = useCombineRefs(forwardRef, ref)

    const keydown = (e: KeyboardEvent<HTMLDialogElement>) => {
      const isEsc = e.key === 'Escape'

      if (isEsc) {
        if (ref.current) ref.current.returnValue = ''
      }
    }

    const close = () => {
      const answer = ref.current?.returnValue || ''

      if (isDialogAnswer(answer)) {
        onClose?.(answer)
      }
    }

    const clickAnswer = (answer: DialogAnswer) => () => {
      if (!ref.current) return

      ref.current.close(answer)
    }

    return (
      <StyledDialog ref={combinedRef} onClose={close} onKeyDown={keydown}>
        <Contents>{children}</Contents>

        <ButtonContainer isDarkPattern={isDarkPattern}>
          {!hasOnlyOneButton && (
            <Button variety="outline" onClick={clickAnswer(ANSWER.cancel)}>
              {cancelText}
            </Button>
          )}
          <Button onClick={clickAnswer(ANSWER.confirm)}>{confirmText}</Button>
        </ButtonContainer>
      </StyledDialog>
    )
  }
)

export default Dialog

Dialog.displayName = 'Dialog'

const WIDTH_BY_DEVICE = '400px'

const fadeIn = keyframes`
    from {
      opacity: 0
    }
    to {
      opacity: 1;
    }
`

const StyledDialog = styled.dialog`
  outline: none;
  border: none;

  // 중앙에 위치합니다.
  inset: 0;
  margin: auto;

  width: 100%;
  max-width: ${WIDTH_BY_DEVICE};
  padding: 20px;
  border-radius: 10px;
  display: grid;
  gap: 30px;

  &:not([open]) {
    display: none;
  }

  animation: ${fadeIn} 0.5s forwards;

  &::backdrop {
    background-color: rgba(0, 0, 0, 0.2);
  }
`

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ButtonContainer = styled.div<Pick<DialogProps, 'isDarkPattern'>>`
  display: flex;
  gap: 9px;

  ${({ isDarkPattern }) =>
    isDarkPattern &&
    css`
      flex-direction: row-reverse;
    `}
`
