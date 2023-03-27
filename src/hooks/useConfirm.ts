import { useState } from 'react'

type PromiseType = {
  resolve: (value: boolean) => void
} | null

export type Confirm = {
  onConfirm: () => void
  onCancel: () => void
  isOpen: boolean
}

interface UseConfirmReturn extends Confirm {
  confirm: () => Promise<boolean>
}
const useConfirm = (): UseConfirmReturn => {
  const [promise, setPromise] = useState<PromiseType>(null)

  const confirm = () =>
    new Promise<boolean>((resolve) => {
      setPromise({ resolve })
    })

  const onClose = () => {
    setPromise(null)
  }

  const answer = (isConfirm: boolean) => {
    promise?.resolve(isConfirm)
  }

  const onConfirm = () => {
    answer(true)
    onClose()
  }

  const onCancel = () => {
    answer(false)
    onClose()
  }

  return { confirm, onConfirm, onCancel, isOpen: !!promise }
}

export default useConfirm
