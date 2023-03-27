import React from 'react'

import ConfirmModal from '@/components/modal/ConfirmModal'
import ModalPortal from '@/components/modal/Portal'
import useConfirm from '@/hooks/useConfirm'
import styled from '@emotion/styled'

const Modal = () => {
  const { isOpen, confirm, onCancel, onConfirm } = useConfirm()

  const showModal = async () => {
    const answer = await confirm()
    if (answer) {
      console.log('확인')
    } else {
      console.log('취소')
    }
  }
  return (
    <div>
      <button onClick={showModal}>모달 열기</button>
      <ModalPortal>
        <ConfirmModal isOpen={isOpen} onCancel={onCancel} onConfirm={onConfirm}>
          <ConfirmModal.Body>
            <CustomTitle>데모 모달</CustomTitle>
            <CustomDesc>모달 설명입니다.</CustomDesc>
          </ConfirmModal.Body>
        </ConfirmModal>
      </ModalPortal>
    </div>
  )
}

export default Modal

const CustomTitle = styled(ConfirmModal.Title)`
  color: ${({ theme }) => theme.color.grey900};
  ${({ theme }) => theme.font.subtitle_1};
`

const CustomDesc = styled(ConfirmModal.Desc)`
  color: ${({ theme }) => theme.color.grey600};
  ${({ theme }) => theme.font.body_3};
  margin-top: 5px;
`
