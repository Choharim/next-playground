import React, { ComponentProps, forwardRef } from 'react'
import Button from '.'
import Spiner from '../Spiner'
import Flex from '../Flex'
import { css } from '@emotion/css'

interface Props
  extends ComponentProps<typeof Button>,
    ComponentProps<typeof Spiner> {
  isLoading: boolean
}
const LoadingButton = forwardRef<HTMLButtonElement, Props>(
  (
    { children, isLoading, spinerColor, spinerSize = 22, ...buttonAttributes },
    ref
  ) => {
    return (
      <Button {...buttonAttributes} disabled={isLoading} ref={ref}>
        <Flex align="center" justify="center" gap="5px">
          {isLoading ? (
            <Spiner spinerColor={spinerColor} spinerSize={spinerSize} />
          ) : (
            <Flex
              className={css`
                width: ${spinerSize}px;
                height: ${spinerSize}px;
              `}
            ></Flex>
          )}

          {children}

          <Flex
            className={css`
              width: ${spinerSize}px;
              height: ${spinerSize}px;
            `}
          ></Flex>
        </Flex>
      </Button>
    )
  }
)

export default LoadingButton

LoadingButton.displayName = 'LoadingButton'
