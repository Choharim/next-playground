import React from 'react'
import { createPortal } from 'react-dom'

import { MODAL_PORTAL_ID } from '@/pages/_document'

type Props = {
  children: React.ReactNode
}
const ModalPortal = ({ children }: Props) => {
  const parent =
    typeof window !== 'undefined' && document.getElementById(MODAL_PORTAL_ID)

  if (!parent) return <>{children}</>

  return <>{createPortal(children, parent)}</>
}

export default ModalPortal
