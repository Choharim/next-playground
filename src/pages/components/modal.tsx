import styled from '@emotion/styled'
import { useRouter } from 'next/router'

import { NextPageWithLayout } from '@/types/app'
import { getLayout } from '@/components/layouts/Layout'
import useConfirm from '@/hooks/useConfirm'
import useBlockLeaving from '@/hooks/useBlockLeaving'

import Frame from '@/features/components/Frame'
import ConfirmModal from '@/components/modal/ConfirmModal'
import Button from '@/components/button/Button'

const ModalPage: NextPageWithLayout = () => {
  const router = useRouter()
  const { isOpen, confirm, onCancel, onConfirm } = useConfirm()
  const { unBlock } = useBlockLeaving(showModal)

  async function showModal() {
    const answer = await confirm()
    if (answer) {
      console.log('확인')
      unBlock()
      goToBack()
    } else {
      console.log('취소')
    }
  }

  const goToBack = () => {
    router.back()
  }

  return (
    <Frame title="Confirm modal">
      <ButtonContainer>
        <CustomButton variety="outline" onClick={showModal}>
          모달 열기
        </CustomButton>
        <CustomButton variety="outline" onClick={goToBack}>
          뒤로
        </CustomButton>
      </ButtonContainer>

      <ConfirmModal isOpen={isOpen} onCancel={onCancel} onConfirm={onConfirm}>
        <ConfirmModal.Body>
          <CustomTitle>모달 제목</CustomTitle>
          <CustomDesc>모달 설명입니다.</CustomDesc>
          {/* 추가적인 버튼 커스텀이 필요하지 않고 '취소', '확인' 버튼 나열만 할 경우 , 버튼을 전달하지 않아도 됩니다. */}
          {/* 
            <ConfirmModal.Button buttonType="cancel">닫기</ConfirmModal.Button>
            <ConfirmModal.Button buttonType="confirm" /> */}
        </ConfirmModal.Body>
      </ConfirmModal>
    </Frame>
  )
}

export default ModalPage

ModalPage.getLayout = getLayout

const CustomTitle = styled(ConfirmModal.BodyTitle)`
  color: ${({ theme }) => theme.color.grey900};
  ${({ theme }) => theme.font.subtitle_1};
`

const CustomDesc = styled(ConfirmModal.BodyDesc)`
  color: ${({ theme }) => theme.color.grey600};
  ${({ theme }) => theme.font.body_3};
  margin-top: 5px;
`

const CustomButton = styled(Button)`
  width: 200px;
  height: 48px;
`

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`
