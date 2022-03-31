import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme}) => theme.colours.background.hex}; 
  }
`

export default GlobalStyle
