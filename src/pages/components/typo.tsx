import Typo from '@/components/Typo'
import Frame from '@/features/components/Frame'
import React from 'react'

const TypoPage = () => {
  return (
    <Frame title="텍스트 종류">
      <Typo variety="header_1">header_1</Typo>
      <Typo variety="header_2">header_2</Typo>
      <Typo variety="header_3">header_3</Typo>
      <Typo variety="header_4">header_4</Typo>

      <Typo variety="title_1">title_1</Typo>
      <Typo variety="title_2">title_2</Typo>
      <Typo variety="title_3">title_3</Typo>

      <Typo variety="subtitle_1">subtitle_1</Typo>
      <Typo variety="subtitle_2">subtitle_2</Typo>
      <Typo variety="subtitle_3">subtitle_3</Typo>

      <Typo variety="body_1">body_1</Typo>
      <Typo variety="body_2">body_2</Typo>
      <Typo variety="body_3">body_3</Typo>
    </Frame>
  )
}

export default TypoPage
