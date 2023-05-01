import styled from '@emotion/styled'

import { DESC, TOAST_TOP_POSITION } from './constant'
import { Toast } from './type'

import ToastBox from './ToastBox'
import Portal from '../Portal'
import { TOAST_PORTAL_ID } from '@/pages/_document'

type Props = {
  toasts: Toast[]
}

const ToastContainer = ({ toasts }: Props) => {
  return (
    <Portal id={TOAST_PORTAL_ID}>
      <Container>
        {toasts.map(({ id, variety, desc }) => (
          <ToastBox key={id} variety={variety}>
            {DESC[variety] || desc}
          </ToastBox>
        ))}
      </Container>
    </Portal>
  )
}

export default ToastContainer

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 10px;

  position: fixed;
  top: ${TOAST_TOP_POSITION}px;
  left: 50%;
  transform: translateX(-50%);
`
