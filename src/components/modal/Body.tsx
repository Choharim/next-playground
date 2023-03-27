import { Confirm } from '@/hooks/useConfirm'
import styled from '@emotion/styled'
import React, { HTMLAttributes } from 'react'
import Button from '../button/Button'

interface Props
  extends Partial<Pick<Confirm, 'onCancel' | 'onConfirm'>>,
    Pick<HTMLAttributes<HTMLDivElement>, 'className'> {
  confirmText?: string
  cancelText?: string
  children: React.ReactNode
}
const ConfirmModalBody = ({
  className,
  children,
  cancelText = '취소',
  confirmText = '확인',
  onCancel,
  onConfirm,
}: Props) => {
  return (
    <Body className={className}>
      <Contents>{children}</Contents>
      <ButtonContainer>
        <CancelButton variety="contain" onClick={onCancel}>
          {cancelText}
        </CancelButton>
        <ConfirmButton variety="contain" onClick={onConfirm}>
          {confirmText}
        </ConfirmButton>
      </ButtonContainer>
    </Body>
  )
}

export default ConfirmModalBody

export const Title = styled.span`
  white-space: nowrap;
`

export const Desc = styled.p`
  white-space: nowrap;
`

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.white};
`

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 450px;
  height: 200px;
`

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

const CancelButton = styled(Button)`
  height: 56px;
  border-radius: 0 0 0 4px;
  background-color: ${({ theme }) => theme.color.grey300};
`

const ConfirmButton = styled(Button)`
  height: 56px;
  border-radius: 0 0 4px 0;
`
