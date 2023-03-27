import styled from '@emotion/styled'

import useConfirm from '@/hooks/useConfirm'

import Frame from '@/features/components/Frame'
import ConfirmModal from '@/components/modal/ConfirmModal'
import ModalPortal from '@/components/modal/Portal'
import Button from '@/components/button/Button'

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
    <Frame title="Confirm modal">
      <Button variety="outline" onClick={showModal}>
        모달 열기
      </Button>

      <ModalPortal>
        <ConfirmModal isOpen={isOpen} onCancel={onCancel} onConfirm={onConfirm}>
          <ConfirmModal.Body>
            <CustomTitle>데모 모달</CustomTitle>
            <CustomDesc>모달 설명입니다.</CustomDesc>
            {/* 추가적인 버튼 커스텀이 필요하지 않고 '취소', '확인' 버튼 나열만 할 경우 , 버튼을 전달하지 않아도 됩니다. */}
            {/* 
            <ConfirmModal.Button buttonType="cancel">닫기</ConfirmModal.Button>
            <ConfirmModal.Button buttonType="confirm" /> */}
          </ConfirmModal.Body>
        </ConfirmModal>
      </ModalPortal>
    </Frame>
  )
}

export default Modal

const CustomTitle = styled(ConfirmModal.BodyTitle)`
  color: ${({ theme }) => theme.color.grey900};
  ${({ theme }) => theme.font.subtitle_1};
`

const CustomDesc = styled(ConfirmModal.BodyDesc)`
  color: ${({ theme }) => theme.color.grey600};
  ${({ theme }) => theme.font.body_3};
  margin-top: 5px;
`
