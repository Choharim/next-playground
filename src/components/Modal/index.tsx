import { css, keyframes, useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import { MouseEvent, MouseEventHandler, PropsWithChildren } from 'react'

import Portal from '../Portal'
import Flex from '../Flex'

import { MODAL_PORTAL_ID } from '@/pages/_document'
import { ModalProps } from './useModal'
import { CombineType } from '@/shared/types/extendable'

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
  const theme = useTheme()

  const handleFallback = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()

    onClickFallback(e)
  }

  return (
    <Portal id={MODAL_PORTAL_ID}>
      {isOpen && (
        <Overlay onClick={handleFallback}>
          <Flex
            direction="column"
            css={css`
              border-radius: 4px;
              background-color: ${theme.color.white};
              overflow-y: auto;
            `}
          >
            {children}
          </Flex>
        </Overlay>
      )}
    </Portal>
  )
}

export default Modal

const fadeIn = keyframes`
  from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.58);
  animation: ${fadeIn} 0.5s;
`
