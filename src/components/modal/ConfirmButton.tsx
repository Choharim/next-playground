import React, { ButtonHTMLAttributes, ReactElement } from 'react'

import Button from '@/components/Button'
import { Theme, useTheme } from '@emotion/react'
import { css } from '@emotion/css'

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
      className={css`
        ${buttonType === 'cancel' ? getCancelButtonStyle(theme) : undefined}
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
