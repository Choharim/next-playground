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
      <Button variety="contain" onClick={clickButton}>
        contain
      </Button>
      <Button variety="contain" disabled onClick={clickButton}>
        disabled contain
      </Button>

      <Button variety="outline" onClick={clickButton}>
        outline
      </Button>
      <Button variety="outline" disabled onClick={clickButton}>
        disabled outline
      </Button>

      <Button variety="text" onClick={clickButton}>
        text
      </Button>
      <Button variety="text" disabled onClick={clickButton}>
        disabled text
      </Button>

      <LoadingButton isLoading={isLoading} variety="text" onClick={clickButton}>
        text
      </LoadingButton>
    </Frame>
  )
}

export default ButtonPage

ButtonPage.getLayout = getLayout
