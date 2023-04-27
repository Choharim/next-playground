import Head from 'next/head'
import { Provider } from 'react-redux'
import { Hydrate, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import GlobalStyleProvider from '@/styles/GlobalStyleProvider'
import { queryClient } from '@/services/reactQuery/queryClient'
import { AppPropsWithLayout } from '@/shared/types/layout'
import { wrapper } from '@/services/redux/store'

import ErrorBoundary from '@/components/ErrorBoundary'

function App({ Component, ...appProps }: AppPropsWithLayout) {
  const { store, props } = wrapper.useWrappedStore(appProps)
  const { pageProps } = props
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

      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <ReactQueryDevtools initialIsOpen={false} />
            <GlobalStyleProvider>
              <ErrorBoundary fallback={<div>서버 에러</div>}>
                {getLayout(<Component {...pageProps} />, pageProps)}
              </ErrorBoundary>
            </GlobalStyleProvider>
          </Hydrate>
        </QueryClientProvider>
      </Provider>
    </>
  )
}

export default App
