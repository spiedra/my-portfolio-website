import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

import variables from "./variables";

const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${variables}

  body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
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
