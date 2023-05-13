import { ComponentProps } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

import Modal from '.'
import Flex from '../Flex'
import DialogButton from './DialogButton'

import { ModalProps } from './useModal'
import { CombineType } from '@/shared/types/extendable'
import { RequiredAtLeastOne } from '@/shared/types/narrow'

type Props = CombineType<
  ComponentProps<typeof Modal>,
  RequiredAtLeastOne<{
    cancel: {
      callback: ModalProps['onCancel']
      text?: string
    }
    confirm: {
      callback: ModalProps['onConfirm']
      text?: string
    }
  }>
>

const Dialog = ({
  onClickFallback,
  isOpen,
  cancel,
  confirm,
  children,
}: Props) => {
  const hasCancelButton = typeof cancel?.callback === 'function'
  const hasConfirmButton = typeof confirm?.callback === 'function'
  const isOnlyOneButton =
    (!!hasCancelButton && !hasConfirmButton) ||
    (!hasCancelButton && !!hasConfirmButton)

  return (
    <Modal isOpen={isOpen} onClickFallback={onClickFallback}>
      <ContentsWrapper direction="column" align="center" justify="center">
        {children}
      </ContentsWrapper>

      <ButtonContainer align="center" isOnlyOneButton={isOnlyOneButton}>
        {hasCancelButton && (
          <DialogButton variety="cancel" onClick={cancel?.callback}>
            {cancel?.text}
          </DialogButton>
        )}
        {hasConfirmButton && (
          <DialogButton variety="confirm" onClick={confirm?.callback}>
            {confirm?.text}
          </DialogButton>
        )}
      </ButtonContainer>
    </Modal>
  )
}

export default Dialog

const ContentsWrapper = styled(Flex)`
  width: 450px;
  height: 200px;
`

const ButtonContainer = styled(Flex)<{ isOnlyOneButton: boolean }>`
  width: 100%;

  ${({ isOnlyOneButton }) =>
    isOnlyOneButton
      ? css`
          button {
            &:first-of-type {
              border-top-left-radius: 0;
              border-top-right-radius: 0;
            }
          }
        `
      : css`
          button {
            &:nth-of-type(1) {
              border-top-left-radius: 0;
              border-top-right-radius: 0;
              border-bottom-right-radius: 0;
            }
            &:nth-of-type(2) {
              border-top-left-radius: 0;
              border-top-right-radius: 0;
              border-bottom-left-radius: 0;
            }
          }
        `}
`
