import React from 'react'

import Typo from '../Typo'
import Flex from '../Flex'

import useToastTheme from './hooks/useToastTheme'
import { Variety } from './type'

type Props = {
  children: React.ReactNode
  variety: Variety
}
const ToastBox = ({ children, variety }: Props) => {
  const theme = useToastTheme({ variety })

  return (
    <Flex justify="center" css={theme}>
      <Typo color="inherit">{children}</Typo>
    </Flex>
  )
}

export default ToastBox
