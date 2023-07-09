import useCombineRefs from '@/hooks/useCombineRefs'
import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import {
  KeyboardEvent,
  PropsWithChildren,
  forwardRef,
  useCallback,
  useMemo,
  useRef,
} from 'react'

import DialogButtonGroups from './DialogButtonGroups'
import DialogButton from './DialogButton'
import { DialogProvider } from './context'
import { getSameKeyValueObject } from '@/shared/utils/object'

const ANSWER_LIST = ['cancel', 'confirm', ''] as const
const ANSWER = getSameKeyValueObject(ANSWER_LIST)

const isDialogAnswer = <T extends DialogAnswer>(
  answer: string
): answer is T => {
  return ANSWER_LIST.includes(answer as T)
}

export type DialogAnswer = (typeof ANSWER_LIST)[number]

interface Props {
  onClose?: (answer: DialogAnswer) => void
}

// TODO: modal 합치기
const Dialog = forwardRef<HTMLDialogElement, PropsWithChildren<Props>>(
  ({ onClose, children }, forwardRef) => {
    const ref = useRef<HTMLDialogElement>(null)
    const dialogRef = useCombineRefs(forwardRef, ref)

    const handleKeydown = (e: KeyboardEvent<HTMLDialogElement>) => {
      const isEsc = e.key === 'Escape'

      if (isEsc) {
        if (ref.current) ref.current.returnValue = ANSWER['']
      }
    }

    const handleClose = () => {
      const answer = ref.current?.returnValue ?? ANSWER['']

      if (isDialogAnswer(answer)) {
        onClose?.(answer)
      }
    }

    const clickAnswer = useCallback(
      (answer: DialogAnswer) => () => {
        if (!ref.current) return

        ref.current.close(answer)
      },
      []
    )

    const values = useMemo(
      () => ({
        clickAnswer,
      }),
      [clickAnswer]
    )

    return (
      <DialogProvider value={values}>
        <StyledDialog
          ref={dialogRef}
          onClose={handleClose}
          onKeyDown={handleKeydown}
        >
          {children}
        </StyledDialog>
      </DialogProvider>
    )
  }
)

Dialog.displayName = 'Dialog'

export default Object.assign(Dialog, {
  ButtonGroups: DialogButtonGroups,
  Button: DialogButton,
})

const fadeIn = keyframes`
    from {
      opacity: 0
    }
    to {
      opacity: 1;
    }
    `

const WIDTH_BY_DEVICE = '400px'

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
