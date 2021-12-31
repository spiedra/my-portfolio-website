import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

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
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
