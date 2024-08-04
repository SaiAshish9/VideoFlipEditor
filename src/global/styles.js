import { createGlobalStyle, css } from "styled-components";

const genericStyles = css`
  body {
    margin: 0px;
    background-color: rgba(55, 57, 63, 1);
    font-family: "DM Sans", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
  }
`;

const GlobalStyles = createGlobalStyle`
   ${genericStyles}
`;

export default GlobalStyles;
