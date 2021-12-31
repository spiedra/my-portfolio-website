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
`;

export default GlobalStyle;
