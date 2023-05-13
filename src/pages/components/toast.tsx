import styled from '@emotion/styled'

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
      <Flex justify="center" gap="20px">
        <ToastCreationButton onClick={clickButton('confirm')} variety="contain">
          확인 토스트 추가
        </ToastCreationButton>

        <ToastCreationButton onClick={clickButton('error')} variety="contain">
          에러 토스트 추가
        </ToastCreationButton>
      </Flex>
    </>
  )
}

export default ToastPage

ToastPage.getLayout = getLayout

const ToastCreationButton = styled(Button)`
  width: 200px;
`
