import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* 基本favicon */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

        {/* 标准尺寸 */}
        {/* <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" /> */}

        {/* Apple设备 */}
        {/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" /> */}

        {/* Android设备 */}
        {/* <link rel="manifest" href="/site.webmanifest" /> */}

        {/* 主题颜色 */}
        {/* <meta name="theme-color" content="#ffffff" /> */}

        {/* 其他meta标签 */}
        {/* <meta name="msapplication-TileColor" content="#ffffff" /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
