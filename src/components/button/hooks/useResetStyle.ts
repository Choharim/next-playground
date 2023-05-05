import { css } from '@emotion/react'

const useResetStyle = () => {
  return css`
    width: 100%;
    background-color: transparent;
    outline: none;
    border: none;

    &:disabled {
      cursor: not-allowed;
    }
  `
}

export default useResetStyle
