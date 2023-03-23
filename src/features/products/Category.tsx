import styled from '@emotion/styled'
import React from 'react'

import { CATEGORIES } from '@/domain/product/constant'
import { Category } from '@/domain/product/type'
import { useToggleCategory } from './context/fillterProvider'

const Category = () => {
  const toggleCategory = useToggleCategory()

  const clickCategory = (category: Category) => () => {
    toggleCategory(category)
  }
  return (
    <Container>
      {CATEGORIES.map((item) => (
        <Wrapper key={item} onClick={clickCategory(item)}>
          {item}
        </Wrapper>
      ))}
    </Container>
  )
}

export default Category

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
