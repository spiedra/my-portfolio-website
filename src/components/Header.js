import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>JuanCa Sequeira | Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="I am a business business student, passionate about technology and ambitious for challenges"
        />
        <link rel="icon" type="image/svg+xml" href="favicon.svg" sizes="any" />
        <link
          href="https://fonts.googleapis.com/css2?family=Spartan:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
    </>
  );
}
