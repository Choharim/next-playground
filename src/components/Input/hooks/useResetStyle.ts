import { css } from '@emotion/react'

const useResetStyle = () => {
  return css`
    width: 100%;
    outline: none;
    border: none;
    cursor: inherit;

    /* Chrome, Safari, Edge, Opera */

    ::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  `
}

export default useResetStyle
