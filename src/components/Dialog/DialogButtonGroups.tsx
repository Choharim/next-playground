import styled from '@emotion/styled'
import { PropsWithChildren } from 'react'

function DialogButtonGroups({ children }: PropsWithChildren) {
  return <ButtonContainer>{children}</ButtonContainer>
}

export default DialogButtonGroups

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
`
