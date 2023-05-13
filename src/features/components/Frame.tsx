import React from 'react'
import styled from '@emotion/styled'

import Flex from '@/components/Flex'
import Typo from '@/components/Typo'

type Props = {
  title: string
  children: React.ReactNode
}
const Frame = ({ title, children }: Props) => {
  return (
    <FrameWrapper direction="column">
      <Typo variety="header_3">{title}</Typo>
      <FrameContents direction="column" gap="20px">
        {children}
      </FrameContents>
    </FrameWrapper>
  )
}

export default Frame

const FrameWrapper = styled(Flex)`
  padding: 24px;

  &:not(:last-of-type) {
    border-bottom: 1px solid ${({ theme }) => theme.color.grey300};
  }
`

const FrameContents = styled(Flex)`
  width: 500px;
  align-self: center;
  margin-top: 20px;
`
