import { ComponentPropsWithoutRef } from 'react'
import { Theme } from '@emotion/react'
import styled from '@emotion/styled'

import Button from '@/components/Button'

const DEFAULT_TEXT: { [key in Variety]: string } = {
  cancel: '취소',
  confirm: '확인',
}

type Variety = 'cancel' | 'confirm'

interface Props extends ComponentPropsWithoutRef<'button'> {
  variety: Variety
}

const DialogButton = ({
  variety = 'confirm',
  children,
  ...buttonAttributes
}: Props) => {
  return (
    <AnswerButton variety="contain" answer={variety} {...buttonAttributes}>
      {children || DEFAULT_TEXT[variety]}
    </AnswerButton>
  )
}

export default DialogButton

const AnswerButton = styled(Button)<{ answer: Variety }>`
  ${({ theme, answer }) => answer === 'cancel' && getCancelButtonStyle(theme)}
`

const getCancelButtonStyle = (theme: Theme) => ({
  color: theme.color.white,
  backgroundColor: theme.color.grey400,

  ':is(:hover, :focus)': {
    backgroundColor: theme.color.grey500,
  },
  ':active': {
    backgroundColor: theme.color.grey600,
  },
})
