import Head from 'next/head'
import { Hydrate, QueryClientProvider } from '@tanstack/react-query'

import GlobalStyleProvider from '@/styles/GlobalStyleProvider'
import { queryClient } from '@/services/reactQuery/queryClient'
import { AppPropsWithLayout } from '@/types/app'

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
        />
      </Head>

      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <GlobalStyleProvider>
            {getLayout(<Component {...pageProps} />, pageProps)}
          </GlobalStyleProvider>
        </Hydrate>
      </QueryClientProvider>
    </>
  )
}
