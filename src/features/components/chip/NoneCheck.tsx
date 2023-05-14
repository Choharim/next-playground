import styled from '@emotion/styled'

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

        <CustomChip variety="fill" typoVariety="subtitle_1" size="medium">
          custom medium fill
        </CustomChip>
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

        <CustomChip
          variety="fill"
          typoVariety="subtitle_1"
          size="medium"
          onClick={clickChip}
        >
          custom medium fill
        </CustomChip>
      </Frame>
    </>
  )
}

export default NoneCheck

const CustomChip = styled(Chip)`
  border: 1px solid pink;
  background-color: white;
  color: pink;
  &:hover {
    background-color: pink;
    color: white;
  }
`
