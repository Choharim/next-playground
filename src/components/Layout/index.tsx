import React from 'react'
import styled from '@emotion/styled'

import { GetLayout } from '@/shared/types/layout'

import Header, { HeaderProps } from './Header'
import Navigation from './Navigation'

interface LayoutProps extends HeaderProps {
  children: React.ReactNode
  showNav?: boolean
}

const Layout = ({
  children,
  title,
  description,
  showNav = true,
}: LayoutProps) => {
  return (
    <>
      <Header title={title} description={description} />

      <Main>
        {showNav && <Navigation />}
        <Body>{children}</Body>
      </Main>
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
  <Layout title={pageProps.title} description={pageProps.description}>
    {page}
  </Layout>
)

const Main = styled.main`
  width: 100%;
  height: 100%;
  min-height: 100vh;

  display: flex;
  margin: 0 auto;
  overflow-x: hidden;
`

const Body = styled.div`
  width: 100%;
  height: 100%;
`
