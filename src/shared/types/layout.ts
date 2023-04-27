import { NextPage } from 'next'
import { AppInitialProps, AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'

export type GetLayout<T = AppInitialProps['pageProps']> = (
  page: ReactElement,
  pageProps: T
) => ReactNode

export type NextPageWithLayout<
  P = AppInitialProps['pageProps'],
  IP = P
> = NextPage<P, IP> & {
  getLayout?: GetLayout<P>
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
