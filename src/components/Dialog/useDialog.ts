import { useCallback, useRef } from 'react'
import { DialogAnswer } from '.'

const useDialog = () => {
  const dialogRef = useRef<HTMLDialogElement>(null)

  const openDialog = useCallback(() => {
    if (!dialogRef.current) return

    dialogRef.current.showModal()
  }, [])

  const closeDialog = useCallback((answer?: DialogAnswer) => {
    if (!dialogRef.current) return

    dialogRef.current.close(answer ?? '')
  }, [])

  return {
    openDialog,
    closeDialog,
    dialogRef,
  }
}

export default useDialog
