import { Confirm } from '@/hooks/useConfirm'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { cloneElement, MouseEvent } from 'react'
import Body, { Desc, Title } from './Body'

interface Props extends Confirm {
  children: React.ReactElement
}

const ConfirmModal = ({ isOpen, onCancel, onConfirm, children }: Props) => {
  const clickFallback = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    onCancel()
  }
  return (
    <Overlay isOpen={isOpen} onClick={clickFallback}>
      {cloneElement(children, { ...children.props, onCancel, onConfirm })}
    </Overlay>
  )
}

export default ConfirmModal

ConfirmModal.Body = Body
ConfirmModal.Title = Title
ConfirmModal.Desc = Desc

const Overlay = styled.div<{ isOpen: boolean }>`
  position: absolute;
  left: 0;
  top: 0;
  background-color: ${({ theme }) => theme.color.grey400};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ isOpen }) =>
    isOpen
      ? css`
          opacity: 1;
          visibility: visible;
        `
      : css`
          opacity: 0;
          visibility: hidden;
        `}
`
