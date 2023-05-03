import { css } from '@emotion/css'

import Chip from '@/components/Chip'
import Frame from '../Frame'

const NoneCheck = () => {
  const clickChip = () => {
    console.log('chip')
  }

  return (
    <>
      <Frame title="nonClickable">
        <Chip variety="outline" typoVariety="subtitle_1" size="medium">
          medium outline
        </Chip>
        <Chip variety="outline" typoVariety="body_2" size="small">
          small outline
        </Chip>

        <Chip variety="fill" typoVariety="subtitle_1" size="medium">
          medium fill
        </Chip>
        <Chip variety="fill" typoVariety="body_2" size="small">
          small fill
        </Chip>

        <Chip
          variety="fill"
          typoVariety="subtitle_1"
          size="medium"
          className={CustomStyle}
        >
          custom medium fill
        </Chip>
      </Frame>

      <Frame title="cickable">
        <Chip
          variety="outline"
          typoVariety="subtitle_1"
          size="medium"
          onClick={clickChip}
        >
          clickable medium outline
        </Chip>
        <Chip
          variety="fill"
          typoVariety="subtitle_1"
          size="medium"
          onClick={clickChip}
        >
          clickable medium fill
        </Chip>

        <Chip
          variety="fill"
          typoVariety="subtitle_1"
          size="medium"
          onClick={clickChip}
          className={CustomStyle}
        >
          custom medium fill
        </Chip>
      </Frame>
    </>
  )
}

export default NoneCheck

const CustomStyle = css`
  border: 1px solid pink;
  background-color: white;
  color: pink;
  &:hover {
    background-color: pink;
    color: white;
  }
`
