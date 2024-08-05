import { createGlobalStyle, css } from "styled-components";

const genericStyles = css`
  body {
    margin: 0px;
    background-color: rgba(55, 57, 63, 1);
    font-family: "DM Sans", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
  }
  canvas,
  img {
    overflow: visible !important;
  }
  canvas, img {
    overflow-clip-margin: border-box; /* or 'padding-box', 'content-box', or 'initial' */
  }
`;

const GlobalStyles = createGlobalStyle`
   ${genericStyles}
`;

export default GlobalStyles;
