// GlobalStyles.ts

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  html, body {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }

  body {
    background: #171717;
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
  }

  img {
    display: block;
    max-width: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
