import Head from "next/head";
import type { AppProps } from "next/app";

import "../assets/styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Job Application</title>
      </Head>
      <div className="container">
        <Component {...pageProps} />
      </div>
    </>
  );
}
