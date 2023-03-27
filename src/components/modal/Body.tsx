import React, {
  Children,
  HTMLAttributes,
  isValidElement,
  ReactElement,
} from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { Confirm } from '@/hooks/useConfirm'

import Button from '@/components/button/Button'
import FooterButton from './FooterButton'

interface Props
  extends Partial<Pick<Confirm, 'onCancel' | 'onConfirm'>>,
    Pick<HTMLAttributes<HTMLDivElement>, 'className'> {
  confirmText?: string
  cancelText?: string
  children: React.ReactNode
}

const getChildren = (
  children: React.ReactNode,
  type: 'button' | 'contents'
) => {
  const childrenArray = Children.toArray(children)

  return childrenArray.filter(
    (child) =>
      isValidElement(child) &&
      (type === 'button' ? isButton(child) : !isButton(child))
  )
}

const isButton = (
  child: ReactElement
): child is ReturnType<typeof FooterButton> => {
  return child.type === (<FooterButton />).type
}

/**
 * @note children 설명
 * - children으로 FooterButton 버튼을 전달하지 않았을 경우,
 * '취소', '확인' FooterButton 버튼이 기본적으로 사용됩니다.
 * - children에 FooterButton 버튼을 포함할 경우,
 * onCancel/onConfirm 이벤트를 연결하지 않아도 됩니다.
 */
const ConfirmModalBody = ({
  className,
  children,
  onCancel,
  onConfirm,
}: Props) => {
  const contents = getChildren(children, 'contents')
  const buttons = getChildren(children, 'button')

  const renderButtons = () => {
    return React.Children.map(buttons, (button) => {
      if (isValidElement(button) && isButton(button)) {
        return React.cloneElement(button, {
          ...button.props,
          onClick:
            button.props?.buttonType === 'confirm' ? onConfirm : onCancel,
        })
      }
    })
  }

  return (
    <Body>
      <Contents className={className}>{contents}</Contents>
      <ButtonContainer isOnlyOneButton={buttons.length === 1}>
        {!!buttons.length ? (
          renderButtons()
        ) : (
          <>
            <FooterButton buttonType="cancel" onClick={onCancel} />
            <FooterButton buttonType="confirm" onClick={onConfirm} />
          </>
        )}
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

export const ConfirmButton = styled(Button)`
  height: 48px;
  width: 100%;
`

const Body = styled.div`
  display: flex;
  flex-direction: column;

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

const ButtonContainer = styled.div<{ isOnlyOneButton: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;

  ${({ isOnlyOneButton }) =>
    isOnlyOneButton
      ? css`
          button {
            &:first-of-type {
              border-top-left-radius: 0;
              border-top-right-radius: 0;
            }
          }
        `
      : css`
          button {
            &:nth-of-type(1) {
              border-top-left-radius: 0;
              border-top-right-radius: 0;
              border-bottom-right-radius: 0;
            }
            &:nth-of-type(2) {
              border-top-left-radius: 0;
              border-top-right-radius: 0;
              border-bottom-left-radius: 0;
            }
          }
        `}
`
