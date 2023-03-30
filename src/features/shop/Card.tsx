import { Food } from '@/domain/food/type'
import styled from '@emotion/styled'

import ShopButton from './ShopButton'

type Props = {
  food: Food
  hasTotalPrice: boolean
}

export const WIDTH = '416px'
const Card = ({
  food: { isNew, name, image, stock, price },
  hasTotalPrice,
}: Props) => {
  const quantity = 1

  const renderButtons = () => {
    if (hasTotalPrice) {
      return <ShopButton variety="contain-normal">취소</ShopButton>
    } else {
      return (
        <>
          {stock > 0 && <ShopButton variety="contain-normal">빼기</ShopButton>}
          <ShopButton
            variety={isNew ? 'contain-primary' : 'contain-secondary'}
            disabled={stock === 0}
          >
            담기
          </ShopButton>
        </>
      )
    }
  }

  const renderInfo = () => {
    if (hasTotalPrice) {
      return (
        <>
          <DetailRow>
            <Subtitle>수량</Subtitle>
            <Price>{quantity ?? 0}</Price>
          </DetailRow>
          <TotalWrapper>
            <Subtitle>상품금액</Subtitle>
            <Price>{price * quantity}</Price>
          </TotalWrapper>
        </>
      )
    } else {
      return (
        <>
          <DetailRow>
            <Subtitle>잔량</Subtitle>
            <Price>{stock}</Price>
          </DetailRow>
          <DetailRow>
            <Subtitle>수량</Subtitle>
            <Price>{quantity ?? 0}</Price>
          </DetailRow>
        </>
      )
    }
  }

  return (
    <Box>
      {isNew && <NewTag>⭐</NewTag>}
      <Img>{image}</Img>
      <DetailsWrapper>
        <Details>
          <Name>{name}</Name>
          <Price>{price} 원</Price>
          {renderInfo()}
        </Details>
        <ButtonContainer>{renderButtons()}</ButtonContainer>
      </DetailsWrapper>
    </Box>
  )
}

export default Card

const Box = styled.div`
  position: relative;

  display: flex;
  padding: 16px;
  height: 240px;
  width: ${WIDTH};

  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.white};
`

const NewTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -10px;
  left: -10px;
  width: 44px;
  height: 44px;
  font-size: 24px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.primary50};
`

const Img = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 100px;
  width: 50%;
`

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
`
const Details = styled.div`
  display: flex;
  flex-direction: column;
`

const DetailRow = styled.div`
  display: flex;
  align-items: center;
`

const Name = styled.span`
  ${({ theme }) => theme.font.subtitle_1};
  color: ${({ theme }) => theme.color.grey900};
  margin-top: 10px;
`

const Price = styled.span`
  ${({ theme }) => theme.font.subtitle_3};
  color: ${({ theme }) => theme.color.grey900};
`

const TotalWrapper = styled.div`
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid ${({ theme }) => theme.color.grey500};
  margin-right: 30px;

  display: flex;
  align-items: center;
`

const Subtitle = styled.span`
  ${({ theme }) => theme.font.body_1};
  margin-right: 8px;

  color: ${({ theme }) => theme.color.grey500};
`

const ButtonContainer = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`
