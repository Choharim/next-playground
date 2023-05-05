import { ComponentProps, forwardRef } from 'react'
import { css } from '@emotion/css'

import Button from '.'
import Spiner from '../Spiner'
import Flex from '../Flex'

interface Props
  extends ComponentProps<typeof Button>,
    ComponentProps<typeof Spiner> {
  isLoading: boolean
}
const LoadingButton = forwardRef<HTMLButtonElement, Props>(
  (
    { isLoading, spinerColor, spinerSize = 22, children, ...buttonAttributes },
    ref
  ) => {
    return (
      <Button {...buttonAttributes} disabled={isLoading} ref={ref}>
        <Flex align="center" justify="center" gap="5px">
          {isLoading ? (
            <Spiner spinerColor={spinerColor} spinerSize={spinerSize} />
          ) : (
            <Flex className={DummySpaceStyle({ spinerSize })} />
          )}

          {children}

          <Flex className={DummySpaceStyle({ spinerSize })} />
        </Flex>
      </Button>
    )
  }
)

export default LoadingButton

LoadingButton.displayName = 'LoadingButton'

const DummySpaceStyle = ({ spinerSize }: ComponentProps<typeof Spiner>) => css`
  width: ${spinerSize}px;
  height: ${spinerSize}px;
`
