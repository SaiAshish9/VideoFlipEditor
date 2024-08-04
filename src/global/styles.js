import { createGlobalStyle, css } from "styled-components";

const genericStyles = css`
  body {
    margin: 0px;
    background-color: rgba(0, 0, 0, 0.75);
    font-family: "DM Sans", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
  }
`;

const GlobalStyles = createGlobalStyle`
   ${genericStyles}
`;

export default GlobalStyles;
