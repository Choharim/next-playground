import { useState } from 'react'

type PromiseType = {
  resolve: (value: boolean) => void
} | null

export interface ModalProps {
  isOpen: boolean
  showModal: () => Promise<boolean>
  onConfirm: () => void
  onCancel: () => void
  onClose: () => void
}

const useModal = (): ModalProps => {
  const [promise, setPromise] = useState<PromiseType>(null)

  const showModal = () =>
    new Promise<boolean>((resolve) => {
      setPromise({ resolve })
    })

  const answer = (isConfirm: boolean) => {
    promise?.resolve(isConfirm)
  }

  const onClose = () => {
    setPromise(null)
  }

  const onConfirm = () => {
    answer(true)
    onClose()
  }

  const onCancel = () => {
    answer(false)
    onClose()
  }

  return { showModal, onConfirm, onCancel, onClose, isOpen: !!promise }
}

export default useModal
