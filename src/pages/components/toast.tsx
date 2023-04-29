import { getLayout } from '@/components/layouts/Layout'
import { NextPageWithLayout } from '@/shared/types/layout'
import useToast from '@/hooks/useToast'

import ToastContainer from '@/components/toast/ToastContainer'
import Button from '@/components/Button/Button'
import { Variety } from '@/components/toast/type'
import { css } from '@emotion/react'

const ToastPage: NextPageWithLayout = () => {
  const { addToast, toasts } = useToast()

  const clickButton = (variety: Variety) => () => {
    addToast({ variety })
  }

  return (
    <>
      <Button
        onClick={clickButton('confirm')}
        variety="contain"
        css={buttonStyle}
      >
        확인 토스트 추가
      </Button>

      <Button
        onClick={clickButton('error')}
        variety="contain"
        css={buttonStyle}
      >
        에러 토스트 추가
      </Button>

      <ToastContainer toasts={toasts} />
    </>
  )
}

export default ToastPage

ToastPage.getLayout = getLayout

const buttonStyle = css`
  height: 48px;
  width: 100px;
`
