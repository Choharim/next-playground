import { useSelector } from 'react-redux'
import styled from '@emotion/styled'

import Portal from '../Portal'
import ToastBox from './ToastBox'
import Flex from '../Flex'

import { selectToasts } from '@/services/redux/notification/selector'
import { DESC, TOAST_PORTAL_ID, TOAST_TOP_POSITION } from './constant'

const ToastPortal = () => {
  const toasts = useSelector(selectToasts)

  return (
    <Portal id={TOAST_PORTAL_ID}>
      <ToastContainer direction="column-reverse" gap="10px">
        {toasts.map(({ id, variety, desc }) => (
          <ToastBox key={id} variety={variety}>
            {DESC[variety] || desc}
          </ToastBox>
        ))}
      </ToastContainer>
    </Portal>
  )
}

export default ToastPortal

const ToastContainer = styled(Flex)`
  position: fixed;
  top: ${TOAST_TOP_POSITION}px;
  left: 50%;
  transform: translateX(-50%);
`
