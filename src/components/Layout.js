import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Juan Sequeira | Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Cybersecurity professional with expertise in offensive security."
        />
      </Head>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
