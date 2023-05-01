import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { cloneElement, MouseEvent } from 'react'

import { Confirm } from '@/hooks/useConfirm'

import Body, { Desc, Title } from './ConfirmBody'
import ConfirmButton from './ConfirmButton'
import Portal from '../Portal'
import { MODAL_PORTAL_ID } from '@/pages/_document'
interface Props extends Confirm {
  children: React.ReactElement
}

const ConfirmModal = ({ isOpen, onCancel, onConfirm, children }: Props) => {
  const clickFallback = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    onCancel()
  }
  return (
    <Portal id={MODAL_PORTAL_ID}>
      {isOpen && (
        <Overlay onClick={clickFallback}>
          {cloneElement(children, { ...children.props, onCancel, onConfirm })}
        </Overlay>
      )}
    </Portal>
  )
}

export default ConfirmModal

/**
 * @note children 설명
 * - children으로 ConfirmButton 버튼을 전달하지 않았을 경우,
 * '취소', '확인' ConfirmButton 버튼이 기본적으로 사용됩니다.
 * - children에 ConfirmButton 버튼을 포함할 경우,
 * onCancel/onConfirm 이벤트를 연결하지 않아도 됩니다.
 */
ConfirmModal.Body = Body
ConfirmModal.BodyTitle = Title
ConfirmModal.BodyDesc = Desc
ConfirmModal.Button = ConfirmButton

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
