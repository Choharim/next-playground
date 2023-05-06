import { css } from '@emotion/react'

import Button from '@/components/Button'
import Flex from '@/components/Flex'

import { getLayout } from '@/components/layouts/Layout'
import { NextPageWithLayout } from '@/shared/types/layout'
import useToast from '@/components/Toast/hooks/useToast'
import { Variety } from '@/components/Toast/type'

const ToastPage: NextPageWithLayout = () => {
  const { addToast } = useToast()

  const clickButton = (variety: Variety) => () => {
    addToast({ variety })
  }

  return (
    <>
      <Flex justify="center">
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
      </Flex>
    </>
  )
}

export default ToastPage

ToastPage.getLayout = getLayout

const buttonStyle = css`
  width: 200px;
  margin: 0 10px;
`
