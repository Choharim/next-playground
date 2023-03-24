import { css } from '@emotion/react'

export const globalStyle = css`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: auto;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  input,
  select,
  textarea {
    font-family: inherit;
    outline: none;
  }

  a,
  button,
  svg {
    cursor: pointer;
  }
  address {
    font-style: normal;
  }
  ul,
  ol,
  li {
    list-style: none;
  }

  #__next {
    height: 100%;
  }
`
