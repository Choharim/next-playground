import { css, cx } from '@emotion/css'

import { ClassName } from '@/shared/types/element'

const useResetStyle = (className: ClassName) => {
  return cx(
    css`
      width: 100%;
      font-family: inherit;
      background-color: inherit;
      outline: none;
      border: none;

      &:disabled {
        cursor: not-allowed;
      }
    `,
    className
  )
}

export default useResetStyle
