import styled from '@emotion/styled'

import { Food } from '@/domain/food/type'

import Card, { WIDTH } from './Card'

type Props = {
  foods: Food[]
}
const Foods = ({ foods }: Props) => {
  return (
    <Container>
      {foods.map((food) => (
        <Card key={food.id} food={food} hasTotalPrice={false} />
      ))}
    </Container>
  )
}

export default Foods

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${WIDTH}, ${WIDTH}));

  margin-top: 48px;
  gap: 48px;
`
