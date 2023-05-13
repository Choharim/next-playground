import styled from '@emotion/styled'

import Button from '@/components/Button'
import Modal from '@/components/Modal'
import Flex from '@/components/Flex'

import useModal from '@/components/Modal/useModal'

const DefaultModal = () => {
  const { isOpen, showModal, onClose } = useModal()

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
        기본 모달 열기
      </Button>
      <Modal isOpen={isOpen} onClickFallback={onClose}>
        <ModalContents direction="column">
          {'안녕하세요'.repeat(250)}
        </ModalContents>
      </Modal>
    </>
  )
}

export default DefaultModal

const ModalContents = styled(Flex)`
  width: 500px;
  height: 600px;
`
