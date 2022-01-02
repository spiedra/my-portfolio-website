import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>JuanCa Sequeira | Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="I am a business computer student, passionate about technology and ambitious for challenges"
        />
         <link
          href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
