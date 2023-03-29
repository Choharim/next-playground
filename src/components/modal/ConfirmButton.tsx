import React, { ButtonHTMLAttributes, ReactElement } from 'react'
import styled from '@emotion/styled'

import { THEME } from '@/styles/theme'

import Button from '@/components/button/Button'

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
  return (
    <CustomButton variety="contain" buttonType={buttonType} onClick={onClick}>
      {children || DEFAULT_TEXT[buttonType]}
    </CustomButton>
  )
}

export default ConfirmButton

const CANCEL_STYLE = {
  color: THEME.color.white,
  backgroundColor: THEME.color.grey400,

  ':is(:hover, :focus)': {
    backgroundColor: THEME.color.grey500,
  },
  ':active': {
    backgroundColor: THEME.color.grey600,
  },
}

const CustomButton = styled(Button)<Pick<Props, 'buttonType'>>`
  height: 48px;

  ${({ buttonType }) => buttonType === 'cancel' && CANCEL_STYLE}
`
