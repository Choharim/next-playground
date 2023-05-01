import Text from '@/components/Text'
import styled from '@emotion/styled'
import React from 'react'

type Props = {
  title: string
  children: React.ReactNode
}
const Frame = ({ title, children }: Props) => {
  return (
    <FrameWrapper>
      <Text variety="header_3">{title}</Text>
      <FrameContents>{children}</FrameContents>
    </FrameWrapper>
  )
}

export default Frame

const FrameWrapper = styled.div`
  padding: 24px;

  &:not(:last-of-type) {
    border-bottom: 1px solid ${({ theme }) => theme.color.grey300};
  }
`

const FrameContents = styled.div`
  display: grid;
  grid-template-rows: auto;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;
`
