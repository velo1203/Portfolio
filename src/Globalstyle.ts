import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Noto Sans KR', sans-serif;

  }
  body {

    padding: 25px;
    background-color: ${(props) => props.theme.colors.background};
    ${(props) => props.theme.media.mobile} {
        width: 100%;
        padding-top: 30px;
    }
  }

`;
