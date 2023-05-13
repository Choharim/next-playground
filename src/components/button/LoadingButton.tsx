import { ComponentProps, forwardRef } from 'react'
import styled from '@emotion/styled'

import Button from '.'
import Spiner from '../Spiner'
import Flex from '../Flex'

interface LoadingButtonProps
  extends ComponentProps<typeof Button>,
    ComponentProps<typeof Spiner> {
  isLoading: boolean
}
const LoadingButton = forwardRef<HTMLButtonElement, LoadingButtonProps>(
  (
    { isLoading, spinerColor, spinerSize = 22, children, ...buttonAttributes },
    forwardRef
  ) => {
    return (
      <Button {...buttonAttributes} disabled={isLoading} ref={forwardRef}>
        <Flex align="center" justify="center" gap="5px">
          {isLoading ? (
            <Spiner spinerColor={spinerColor} spinerSize={spinerSize} />
          ) : (
            <DummyBox spinerSize={spinerSize} />
          )}

          {children}

          <DummyBox spinerSize={spinerSize} />
        </Flex>
      </Button>
    )
  }
)

export default LoadingButton

LoadingButton.displayName = 'LoadingButton'

const DummyBox = styled(Flex)<
  Pick<ComponentProps<typeof Spiner>, 'spinerColor' | 'spinerSize'>
>`
  width: ${({ spinerSize }) => spinerSize}px;
  height: ${({ spinerSize }) => spinerSize}px;
`
