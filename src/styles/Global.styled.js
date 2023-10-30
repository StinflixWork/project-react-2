import { createGlobalStyle } from 'styled-components'

export const GlobalStyled = createGlobalStyle`
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul,
  ol,
  li {
    list-style: none;
  }

  img {
    vertical-align: top;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: inherit;
    font-size: inherit;
  }

  html,
  body {
    height: 100%;
    line-height: 1;
  }

  textarea,
  button,
  input {
    font-weight: inherit;
    font-size: inherit;
    color: inherit;
    font-family: inherit;
  }

  
  button {
    cursor: pointer;
    background-color: inherit;
  }

  #root {
    height: 100%;
  }

  body {
    font-family: Ubuntu, sans-serif;
    font-size: 18px;
  }
`
