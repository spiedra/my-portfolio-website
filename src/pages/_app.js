import { ThemeProvider } from "styled-components";
import Layout from "../components/Layout";
import GlobalStyle from "../styles/GlobalStyle";
import theme from "../styles/theme";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
