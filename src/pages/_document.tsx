import { Html, Head, Main, NextScript } from 'next/document'

export const MODAL_PORTAL_ID = 'modal-portal'
export const TOAST_PORTAL_ID = 'toast-portal'

export default function Document() {
  return (
    <Html lang="ko">
      <Head />
      <body>
        <Main />
        <div id={MODAL_PORTAL_ID} />
        <div id={TOAST_PORTAL_ID} />
        <NextScript />
      </body>
    </Html>
  )
}
