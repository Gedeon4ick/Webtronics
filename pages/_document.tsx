import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="/static/Inter-Black.ttf" rel="stylesheet" />
        <link href="/static/Inter-Bold.ttf" rel="stylesheet" />
        <link href="/static/Inter-ExtraBold.ttf" rel="stylesheet" />
        <link href="/static/Inter-ExtraLight.ttf" rel="stylesheet" />
        <link href="/static/Inter-Light.ttf" rel="stylesheet" />
        <link href="/static/Inter-Medium.ttf" rel="stylesheet" />
        <link href="/static/Inter-Regular.ttf" rel="stylesheet" />
        <link href="/static/Inter-SemiBold.ttf" rel="stylesheet" />
        <link href="/static/Inter-Thin.ttf" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
