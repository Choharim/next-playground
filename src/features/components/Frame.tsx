import styled from '@emotion/styled'
import React from 'react'

type Props = {
  title: string
  children: React.ReactNode
}
const Frame = ({ title, children }: Props) => {
  return (
    <FrameWrapper>
      <Title>{title}</Title>
      <FrameContents>{children}</FrameContents>
    </FrameWrapper>
  )
}

export default Frame

const FrameWrapper = styled.div`
  padding: 24px;

  &:not(:last-of-type) {
    border-bottom: 1px solid ${({ theme }) => theme.color.grey400};
  }
`

const Title = styled.h1`
  ${({ theme }) => theme.font.header_2}
  margin-bottom: 10px;
`

const FrameContents = styled.div`
  display: grid;
  grid-template-rows: auto;
  justify-content: center;
  gap: 20px;
`
