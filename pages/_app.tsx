import '../styles/globals.css'
import "swiper/css/bundle";
import type { AppProps } from 'next/app'
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Augusto L. P. Nunes</title> 
      </Head>
      <Component {...pageProps} />
    </>
    )
}

export default MyApp
