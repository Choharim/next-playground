import React from 'react'
import reactDom from 'react-dom'

import { MODAL_CONTAINER_ID } from '@/pages/_document'

type Props = {
  children: React.ReactNode
}
const ModalPortal = ({ children }: Props) => {
  const containerElement =
    typeof window !== 'undefined' && document.getElementById(MODAL_CONTAINER_ID)

  if (!containerElement) return <>{children}</>

  return <>{reactDom.createPortal(children, containerElement)}</>
}

export default ModalPortal
