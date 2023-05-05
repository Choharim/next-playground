import { css } from '@emotion/react'
import { useEffect, useState } from 'react'

import Frame from '@/features/components/Frame'
import Button from '@/components/Button'
import LoadingButton from '@/components/Button/LoadingButton'

import { NextPageWithLayout } from '@/shared/types/layout'
import { getLayout } from '@/components/layouts/Layout'

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
      <Button variety="contain" css={ButtonStyle} onClick={clickButton}>
        contain
      </Button>
      <Button
        variety="contain"
        disabled
        css={ButtonStyle}
        onClick={clickButton}
      >
        disabled contain
      </Button>

      <Button variety="outline" css={ButtonStyle} onClick={clickButton}>
        outline
      </Button>
      <Button
        variety="outline"
        disabled
        css={ButtonStyle}
        onClick={clickButton}
      >
        disabled outline
      </Button>

      <Button variety="text" css={ButtonStyle} onClick={clickButton}>
        text
      </Button>
      <Button variety="text" disabled css={ButtonStyle} onClick={clickButton}>
        disabled text
      </Button>

      <LoadingButton
        isLoading={isLoading}
        variety="text"
        css={ButtonStyle}
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
