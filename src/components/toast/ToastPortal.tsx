import { useSelector } from 'react-redux'
import { css } from '@emotion/react'

import Portal from '../Portal'
import Flex from '../Flex'

import { selectToasts } from '@/services/redux/notification/selector'
import ToastBox from './ToastBox'
import { DESC, TOAST_PORTAL_ID, TOAST_TOP_POSITION } from './constant'

const ToastPortal = () => {
  const toasts = useSelector(selectToasts)

  return (
    <Portal id={TOAST_PORTAL_ID}>
      <Flex direction="column-reverse" gap="10px" css={ContainerPosition}>
        {toasts.map(({ id, variety, desc }) => (
          <ToastBox key={id} variety={variety}>
            {DESC[variety] || desc}
          </ToastBox>
        ))}
      </Flex>
    </Portal>
  )
}

export default ToastPortal

const ContainerPosition = css`
  position: fixed;
  top: ${TOAST_TOP_POSITION}px;
  left: 50%;
  transform: translateX(-50%);
`
