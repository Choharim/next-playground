import { css } from '@emotion/css'

import { getLayout } from '@/components/layouts/Layout'
import { NextPageWithLayout } from '@/shared/types/layout'
import useToast from '@/hooks/useToast'
import { Variety } from '@/components/toast/type'

import ToastContainer from '@/components/toast/ToastContainer'
import Button from '@/components/Button'
import Flex from '@/components/Flex'

const ToastPage: NextPageWithLayout = () => {
  const { addToast, toasts } = useToast()

  const clickButton = (variety: Variety) => () => {
    addToast({ variety })
  }

  return (
    <>
      <Flex justify="center">
        <Button
          onClick={clickButton('confirm')}
          variety="contain"
          className={buttonStyle}
        >
          확인 토스트 추가
        </Button>

        <Button
          onClick={clickButton('error')}
          variety="contain"
          className={buttonStyle}
        >
          에러 토스트 추가
        </Button>
      </Flex>

      <ToastContainer toasts={toasts} />
    </>
  )
}

export default ToastPage

ToastPage.getLayout = getLayout

const buttonStyle = css`
  width: 200px;
  margin: 0 10px;
`
