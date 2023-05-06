import React from 'react'

import Button from '@/components/Button'
import Typo from '@/components/Typo'
import Dialog from '@/components/Modal/Dialog'

import useModal from '@/components/Modal/useModal'

const DialogModal = () => {
  const { isOpen, showModal, onCancel, onConfirm } = useModal()

  const openDialog = async () => {
    const answer = await showModal()
    if (answer) {
      console.log('확인')
    } else {
      console.log('취소')
    }
  }

  return (
    <>
      <Button variety="outline" onClick={openDialog}>
        다이얼로그 열기
      </Button>

      <Dialog
        isOpen={isOpen}
        onClickFallback={onCancel}
        confirm={{ callback: onConfirm }}
        cancel={{ callback: onCancel }}
      >
        <Typo variety="subtitle_1" color="grey900">
          모달 제목
        </Typo>
        <Typo as="p" variety="body_3" color="grey600">
          모달 설명입니다.
        </Typo>
      </Dialog>
    </>
  )
}

export default DialogModal
