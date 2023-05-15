import { css } from '@emotion/react'

export const hiddenElement = css`
  position: absolute; // 레이아웃에 영향을 끼치지 않도록
  clip: rect(0 0 0 0);
  width: 1px; // 스크린 리더가 읽을 수 있도록
  height: 1px;
  margin: -1px;
  overflow: hidden; // 눈에 보이는 부분을 제거
`
