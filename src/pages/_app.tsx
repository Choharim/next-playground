import { Provider } from 'react-redux'
import { Hydrate, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import GlobalStyleProvider from '@/theme/GlobalStyleProvider'
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
      <GlobalStyleProvider>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
              <ReactQueryDevtools initialIsOpen={false} />
              <ErrorBoundary fallback={<div>서버 에러</div>}>
                {getLayout(<Component {...pageProps} />, pageProps)}
              </ErrorBoundary>
            </Hydrate>
          </QueryClientProvider>
        </Provider>
      </GlobalStyleProvider>
    </>
  )
}

export default App
