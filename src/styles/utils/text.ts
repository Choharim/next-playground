import { css } from '@emotion/react'

export const textOverflowEllipsis = (lineCount = 1) => css`
  overflow: hidden;
  white-space: pre-wrap;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: ${lineCount};
  -webkit-box-orient: vertical;
  word-break: break-all;
`
