import { ComponentProps, forwardRef } from 'react'
import styled from '@emotion/styled'

import Button from '.'
import Spinner from '../Spinner'
import Flex from '../Flex'

interface SpinnerStyle {
  spinnerColor: ComponentProps<typeof Spinner>['color']
  spinnerSize: ComponentProps<typeof Spinner>['size']
}

interface LoadingButtonProps
  extends ComponentProps<typeof Button>,
    Partial<SpinnerStyle> {
  isLoading: boolean
}
const LoadingButton = forwardRef<HTMLButtonElement, LoadingButtonProps>(
  (
    {
      isLoading,
      spinnerColor,
      spinnerSize = 22,

      children,
      ...buttonAttributes
    },
    forwardRef
  ) => {
    return (
      <Button {...buttonAttributes} disabled={isLoading} ref={forwardRef}>
        <Flex align="center" justify="center" gap="5px">
          {isLoading ? (
            <Spinner color={spinnerColor} size={spinnerSize} />
          ) : (
            <DummyBox spinnerSize={spinnerSize} />
          )}

          {children}

          <DummyBox spinnerSize={spinnerSize} />
        </Flex>
      </Button>
    )
  }
)

export default LoadingButton

LoadingButton.displayName = 'LoadingButton'

const DummyBox = styled(Flex)<Pick<SpinnerStyle, 'spinnerSize'>>`
  width: ${({ spinnerSize }) => spinnerSize}px;
  height: ${({ spinnerSize }) => spinnerSize}px;
`
