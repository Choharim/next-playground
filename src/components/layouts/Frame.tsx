import styled from '@emotion/styled'
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Frame = ({ children }: Props) => {
  return <Main>{children}</Main>
}

export default Frame

const Main = styled.main`
  width: 100%;
  height: 100%;

  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
