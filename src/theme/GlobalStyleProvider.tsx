import React, { ReactNode } from 'react'
import localFont from '@next/font/local'
import { Global, ThemeProvider } from '@emotion/react'

import { globalStyle } from './globalStyle'
import { THEME } from '.'

const pretandardFont = localFont({
  src: './fonts/PretendardVariable.woff2',
})

type Props = {
  children: ReactNode
}

const GlobalStyleProvider = ({ children }: Props) => {
  return (
    <>
      <style jsx global>{`
        body {
          font-family: ${pretandardFont.style.fontFamily};
        }
      `}</style>
      <Global styles={globalStyle} />
      <ThemeProvider theme={THEME}>{children}</ThemeProvider>
    </>
  )
}

export default GlobalStyleProvider
