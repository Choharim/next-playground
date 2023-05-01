import { css, cx } from '@emotion/css'

import { ClassName } from '@/shared/types/element'

const useResetStyle = (className: ClassName) => {
  return cx(
    css`
      width: 100%;
      outline: none;
      border: none;

      /* Chrome, Safari, Edge, Opera */

      ::-webkit-inner-spin-button,
      ::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    `,
    className
  )
}

export default useResetStyle
