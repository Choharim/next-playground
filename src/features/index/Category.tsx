import styled from '@emotion/styled'
import React from 'react'

import { Category } from '@/domain/product/type'

type Props = {
  categories: Category[]
}
const Category = ({ categories }: Props) => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryChip key={item}>{item}</CategoryChip>
      ))}
    </Container>
  )
}

export default Category

type ChildProps = {
  children: string
}
function CategoryChip({ children }: ChildProps) {
  return <Wrapper>{children}</Wrapper>
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -10px;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  margin: 10px;
  cursor: pointer;
  border: 1px solid blue;
`
