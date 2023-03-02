import React from 'react'

import { GetLayout } from '@/types/app'

import Header, { HeaderProps } from './Header'
import Frame from './Frame'

interface LayoutProps extends HeaderProps {
  children: React.ReactNode
  showNav?: boolean
}

const Layout = ({ children, title, description, showNav }: LayoutProps) => {
  return (
    <>
      <Header title={title} description={description} />

      <Frame>
        {showNav && <nav>nav</nav>}
        {children}
      </Frame>
    </>
  )
}

export default Layout

/**
 * @description
 * - 커스텀 하지 않은 Layout 컴포넌트를 적용할 때 import하여 사용할 수 있습니다.
 * - Layout 컴포넌트의 props 값을 직접 할당하여 커스텀을 하는 상황에는 getLayout를 작성해 사용합니다.
 * @example
 * HomePage.getLayout = getLayout
 */
export const getLayout: GetLayout = (page, pageProps) => (
  <Layout title={pageProps.title} description={pageProps?.description}>
    {page}
  </Layout>
)
