import Button from '@/components/Button'
import Modal from '@/components/Modal'

import useModal from '@/components/Modal/useModal'
import Flex from '@/components/Flex'
import { css } from '@emotion/react'

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
        <Flex
          direction="column"
          css={css`
            width: 500px;
            height: 600px;
          `}
        >
          {'안녕하세요'.repeat(250)}
        </Flex>
      </Modal>
    </>
  )
}

export default DefaultModal
