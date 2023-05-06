import { Html, Head, Main, NextScript } from 'next/document'

import { TOAST_PORTAL_ID } from '@/components/Toast/constant'

export const MODAL_PORTAL_ID = 'modal-portal'

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
