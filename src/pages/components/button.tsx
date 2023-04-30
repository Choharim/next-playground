import { NextPageWithLayout } from '@/shared/types/layout'
import { getLayout } from '@/components/layouts/Layout'

import Frame from '@/features/components/Frame'
import Button from '@/components/Button'
import { css } from '@emotion/css'
import LoadingButton from '@/components/Button/LoadingButton'
import { useEffect, useState } from 'react'

const ButtonPage: NextPageWithLayout = () => {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const id = setInterval(() => {
      setIsLoading((prev) => !prev)
    }, 2000)

    return () => {
      if (id) clearInterval(id)
    }
  }, [])

  const clickButton = () => {
    console.log('clicked!')
  }
  return (
    <Frame title="버튼 종류">
      <Button variety="contain" className={ButtonStyle} onClick={clickButton}>
        contain
      </Button>
      <Button
        variety="contain"
        disabled
        className={ButtonStyle}
        onClick={clickButton}
      >
        disabled contain
      </Button>

      <Button variety="outline" className={ButtonStyle} onClick={clickButton}>
        outline
      </Button>
      <Button
        variety="outline"
        disabled
        className={ButtonStyle}
        onClick={clickButton}
      >
        disabled outline
      </Button>

      <Button variety="text" className={ButtonStyle} onClick={clickButton}>
        text
      </Button>
      <Button
        variety="text"
        disabled
        className={ButtonStyle}
        onClick={clickButton}
      >
        disabled text
      </Button>

      <LoadingButton
        isLoading={isLoading}
        variety="text"
        className={ButtonStyle}
        onClick={clickButton}
      >
        text
      </LoadingButton>
    </Frame>
  )
}

export default ButtonPage

ButtonPage.getLayout = getLayout

const ButtonStyle = css`
  width: 200px;
`
