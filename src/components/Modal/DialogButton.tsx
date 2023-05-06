import { ComponentPropsWithoutRef } from 'react'
import { Theme, css, useTheme } from '@emotion/react'

import Button from '@/components/Button'

const DEFAULT_TEXT: { [key in Variety]: string } = {
  cancel: '취소',
  confirm: '확인',
}

type Variety = 'cancel' | 'confirm'

interface Props extends ComponentPropsWithoutRef<'button'> {
  variety?: Variety
}

const DialogButton = ({
  variety = 'confirm',
  children,
  ...buttonAttributes
}: Props) => {
  const theme = useTheme()

  return (
    <Button
      variety="contain"
      css={css`
        ${variety === 'cancel' && getCancelButtonStyle(theme)}
      `}
      {...buttonAttributes}
    >
      {children || DEFAULT_TEXT[variety]}
    </Button>
  )
}

export default DialogButton

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
