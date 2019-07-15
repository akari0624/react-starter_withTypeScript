import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  html, body {
    width: 100vw;
    height: 100vh;
  }

  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  /* 改用在html裡 <link rel="preload"...> */
  /* @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap'); */
`

export {GlobalStyle as StyledComponentGlobalStyle}