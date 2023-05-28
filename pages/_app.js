import "@/styles/globals.scss";
import Layout from "@/components/layout";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
    <title>
    Доставка товаров из Турции в Узбекистан
            </title>
            <meta
              name="description"
              content={
                "Доставка товаров из Турции в Узбекистан"
              }
            />
            <meta
              name="keywords"
              content={
                "Доставка товаров из Турции в Узбекистан"
              }
            />

            <meta
              property="og:title"
              content={
                "Доставка товаров из Турции в Узбекистан"
              }
            />
            <meta
              property="og:description"
              content={
                "Доставка товаров из Турции в Узбекистан"
              }
            />
            <meta property="og:image" content="/Favicon/android-icon-192x192.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/logoo.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/logoo.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/logoo.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/logoo.png"
        />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  );
}
