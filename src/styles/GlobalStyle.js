import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

import variables from "./variables";

const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${variables}

  * {
    font-family: inherit;
    font: inherit;
  }

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    font-size: 1.1rem;
    font-weight: normal;
    font-family: "Source Code Pro", monospace;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }

    @media (max-width: 576px) {
      font-size: 0.8rem;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  main {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-height: 100vh;
    flex: 1;
  }

  footer {
    display: flex;
    flex: 1;
    padding: 0.3rem 0;
    border-top: 1px solid var(--green-cyan);
    justify-content: center;
    align-items: center;
  }
`;

export default GlobalStyle;
