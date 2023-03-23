import Frame from '@/features/components/Frame'

import Button from '@/components/button/Button'
import styled from '@emotion/styled'

const ButtonPage = () => {
  return (
    <Frame title="버튼 종류">
      <CustomButton variety="contain">contain</CustomButton>
      <CustomButton variety="contain" disabled>
        disabled contain
      </CustomButton>

      <CustomButton variety="outline">outline</CustomButton>
      <CustomButton variety="outline" disabled>
        disabled outline
      </CustomButton>

      <CustomButton variety="text">text</CustomButton>
      <CustomButton variety="text" disabled>
        disabled text
      </CustomButton>
    </Frame>
  )
}

export default ButtonPage

const CustomButton = styled(Button)`
  height: 48px;
  width: 200px;
  ${({ theme }) => theme.font.body_1};
`
