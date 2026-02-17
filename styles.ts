import { createGlobalStyle } from "styled-components";

export const Colors = {
    primary: 'rgb(240, 18, 136)',
    secondary: 'rgb(255, 133, 198)',
    background: '#FFF5F5',
    text: '#ffffff',
}

export const GlobalStyle = createGlobalStyle`
  * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "SN Pro", sans-serif;
    }

    body {
        .container {
            max-width: 1200px;
            margin: 0 auto;
        }
    }       
`