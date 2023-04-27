import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="BYC enables Pay-Per-Use payments for AI tools and services, making them more accessible and affordable for users while providing AI startups with a new revenue stream."
        />
        <meta
          name="keywords"
          content="BYC, Pay-Per-Use, AI, Artificial Intelligence, Payments, Subscription, Microtransactions"
        />
        <meta name="author" content="BYC" />

        {/* <!-- Open Graph (OG) Meta Tags --> */}
        <meta property="og:title" content="BYC | Pay Per Use Payments for AI" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.byc.ai" />
        <meta
          property="og:image"
          content="https://www.byc.ai/images/og-image.jpg"
        />
        <meta
          property="og:description"
          content="BYC offers a pre-paid payment system that lets users access AI tools and services without a subscription, benefiting both users and AI startups."
        />
        <meta property="og:site_name" content="BYC.ai" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="BYC | Pay Per Use Payments for AI"
        />
        <meta
          name="twitter:description"
          content="Experience AI tools and services without subscription constraints with BYC's Pay-Per-Use payment system, designed for both users and AI startups."
        />
        <meta
          name="twitter:image"
          content="https://www.byc.ai/images/twitter-image.jpg"
        />
        <meta name="twitter:creator" content="@BYC_AI" />
        <meta
          property="og:description"
          content="BYC.ai is bringing an innovative Pay Per Use Payment solution for AI startups. We're currently in closed beta. Drop your email to stay updated and join the revolution!"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
