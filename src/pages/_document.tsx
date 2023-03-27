import { Html, Head, Main, NextScript } from 'next/document'

export const MODAL_CONTAINER_ID = 'modal-container'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <div id={MODAL_CONTAINER_ID} />
        <NextScript />
      </body>
    </Html>
  )
}
