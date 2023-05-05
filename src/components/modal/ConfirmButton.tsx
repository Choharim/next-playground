import React, { ButtonHTMLAttributes, ReactElement } from 'react'
import { Theme, css, useTheme } from '@emotion/react'

import Button from '@/components/Button'

const DEFAULT_TEXT: { [key in ButtonType]: string } = {
  cancel: '취소',
  confirm: '확인',
}

type ButtonType = 'cancel' | 'confirm'

interface Props
  extends Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  children?: React.ReactNode
  buttonType?: ButtonType
}

const ConfirmButton = ({
  children,
  onClick,
  buttonType = 'confirm',
}: Props): ReactElement<Props> => {
  const theme = useTheme()

  return (
    <Button
      variety="contain"
      css={css`
        ${buttonType === 'cancel' && getCancelButtonStyle(theme)}
      `}
      onClick={onClick}
    >
      {children || DEFAULT_TEXT[buttonType]}
    </Button>
  )
}

export default ConfirmButton

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
