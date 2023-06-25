import styled from '@emotion/styled'
import { MouseEvent, MouseEventHandler, PropsWithChildren } from 'react'

import Portal from '../Portal'
import Flex from '../Flex'

import { MODAL_PORTAL_ID } from '@/pages/_document'
import { ModalProps } from './useModal'
import { CombineType } from '@/shared/types/extendable'
import { fadeIn } from '@/styles/utils/animation'

type Props = CombineType<
  Pick<ModalProps, 'isOpen'>,
  {
    onClickFallback: MouseEventHandler<HTMLDivElement>
  }
>

const Modal = ({
  children,
  onClickFallback,
  isOpen,
}: PropsWithChildren<Props>) => {
  const handleFallback = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()

    onClickFallback(e)
  }

  const handleBody = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }
  return (
    <Portal id={MODAL_PORTAL_ID}>
      {isOpen && (
        <Overlay align="center" justify="center" onClick={handleFallback}>
          <ContentsWrapper direction="column" onClick={handleBody}>
            {children}
          </ContentsWrapper>
        </Overlay>
      )}
    </Portal>
  )
}

export default Modal

const Overlay = styled(Flex)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.58);
  animation: ${fadeIn} 0.5s;
`

const ContentsWrapper = styled(Flex)`
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.white};
  overflow-y: auto;
`
