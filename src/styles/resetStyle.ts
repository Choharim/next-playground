import { css } from '@emotion/react'

const resetStyle = css`
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

export default resetStyle
